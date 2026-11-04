import numpy as np, wave
SR=44100; BPM=96; beat=60/BPM; DUR=41.0
N=int(SR*DUR); mix=np.zeros((N,2))
rng=np.random.default_rng(3)
def note(f): return 440*2**((f-69)/12)
def add(sig,start,pan=0.0,gain=1.0):
    i=int(start*SR); j=min(N,i+len(sig))
    if i>=N: return
    s=sig[:j-i]*gain
    mix[i:j,0]+=s*(1-pan)/1; mix[i:j,1]+=s*(1+pan)/1
def ep(freq,dur):  # soft electric piano
    t=np.arange(int(SR*dur))/SR
    env=np.exp(-t*2.2)*(1-np.exp(-t*200))
    s=np.sin(2*np.pi*freq*t)+0.35*np.sin(2*np.pi*2*freq*t)*np.exp(-t*4)+0.12*np.sin(2*np.pi*3*freq*t)*np.exp(-t*6)
    s*= (1+0.08*np.sin(2*np.pi*4.5*t))  # tremolo
    return s*env
def pad(freqs,dur):
    t=np.arange(int(SR*dur))/SR
    env=np.minimum(1,t/0.8)*np.minimum(1,(dur-t)/0.8)
    s=sum(np.sin(2*np.pi*f*t+np.sin(2*np.pi*0.3*t)*0.5)+0.5*np.sin(2*np.pi*f*1.005*t) for f in freqs)
    return s*env/len(freqs)
def bass(freq,dur):
    t=np.arange(int(SR*dur))/SR
    env=np.minimum(1,t/0.01)*np.exp(-t*1.5)
    return (np.sin(2*np.pi*freq*t)+0.2*np.sin(2*np.pi*2*freq*t))*env
def kick():
    t=np.arange(int(SR*0.35))/SR
    f=50+90*np.exp(-t*30)
    return np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-t*9)
def hat(open_=False):
    t=np.arange(int(SR*(0.18 if open_ else 0.05)))/SR
    n=rng.standard_normal(len(t)); n=np.diff(n,prepend=0)
    return n*np.exp(-t*(18 if open_ else 70))
def snap():
    t=np.arange(int(SR*0.2))/SR
    n=rng.standard_normal(len(t))
    return (n*0.6+np.sin(2*np.pi*190*t))*np.exp(-t*22)
# progression (C major): Fmaj7, Em7, Dm7, G7sus->Cmaj7
prog=[([53],[65,69,72,76]),([52],[64,67,71,74]),([50],[62,65,69,72]),([55],[67,71,74,77])]
bar=4*beat; bars=int(DUR/bar)+1
mel=[76,79,81,79,76,74,72,74, 76,74,72,71,72,74,76,79]
for b in range(bars):
    t0=b*bar; root,ch=prog[b%4]
    add(pad([note(n) for n in ch],bar+0.6),t0,0,0.10)
    for k,off in enumerate([0,1.5,2.5]):
        add(bass(note(root[0]-12),beat*1.2),t0+off*beat,0,0.32 if k==0 else 0.22)
    for k in range(4):  # chord stabs
        if k in (1,3):
            for i,n in enumerate(ch): add(ep(note(n),beat*1.5),t0+k*beat+0.01*i,-0.2+0.13*i,0.05)
    if b>=1:  # drums after first bar
        for k in range(4):
            add(kick(),t0+k*beat,0,0.5 if k in (0,2) else 0.0)
            if k in (1,3): add(snap(),t0+k*beat,0.1,0.18)
        for k in range(8): add(hat(k%4==3),t0+k*beat/2+ (0.02 if k%2 else 0),0.4,0.05 if k%2 else 0.08)
    if b>=2 and b<bars-1:  # melody
        for k in range(4):
            idx=(b*4+k)%len(mel)
            if (b+k)%3!=2: add(ep(note(mel[idx]),beat*1.8),t0+k*beat+beat*0.5,0.25,0.09)
# simple stereo delay/reverb
d=int(SR*beat*0.75); wet=np.zeros_like(mix); wet[d:]+=mix[:-d]*0.25; wet[2*d:]+=mix[:-2*d]*0.1
mix=mix+wet[:,::-1]
# warm lowpass
from scipy.signal import butter, lfilter
b_,a_=butter(2,6500/(SR/2)); mix=lfilter(b_,a_,mix,axis=0)
mix+= rng.standard_normal(mix.shape)*0.0006  # light vinyl hiss
t=np.arange(N)/SR; fade=np.minimum(1,t/1.5)*np.minimum(1,(DUR-t)/3.0); mix*=fade[:,None]
mix/=np.max(np.abs(mix))*1.12
out=(mix*32767).astype(np.int16)
with wave.open(__import__('sys').argv[1],'w') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(out.tobytes())

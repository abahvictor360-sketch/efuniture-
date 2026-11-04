import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import * as Ic from '../icons'

export default function Login() {
  const nav = useNavigate(); const { setUser } = useStore()
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [show, setShow] = useState(false)
  const [err, setErr] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return setErr('Please enter a valid email address')
    if (pw.length < 6) return setErr('Password must be at least 6 characters')
    if (mode === 'signup' && !name.trim()) return setErr('Please enter your name')
    setUser({ name: name.trim() || email.split('@')[0].replace(/^\w/, (c) => c.toUpperCase()), email })
    nav('/home', { replace: true })
  }
  const guest = () => { setUser({ name: 'Guest', email: 'guest@efuniture.app' }); nav('/home', { replace: true }) }

  return (
    <div className="login">
      <div className="login-hero">
        <img src="/img/haven.jpg" alt="" />
        <div className="login-hero-shade" />
        <div className="login-hero-text">
          <div className="glass glass-strong login-badge"><Ic.Logo size={30} color="#fff" accent="#9fe3d9" /></div>
          <h1>{mode === 'login' ? 'Welcome back' : 'Create account'}</h1>
          <p>{mode === 'login' ? 'Sign in to continue shopping timeless pieces.' : 'Join Efuniture and furnish your space beautifully.'}</p>
        </div>
      </div>
      <form className="login-card glass" onSubmit={submit}>
        <div className="seg">
          <button type="button" className={mode === 'login' ? 'on' : ''} onClick={() => { setMode('login'); setErr('') }}>Log In</button>
          <button type="button" className={mode === 'signup' ? 'on' : ''} onClick={() => { setMode('signup'); setErr('') }}>Sign Up</button>
        </div>
        {mode === 'signup' && (
          <label className="field"><Ic.User size={18} /><input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} /></label>
        )}
        <label className="field"><Ic.Mail size={18} /><input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></label>
        <label className="field"><Ic.Lock size={18} /><input type={show ? 'text' : 'password'} placeholder="Password" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="current-password" />
          <button type="button" className="ghost" onClick={() => setShow(!show)} aria-label="Show password"><Ic.Eye size={18} /></button></label>
        {mode === 'login' && <div className="forgot"><a href="#" onClick={(e) => { e.preventDefault(); setErr('Reset link sent — check your inbox.') }}>Forgot password?</a></div>}
        {err && <div className="err">{err}</div>}
        <button className="btn block" type="submit">{mode === 'login' ? 'Log In' : 'Create Account'} <Ic.Arrow size={18} /></button>
        <div className="or"><span>or continue with</span></div>
        <div className="socials">
          <button type="button" className="soc" onClick={guest}><svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.2-.1-2.3-.4-3.5z"/></svg>Google</button>
          <button type="button" className="soc" onClick={guest}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.9zM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.1-.6 2.8-1.4z"/></svg>Apple</button>
        </div>
        <button type="button" className="link-btn" onClick={guest}>Continue as guest</button>
      </form>
    </div>
  )
}

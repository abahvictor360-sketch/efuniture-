import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import { Logo, Arrow } from '../icons'

export default function Splash() {
  const nav = useNavigate(); const { user } = useStore()
  useEffect(() => { const t = setTimeout(() => nav(user ? '/home' : '/login', { replace: true }), 2800); return () => clearTimeout(t) }, [])
  return (
    <div className="splash" onClick={() => nav(user ? '/home' : '/login', { replace: true })}>
      <img className="splash-bg" src="/img/room-lotus.jpg" alt="" />
      <div className="splash-shade" />
      <div className="splash-center">
        <div className="splash-logo glass glass-strong"><Logo size={64} color="#ffffff" accent="#9fe3d9" /></div>
        <h1>Efuniture</h1>
        <p>Crafted Comfort, Timeless Style</p>
      </div>
      <div className="splash-foot">
        <div className="loader"><i /></div>
        <span>Tap to continue <Arrow size={14} /></span>
      </div>
    </div>
  )
}

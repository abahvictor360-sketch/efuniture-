import { useEffect, useRef } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useStore } from './store'
import { TabBar, Toast } from './components'
import Splash from './pages/Splash'
import Login from './pages/Login'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Category from './pages/Category'
import Product from './pages/Product'
import Search from './pages/Search'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'
import Profile from './pages/Profile'

const TAB_ROUTES = ['/home', '/shop', '/favorites', '/orders', '/profile']

function Guard({ children }) {
  const { user } = useStore()
  return user ? children : <Navigate to="/login" replace />
}

export default function App() {
  const loc = useLocation(); const scroller = useRef(null)
  useEffect(() => { scroller.current?.scrollTo(0, 0) }, [loc.pathname])
  const showTabs = TAB_ROUTES.includes(loc.pathname)
  return (
    <div className="stage">
      {/* Liquid glass refraction filter (used by backdrop-filter in Chromium) */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
        <filter id="liquid-glass" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="7" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
          <feDisplacementMap in="SourceGraphic" in2="soft" scale="38" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="stage-copy">
        <div className="stage-logo">Efuniture</div>
        <p>Crafted Comfort. Timeless Style.<br />A furniture shopping app experience.</p>
      </div>
      <div className="phone">
        <div className="statusbar"><span>9:41</span><span className="sb-icons"><i className="sig" /><i className="wifi" /><i className="bat" /></span></div>
        <div className="screen" ref={scroller}>
          <div key={loc.pathname} className="route-anim">
            <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Guard><Home /></Guard>} />
              <Route path="/shop" element={<Guard><Shop /></Guard>} />
              <Route path="/category/:name" element={<Guard><Category /></Guard>} />
              <Route path="/product/:id" element={<Guard><Product /></Guard>} />
              <Route path="/search" element={<Guard><Search /></Guard>} />
              <Route path="/cart" element={<Guard><Cart /></Guard>} />
              <Route path="/favorites" element={<Guard><Favorites /></Guard>} />
              <Route path="/orders" element={<Guard><Orders /></Guard>} />
              <Route path="/profile" element={<Guard><Profile /></Guard>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
        {showTabs && <TabBar />}
        <Toast />
        <div className="home-indicator" />
      </div>
    </div>
  )
}

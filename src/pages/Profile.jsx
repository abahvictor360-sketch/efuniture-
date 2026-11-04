import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import * as Ic from '../icons'

export default function Profile() {
  const { user, setUser, orders, favs, cartCount } = useStore(); const nav = useNavigate()
  const items = [
    { icon: Ic.Doc, label: 'My Orders', to: '/orders' },
    { icon: Ic.Heart, label: 'Favorites', to: '/favorites' },
    { icon: Ic.Pin, label: 'Shipping Addresses' },
    { icon: Ic.Card, label: 'Payment Methods' },
    { icon: Ic.Bell, label: 'Notifications' },
    { icon: Ic.Help, label: 'Help & Support' },
  ]
  return (
    <div className="page with-tabs profile">
      <div className="profile-bg" />
      <div className="profile-head">
        <div className="avatar-glass glass glass-strong">
          <img src="/img/avatar.jpg" alt="Profile" />
        </div>
        <h2>{user?.name || 'Guest'}</h2>
        <p>{user?.email}</p>
        <div className="stats glass">
          <div><b>{orders.length}</b><small>Orders</small></div>
          <div><b>{favs.length}</b><small>Favorites</small></div>
          <div><b>{cartCount}</b><small>In Cart</small></div>
        </div>
      </div>
      <div className="menu">
        {items.map(({ icon: Icon, label, to }) => (
          <button key={label} className="menu-item" onClick={() => to && nav(to)}>
            <span className="mi-ic"><Icon size={19} /></span>{label}<Ic.Chevron size={18} className="mi-ch" />
          </button>
        ))}
        <button className="menu-item danger" onClick={() => { setUser(null); nav('/login', { replace: true }) }}>
          <span className="mi-ic"><Ic.Logout size={19} /></span>Log Out
        </button>
      </div>
    </div>
  )
}

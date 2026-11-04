import { NavLink, useNavigate } from 'react-router-dom'
import { useStore } from './store'
import { money, byId } from './data'
import * as Ic from './icons'

export function Brand({ small }) {
  return (
    <div className="brand">
      <Ic.Logo size={small ? 28 : 36} />
      <div>
        <div className="brand-name">Efuniture</div>
        <div className="brand-tag">Crafted Comfort, Timeless Style</div>
      </div>
    </div>
  )
}

export function CartButton() {
  const { cartCount } = useStore(); const nav = useNavigate()
  return (
    <button className="icon-btn cart-btn" aria-label="Cart" onClick={() => nav('/cart')}>
      <Ic.Cart />{cartCount > 0 && <span key={cartCount} className="badge bump">{cartCount}</span>}
    </button>
  )
}

export function SearchBar({ placeholder = 'Search furniture, decor...', value, onChange, onFilter, autoFocus, onFocus }) {
  return (
    <div className="search">
      <Ic.Search size={20} />
      <input placeholder={placeholder} value={value} onChange={(e) => onChange?.(e.target.value)} autoFocus={autoFocus} onFocus={onFocus} />
      {onFilter && <button className="ghost" aria-label="Filters" onClick={onFilter}><Ic.Sliders size={20} /></button>}
    </div>
  )
}

export function Rating({ p }) {
  return <div className="rating"><Ic.Star size={13} /> {p.rating} <span>({p.reviews})</span></div>
}

export function ProductCard({ p, wide }) {
  const { favs, toggleFav } = useStore(); const nav = useNavigate()
  const fav = favs.includes(p.id)
  return (
    <div className={'pcard' + (wide ? ' wide' : '')} onClick={() => nav('/product/' + p.id)}>
      <div className="pimg">
        <img src={p.img} alt={p.name} loading="lazy" />
        {p.isNew && <span className="tag-new">New</span>}
        <button className={'fav' + (fav ? ' on' : '')} aria-label="Favorite" onClick={(e) => { e.stopPropagation(); toggleFav(p.id) }}>
          <Ic.Heart filled={fav} size={16} />
        </button>
      </div>
      <div className="pbody">
        <div className="pname-row">
          <div className="pname">{p.name}</div>
          {wide && p.colors.length > 1 && <div className="dots">{p.colors.slice(0, 2).map((c) => <i key={c} style={{ background: c }} />)}</div>}
        </div>
        <div className="price">{money(p.price)}</div>
        <Rating p={p} />
      </div>
    </div>
  )
}

const tabs = [
  { to: '/home', label: 'Home', icon: Ic.Home },
  { to: '/shop', label: 'Shop', icon: Ic.Box },
  { to: '/favorites', label: 'Favorites', icon: Ic.Heart },
  { to: '/orders', label: 'Orders', icon: Ic.Doc },
  { to: '/profile', label: 'Profile', icon: Ic.User },
]
export function TabBar() {
  return (
    <nav className="tabbar glass">
      {tabs.map(({ to, label, icon: Icon }) => (
        <NavLink key={to} to={to} className={({ isActive }) => 'tab' + (isActive ? ' active' : '')}>
          {({ isActive }) => <><Icon active={isActive} filled={isActive && label === 'Favorites'} /><span>{label}</span></>}
        </NavLink>
      ))}
    </nav>
  )
}

export function Header({ title, right, back = true }) {
  const nav = useNavigate()
  return (
    <div className="header">
      {back ? <button className="icon-btn" aria-label="Back" onClick={() => nav(-1)}><Ic.Back /></button> : <span style={{ width: 40 }} />}
      <h2>{title}</h2>
      {right || <span style={{ width: 40 }} />}
    </div>
  )
}

export function Toast() {
  const { toast } = useStore()
  return <div className={'toast glass' + (toast ? ' show' : '')}><Ic.Check size={16} /> {toast}</div>
}

export function Empty({ icon: Icon, title, text, cta, to }) {
  const nav = useNavigate()
  return (
    <div className="empty">
      <div className="empty-ic glass"><Icon size={34} /></div>
      <h3>{title}</h3><p>{text}</p>
      {cta && <button className="btn" onClick={() => nav(to)}>{cta}</button>}
    </div>
  )
}

export function MiniCartBar() {
  const { cart, cartCount, cartTotal } = useStore(); const nav = useNavigate()
  if (!cartCount) return null
  const first = cart[0]
  return (
    <div className="minicart glass">
      <img src={byId(first.id)?.img} alt="" />
      <div className="mc-info"><small>{cartCount} Item{cartCount > 1 ? 's' : ''} in Cart</small><b>{money(cartTotal)}</b></div>
      <button className="btn" onClick={() => nav('/cart')}>View Cart <Ic.Arrow size={18} /></button>
    </div>
  )
}

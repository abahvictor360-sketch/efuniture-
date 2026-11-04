import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import { byId, money } from '../data'
import { Header, Empty } from '../components'
import * as Ic from '../icons'

export default function Cart() {
  const { cart, setQty, cartTotal, checkout } = useStore(); const nav = useNavigate()
  const [done, setDone] = useState(null)
  const shipping = cartTotal >= 199 || !cartTotal ? 0 : 25
  if (done) return (
    <div className="page center-page">
      <div className="success glass glass-strong"><Ic.Check size={44} /></div>
      <h1 className="title">Order placed!</h1>
      <p className="subtitle">Order <b>{done}</b> is confirmed. We'll notify you when it ships.</p>
      <button className="btn block" onClick={() => nav('/orders', { replace: true })}>Track Order <Ic.Arrow size={18} /></button>
      <button className="link-btn" onClick={() => nav('/home', { replace: true })}>Continue shopping</button>
    </div>
  )
  return (
    <div className="page with-cta">
      <Header title="My Cart" />
      {!cart.length ? <Empty icon={Ic.Cart} title="Your cart is empty" text="Browse our collection and find something you love." cta="Start Shopping" to="/home" /> : <>
        <div className="cart-list">
          {cart.map(({ id, qty }) => { const p = byId(id); return (
            <div key={id} className="cart-item">
              <img src={p.img} alt={p.name} onClick={() => nav('/product/' + id)} />
              <div className="ci-info"><b>{p.name}</b><small>{p.material}</small><span className="price">{money(p.price)}</span></div>
              <div className="ci-side">
                <button className="ghost" aria-label="Remove" onClick={() => setQty(id, 0)}><Ic.Trash size={18} /></button>
                <div className="qty small">
                  <button onClick={() => setQty(id, qty - 1)} aria-label="Less"><Ic.Minus size={14} /></button><b>{qty}</b>
                  <button onClick={() => setQty(id, qty + 1)} aria-label="More"><Ic.Plus size={14} /></button>
                </div>
              </div>
            </div>) })}
        </div>
        <div className="promo"><input placeholder="Promo code" /><button className="btn small">Apply</button></div>
        <div className="summary">
          <div><span>Subtotal</span><b>{money(cartTotal)}</b></div>
          <div><span>Delivery</span><b>{shipping ? money(shipping) : 'Free'}</b></div>
          <div className="total"><span>Total</span><b>{money(cartTotal + shipping)}</b></div>
        </div>
        <div className="pd-cta glass">
          <div><small>Total</small><b>{money(cartTotal + shipping)}</b></div>
          <button className="btn" onClick={() => setDone(checkout())}>Checkout <Ic.Arrow size={18} /></button>
        </div>
      </>}
    </div>
  )
}

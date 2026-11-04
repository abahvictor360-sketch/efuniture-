import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../store'
import { byId, money, products } from '../data'
import { CartButton, ProductCard, Rating } from '../components'
import * as Ic from '../icons'

export default function Product() {
  const { id } = useParams(); const nav = useNavigate()
  const p = byId(id); const { favs, toggleFav, addToCart } = useStore()
  const [qty, setQty] = useState(1); const [color, setColor] = useState(0)
  if (!p) return <div className="page"><p>Product not found.</p></div>
  const fav = favs.includes(p.id)
  return (
    <div className="page product-page">
      <div className="pd-hero">
        <img src={p.img} alt={p.name} />
        <div className="pd-top">
          <button className="icon-btn glass" aria-label="Back" onClick={() => nav(-1)}><Ic.Back /></button>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className={'icon-btn glass' + (fav ? ' fav-on' : '')} aria-label="Favorite" onClick={() => toggleFav(p.id)}><Ic.Heart filled={fav} /></button>
            <div className="glass round"><CartButton /></div>
          </div>
        </div>
      </div>
      <div className="pd-body">
        <div className="pd-row">
          <div><span className="pd-cat">{p.category}</span><h1>{p.name}</h1></div>
          <div className="price big">{money(p.price)}</div>
        </div>
        <Rating p={p} />
        <p className="pd-desc">{p.desc}</p>
        <div className="pd-specs">
          <div><small>Material</small><b>{p.material}</b></div>
          <div><small>Delivery</small><b>3–5 days</b></div>
          <div><small>Warranty</small><b>5 years</b></div>
        </div>
        <div className="pd-row">
          <div><small className="muted">Color</small>
            <div className="opt-row">{p.colors.map((c, i) => <button key={c} className={'swatch' + (i === color ? ' on' : '')} style={{ background: c }} onClick={() => setColor(i)} aria-label={c} />)}</div>
          </div>
          <div className="qty">
            <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Less"><Ic.Minus size={16} /></button>
            <b>{qty}</b>
            <button onClick={() => setQty(qty + 1)} aria-label="More"><Ic.Plus size={16} /></button>
          </div>
        </div>
        <div className="sec-head"><h3>You may also like</h3></div>
        <div className="hscroll">{products.filter((x) => x.id !== p.id).slice(0, 5).map((x) => <ProductCard key={x.id} p={x} />)}</div>
      </div>
      <div className="pd-cta glass">
        <div><small>Total</small><b>{money(p.price * qty)}</b></div>
        <button className="btn" onClick={() => addToCart(p.id, qty)}><Ic.Cart size={18} /> Add to Cart</button>
      </div>
    </div>
  )
}

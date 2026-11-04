import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Brand, CartButton, SearchBar, ProductCard } from '../components'
import { categories, products } from '../data'
import * as Ic from '../icons'

const slides = [
  { title: ['Crafted Comfort.', 'Timeless Style.'], text: ['Discover furniture', 'that fits your life.'], img: '/img/products/boucle-arc-chair.webp', to: '/category/Living Room' },
  { title: ['Lotus Bloom.', 'Pure Statement.'], text: ['Our new luxury sofa', 'is here — 15% off.'], img: '/img/products/lotus-sofa.webp', to: '/product/lotus-sofa' },
  { title: ['Solid Wood.', 'Built to Last.'], text: ['Hand-finished walnut', 'frames that endure.'], img: '/img/products/walnut-arch-chair.webp', to: '/product/walnut-arch-chair' },
  { title: ['Sculpted.', 'Like Art.'], text: ['Designer pieces for', 'bold interiors.'], img: '/img/products/maple-leaf-chair.webp', to: '/category/Luxury' },
]

export default function Home() {
  const nav = useNavigate()
  const [slide, setSlide] = useState(0)
  useEffect(() => { const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 4000); return () => clearInterval(t) }, [])
  const s = slides[slide]
  return (
    <div className="page with-tabs">
      <div className="topbar"><Brand /><CartButton /></div>
      <div className="row-gap">
        <div style={{ flex: 1 }} onClick={() => nav('/search')}><SearchBar onFocus={() => nav('/search')} /></div>
        <button className="icon-btn boxed" aria-label="Filters" onClick={() => nav('/shop')}><Ic.Sliders size={20} /></button>
      </div>
      <div className="chips">
        {categories.map((c, i) => (
          <button key={c} className={'chip' + (i === 0 ? ' on' : '')} onClick={() => nav(i === 0 ? '/shop' : '/category/' + c)}>{c}</button>
        ))}
      </div>

      <div className="hero" onClick={() => nav(s.to)}>
        <img key={s.img} src={s.img} alt="" className="hero-img fade-in" />
        <div className="hero-text">
          <h1 key={s.title[0]} className="fade-in">{s.title[0]}<br />{s.title[1]}</h1>
          <p>{s.text[0]}<br />{s.text[1]}</p>
          <button className="btn white">Shop Now <Ic.Arrow size={16} /></button>
        </div>
        <div className="hero-dots glass">{slides.map((_, i) => <i key={i} className={i === slide ? 'on' : ''} onClick={(e) => { e.stopPropagation(); setSlide(i) }} />)}</div>
      </div>

      <div className="sec-head"><h3>Popular Picks</h3><button className="link-btn" onClick={() => nav('/shop')}>View All</button></div>
      <div className="hscroll">
        {products.filter((p) => p.popular).concat(products.filter((p) => !p.popular).slice(0, 2)).map((p) => <ProductCard key={p.id} p={p} />)}
      </div>

      <div className="perks">
        <div><Ic.Award size={20} /><span><b>Premium Quality</b><small>Crafted to last</small></span></div>
        <div><Ic.Truck size={20} /><span><b>Free Delivery</b><small>On orders over $199</small></span></div>
        <div><Ic.Return size={20} /><span><b>Easy Returns</b><small>30-day returns</small></span></div>
      </div>
    </div>
  )
}

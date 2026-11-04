import { useNavigate } from 'react-router-dom'
import { CartButton, ProductCard, SearchBar } from '../components'
import { categories, products } from '../data'

const covers = { 'Living Room': '/img/products/luxe-gold-sofa.webp', Bedroom: '/img/products/ruby-swivel.webp', Lounge: '/img/products/cove-cafe-chair.webp', Luxury: '/img/products/lotus-sofa.webp', Office: '/img/products/arc-x-lounge.webp' }

export default function Shop() {
  const nav = useNavigate()
  return (
    <div className="page with-tabs">
      <div className="topbar"><h1 className="title" style={{ margin: 0 }}>Shop</h1><CartButton /></div>
      <div onClick={() => nav('/search')}><SearchBar onFocus={() => nav('/search')} /></div>
      <div className="sec-head"><h3>Categories</h3></div>
      <div className="cat-grid">
        {categories.slice(1).map((c) => (
          <button key={c} className="cat" onClick={() => nav('/category/' + c)}>
            <img src={covers[c]} alt="" />
            <span className="glass">{c}<small>{products.filter((p) => p.category === c).length} items</small></span>
          </button>
        ))}
      </div>
      <div className="sec-head"><h3>All Products</h3></div>
      <div className="grid">{products.map((p) => <ProductCard key={p.id} p={p} wide />)}</div>
    </div>
  )
}

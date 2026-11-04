import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CartButton, ProductCard, MiniCartBar, Empty } from '../components'
import { products } from '../data'
import * as Ic from '../icons'

const subtitles = { 'Living Room': 'Find the perfect pieces for your space.', Bedroom: 'Rest easy with calm, cosy pieces.', Office: 'Work beautifully from home.', Dining: 'Gather around timeless design.', Outdoor: 'Bring comfort outside.' }

export default function Category() {
  const { name } = useParams(); const nav = useNavigate()
  const [q, setQ] = useState('')
  const [sort, setSort] = useState('popular')
  const [maxPrice, setMaxPrice] = useState(null)
  const [color, setColor] = useState(null)
  const [material, setMaterial] = useState(null)
  const [open, setOpen] = useState(null)

  const base = products.filter((p) => p.category === name)
  const list = useMemo(() => {
    let l = base.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()))
    if (maxPrice) l = l.filter((p) => p.price <= maxPrice)
    if (color) l = l.filter((p) => p.colors.includes(color))
    if (material) l = l.filter((p) => p.material === material)
    if (sort === 'low') l = [...l].sort((a, b) => a.price - b.price)
    if (sort === 'high') l = [...l].sort((a, b) => b.price - a.price)
    if (sort === 'rating') l = [...l].sort((a, b) => b.rating - a.rating)
    return l
  }, [name, q, sort, maxPrice, color, material])

  const colors = [...new Set(base.flatMap((p) => p.colors))]
  const materials = [...new Set(base.map((p) => p.material))]
  const toggle = (k) => setOpen(open === k ? null : k)
  const reset = () => { setMaxPrice(null); setColor(null); setMaterial(null); setSort('popular'); setOpen(null) }

  return (
    <div className="page with-mini">
      <div className="row-gap top-pad">
        <button className="icon-btn" aria-label="Back" onClick={() => nav(-1)}><Ic.Back /></button>
        <div className="search small" style={{ flex: 1 }}>
          <Ic.Search size={17} />
          <input placeholder={`Search in ${name}`} value={q} onChange={(e) => setQ(e.target.value)} />
          <Ic.Sliders size={17} />
        </div>
        <CartButton />
      </div>
      <h1 className="title">{name}</h1>
      <p className="subtitle">{subtitles[name]}</p>
      <div className="chips small">
        <button className={'chip' + (open === 'filter' ? ' on' : '')} onClick={() => toggle('filter')}><Ic.Filter size={15} /> Filter</button>
        <button className={'chip' + (open === 'sort' || sort !== 'popular' ? ' on' : '')} onClick={() => toggle('sort')}>Sort <Ic.Down /></button>
        <button className={'chip' + (open === 'price' || maxPrice ? ' on' : '')} onClick={() => toggle('price')}>Price</button>
        <button className={'chip' + (open === 'color' || color ? ' on' : '')} onClick={() => toggle('color')}>Color</button>
        <button className={'chip' + (open === 'material' || material ? ' on' : '')} onClick={() => toggle('material')}>Material</button>
      </div>
      {open && (
        <div className="filter-panel glass">
          {(open === 'sort' || open === 'filter') && <div className="opt-row">{[['popular', 'Popular'], ['low', 'Price: Low'], ['high', 'Price: High'], ['rating', 'Top Rated']].map(([k, l]) => <button key={k} className={'opt' + (sort === k ? ' on' : '')} onClick={() => setSort(k)}>{l}</button>)}</div>}
          {(open === 'price' || open === 'filter') && <div className="opt-row">{[null, 250, 500, 800].map((v) => <button key={v || 'any'} className={'opt' + (maxPrice === v ? ' on' : '')} onClick={() => setMaxPrice(v)}>{v ? `Under $${v}` : 'Any price'}</button>)}</div>}
          {(open === 'color' || open === 'filter') && <div className="opt-row">{colors.map((c) => <button key={c} className={'swatch' + (color === c ? ' on' : '')} style={{ background: c }} onClick={() => setColor(color === c ? null : c)} aria-label={c} />)}</div>}
          {(open === 'material' || open === 'filter') && <div className="opt-row">{materials.map((m) => <button key={m} className={'opt' + (material === m ? ' on' : '')} onClick={() => setMaterial(material === m ? null : m)}>{m}</button>)}</div>}
          <button className="link-btn" onClick={reset}>Reset all</button>
        </div>
      )}
      {list.length ? <div className="grid">{list.map((p) => <ProductCard key={p.id} p={p} wide />)}</div>
        : <Empty icon={Ic.Search} title="No matches" text="Try adjusting your filters." />}
      <MiniCartBar />
    </div>
  )
}

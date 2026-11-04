import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductCard, SearchBar, Empty } from '../components'
import { products } from '../data'
import * as Ic from '../icons'

const recent = ['Lounge chair', 'Coffee table', 'Sofa', 'TV unit']
export default function Search() {
  const nav = useNavigate(); const [q, setQ] = useState('')
  const res = q ? products.filter((p) => (p.name + p.category + p.material).toLowerCase().includes(q.toLowerCase())) : []
  return (
    <div className="page">
      <div className="row-gap top-pad">
        <button className="icon-btn" aria-label="Back" onClick={() => nav(-1)}><Ic.Back /></button>
        <div style={{ flex: 1 }}><SearchBar value={q} onChange={setQ} autoFocus /></div>
      </div>
      {!q && <>
        <div className="sec-head"><h3>Popular searches</h3></div>
        <div className="chips wrap">{recent.map((r) => <button key={r} className="chip" onClick={() => setQ(r.split(' ').pop())}>{r}</button>)}</div>
      </>}
      {q && (res.length ? <div className="grid">{res.map((p) => <ProductCard key={p.id} p={p} wide />)}</div>
        : <Empty icon={Ic.Search} title="Nothing found" text={`No results for “${q}”.`} />)}
    </div>
  )
}

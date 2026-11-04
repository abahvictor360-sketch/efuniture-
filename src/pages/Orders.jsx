import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import { byId, money } from '../data'
import { CartButton, Empty } from '../components'
import * as Ic from '../icons'

const steps = ['Processing', 'On the way', 'Delivered']
export default function Orders() {
  const { orders } = useStore(); const nav = useNavigate()
  const [tab, setTab] = useState('active')
  const list = orders.filter((o) => tab === 'active' ? o.status !== 'Delivered' : o.status === 'Delivered')
  return (
    <div className="page with-tabs">
      <div className="topbar"><h1 className="title" style={{ margin: 0 }}>My Orders</h1><CartButton /></div>
      <div className="seg light"><button className={tab === 'active' ? 'on' : ''} onClick={() => setTab('active')}>Active</button><button className={tab === 'past' ? 'on' : ''} onClick={() => setTab('past')}>Completed</button></div>
      {!list.length && <Empty icon={Ic.Doc} title="No orders here" text="Your orders will appear here." cta="Shop Now" to="/shop" />}
      {list.map((o) => { const step = steps.indexOf(o.status); return (
        <div key={o.id} className="order">
          <div className="o-head"><div><b>{o.id}</b><small>{o.date}</small></div><span className={'status s' + step}>{o.status}</span></div>
          <div className="o-items">{o.items.map((id, i) => <img key={id + i} src={byId(id)?.img} alt="" onClick={() => nav('/product/' + id)} />)}
            <div className="o-total"><small>{o.items.length} item{o.items.length > 1 ? 's' : ''}</small><b>{money(o.total)}</b></div></div>
          <div className="track">{steps.map((s, i) => <div key={s} className={i <= step ? 'done' : ''}><i />{s}</div>)}</div>
        </div>) })}
    </div>
  )
}

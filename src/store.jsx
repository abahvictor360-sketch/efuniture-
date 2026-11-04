import { createContext, useContext, useEffect, useState } from 'react'
import { byId, sampleOrders } from './data'

const Ctx = createContext(null)
const load = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch { return d } }
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch {} }

export function StoreProvider({ children }) {
  const [user, setUser] = useState(() => load('ef_user', null))
  const [cart, setCart] = useState(() => load('ef_cart', [{ id: 'luna-accent', qty: 1 }, { id: 'luna-lounge', qty: 1 }]))
  const [favs, setFavs] = useState(() => load('ef_favs', ['luna-accent', 'bondi-table']))
  const [orders, setOrders] = useState(() => load('ef_orders', sampleOrders))
  const [toast, setToast] = useState('')

  useEffect(() => save('ef_user', user), [user])
  useEffect(() => save('ef_cart', cart), [cart])
  useEffect(() => save('ef_favs', favs), [favs])
  useEffect(() => save('ef_orders', orders), [orders])
  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(''), 1800); return () => clearTimeout(t) }, [toast])

  const addToCart = (id, qty = 1) => {
    setCart((c) => c.some((i) => i.id === id) ? c.map((i) => i.id === id ? { ...i, qty: i.qty + qty } : i) : [...c, { id, qty }])
    setToast('Added to cart')
  }
  const setQty = (id, qty) => setCart((c) => qty <= 0 ? c.filter((i) => i.id !== id) : c.map((i) => i.id === id ? { ...i, qty } : i))
  const toggleFav = (id) => setFavs((f) => f.includes(id) ? f.filter((x) => x !== id) : [...f, id])
  const cartCount = cart.reduce((s, i) => s + i.qty, 0)
  const cartTotal = cart.reduce((s, i) => s + i.qty * (byId(i.id)?.price || 0), 0)
  const checkout = () => {
    const id = 'EF-' + Math.floor(20600 + Math.random() * 900)
    setOrders((o) => [{ id, date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }), status: 'Processing', items: cart.map((i) => i.id), total: cartTotal + (cartTotal >= 199 ? 0 : 25) }, ...o])
    setCart([])
    return id
  }

  return <Ctx.Provider value={{ user, setUser, cart, addToCart, setQty, favs, toggleFav, cartCount, cartTotal, orders, checkout, toast, setToast }}>{children}</Ctx.Provider>
}
export const useStore = () => useContext(Ctx)

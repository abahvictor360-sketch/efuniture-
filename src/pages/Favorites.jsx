import { useStore } from '../store'
import { byId } from '../data'
import { CartButton, ProductCard, Empty } from '../components'
import * as Ic from '../icons'

export default function Favorites() {
  const { favs } = useStore()
  return (
    <div className="page with-tabs">
      <div className="topbar"><h1 className="title" style={{ margin: 0 }}>Favorites</h1><CartButton /></div>
      <p className="subtitle">{favs.length} saved item{favs.length === 1 ? '' : 's'}</p>
      {favs.length ? <div className="grid">{favs.map((id) => byId(id)).filter(Boolean).map((p) => <ProductCard key={p.id} p={p} wide />)}</div>
        : <Empty icon={Ic.Heart} title="No favorites yet" text="Tap the heart on any product to save it here." cta="Explore" to="/shop" />}
    </div>
  )
}

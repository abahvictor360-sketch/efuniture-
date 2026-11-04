export const categories = ['All', 'Living Room', 'Bedroom', 'Lounge', 'Luxury', 'Office']

const P = (id) => `/img/products/${id}.webp`

export const products = [
  { id: 'boucle-arc-chair', name: 'Arc Bouclé Chair', price: 349, rating: 4.9, reviews: 212, category: 'Living Room', colors: ['#ece6dc', '#5a3a26'], material: 'Bouclé & Walnut', popular: true,
    desc: 'Cloud-soft bouclé cushions cradled in a sculpted solid walnut frame. A modern classic that warms up any corner.' },
  { id: 'lotus-sofa', name: 'Lotus Bloom Sofa', price: 1899, rating: 4.9, reviews: 87, category: 'Luxury', colors: ['#e9dfcf'], material: 'Performance Velvet', popular: true, isNew: true,
    desc: 'Layered petal cushions unfold like a blossoming lotus. A breathtaking statement piece for grand living rooms.' },
  { id: 'walnut-arch-chair', name: 'Walnut Arch Chair', price: 429, rating: 4.8, reviews: 143, category: 'Living Room', colors: ['#d9cfc0', '#6b3f23'], material: 'Linen & Walnut', popular: true,
    desc: 'Generous arched arms in hand-finished walnut frame a textured linen seat. Timeless craftsmanship, everyday comfort.' },
  { id: 'jade-club-chair', name: 'Jade Club Chair', price: 699, rating: 4.7, reviews: 96, category: 'Living Room', colors: ['#7fb5a8', '#a0662f'], material: 'Leather & Rosewood', popular: true,
    desc: 'Quilted jade leather with carved rosewood accents and contrast stitching. Old-world luxury, modern colour.' },
  { id: 'cloud-boucle-chair', name: 'Cloud Tub Chair', price: 259, rating: 4.7, reviews: 188, category: 'Bedroom', colors: ['#f1ece3', '#1d1d1d'], material: 'Bouclé', popular: true,
    desc: 'A plump, enveloping tub chair on slim ebony legs. Perfect for bedrooms, reading nooks and dressing areas.' },
  { id: 'cove-cafe-chair', name: 'Cove Café Chair', price: 549, rating: 4.8, reviews: 74, category: 'Lounge', colors: ['#f4f0e8', '#b98a5a'], material: 'Oak & Wool', isNew: true,
    desc: 'A sweeping oak shell with an integrated side table for your morning coffee. Sit, sip, unwind.' },
  { id: 'dune-sculpt-chair', name: 'Dune Sculpt Chair', price: 1290, rating: 4.6, reviews: 38, category: 'Luxury', colors: ['#a86f48'], material: 'Moulded Leather',
    desc: 'Flowing like wind-shaped sand, this sculptural seat is as much art as it is furniture.' },
  { id: 'gilded-tub-chair', name: 'Gilded Shell Chair', price: 899, rating: 4.8, reviews: 65, category: 'Luxury', colors: ['#f3eee4', '#c9a046'], material: 'Leather & Brass',
    desc: 'Channel-tufted ivory leather wrapped in polished brass ribbing, on a swivel gold plinth.' },
  { id: 'ivory-wing-chair', name: 'Ivory Wing Chair', price: 579, rating: 4.7, reviews: 59, category: 'Lounge', colors: ['#efe7da', '#d6bf9e'], material: 'Linen & Ash',
    desc: 'A modern wingback with a bent-ash frame and tailored linen upholstery. Elegant posture, deep comfort.' },
  { id: 'maple-leaf-chair', name: 'Maple Leaf Chair', price: 799, rating: 4.9, reviews: 44, category: 'Luxury', colors: ['#f5f3ef', '#b8743f'], material: 'Leather & Copper', isNew: true,
    desc: 'Leaf-shaped backrest with copper veining on tapered copper legs. Nature-inspired, gallery-worthy.' },
  { id: 'luxe-gold-sofa', name: 'Luxe Gold Sofa', price: 1199, rating: 4.7, reviews: 102, category: 'Living Room', colors: ['#cfc8bd', '#c9a046'], material: 'Velvet & Gold',
    desc: 'Pleated velvet three-seater with brushed gold inlays and sculpted metal feet. Includes two accent cushions.' },
  { id: 'mahogany-egg', name: 'Mahogany Egg Chair', price: 1490, rating: 4.8, reviews: 51, category: 'Lounge', colors: ['#7a2e1c'], material: 'Solid Mahogany',
    desc: 'A high-gloss mahogany shell with a floating leather seat pad. Bold silhouette, rich grain.' },
  { id: 'royal-blue-sectional', name: 'Royal Sectional Set', price: 2490, rating: 4.6, reviews: 33, category: 'Living Room', colors: ['#1d4fc4', '#ffffff'], material: 'Quilted Leather',
    desc: 'An L-shaped sectional with adjustable headrests, built-in storage and a matching ottoman.' },
  { id: 'ruby-swivel', name: 'Ruby Swivel Chair', price: 489, rating: 4.8, reviews: 120, category: 'Bedroom', colors: ['#9b1c22', '#5a3a26'], material: 'Velvet on Wood Frame',
    desc: 'A sweeping velvet armrest wraps around a round seat on a 360° swivel walnut base. Hand-built frame inside.' },
  { id: 'safari-armchair', name: 'Safari Bubble Chair', price: 759, rating: 4.5, reviews: 29, category: 'Lounge', colors: ['#c99a2e', '#c0c0c0'], material: 'Jacquard & Chrome',
    desc: 'Playful rounded forms in botanical jacquard, poised on mirror-polished chrome spheres.' },
  { id: 'shell-reading-chair', name: 'Shell Reading Chair', price: 649, rating: 4.9, reviews: 81, category: 'Bedroom', colors: ['#f0e9dc', '#b98a5a'], material: 'Bouclé & Oak',
    desc: 'A scalloped shell cocoon with a cantilevered oak side table — your new favourite reading spot.' },
  { id: 'arc-x-lounge', name: 'Arc-X Lounge Chair', price: 389, rating: 4.6, reviews: 57, category: 'Office', colors: ['#f2f2f0', '#a87b52'], material: 'Walnut & Mesh Weave',
    desc: 'Crossed walnut arcs suspend a floating seat and backrest. Lightweight, architectural, ergonomic.' },
  { id: 'grey-wingback', name: 'Contour Wingback', price: 319, rating: 4.7, reviews: 164, category: 'Office', colors: ['#6b6b6b', '#c9a46e'], material: 'Wool & Oak',
    desc: 'A button-tufted wingback in soft grey wool on splayed oak legs. Mid-century comfort for study or office.' },
].map((p) => ({ ...p, img: P(p.id) }))

export const byId = (id) => products.find((p) => p.id === id)
export const money = (n) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export const sampleOrders = [
  { id: 'EF-20481', date: 'Oct 28, 2026', status: 'Delivered', items: ['luxe-gold-sofa'], total: 1199 },
  { id: 'EF-20533', date: 'Nov 02, 2026', status: 'On the way', items: ['cloud-boucle-chair', 'walnut-arch-chair'], total: 688 },
]

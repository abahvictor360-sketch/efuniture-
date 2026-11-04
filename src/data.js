export const categories = ['All', 'Living Room', 'Bedroom', 'Office', 'Dining', 'Outdoor']

export const products = [
  { id: 'luna-lounge', name: 'Luna Lounge Chair', price: 299, rating: 4.8, reviews: 124, img: '/img/lounge.jpg', category: 'Living Room', colors: ['#1f5a55', '#c9b9a3', '#3b3b3b'], material: 'Velvet & Oak', popular: true,
    desc: 'A sculpted lounge chair wrapped in soft performance velvet, resting on tapered solid oak legs. Deep seat, gentle recline — made for slow mornings.' },
  { id: 'bondi-table', name: 'Bondi Coffee Table', price: 189, rating: 4.6, reviews: 98, img: '/img/bondi.jpg', category: 'Living Room', colors: ['#b98b5e', '#6b4a32'], material: 'Solid Ash', popular: true,
    desc: 'Chunky pillar legs and a softly rounded top in natural ash. A warm, grounded centrepiece for any living space.' },
  { id: 'oakwood-sideboard', name: 'Oakwood Sideboard', price: 549, rating: 4.7, reviews: 76, img: '/img/oakwood.jpg', category: 'Dining', colors: ['#8a5a36', '#3f2e22'], material: 'Oak Veneer', popular: true,
    desc: 'Generous storage with push-to-open doors and a slim mid-century profile. Fits perfectly in dining rooms or under a wall-mounted TV.' },
  { id: 'haven-sofa', name: 'Haven Sofa', price: 799, rating: 4.8, reviews: 156, img: '/img/haven.jpg', category: 'Living Room', colors: ['#cfc6b8', '#8a6d55'], material: 'Linen Blend', isNew: true,
    desc: 'A two-seater with plush feather-blend cushions and a clean, tailored silhouette. Removable, washable linen-blend covers.' },
  { id: 'luna-accent', name: 'Luna Accent Chair', price: 299, rating: 4.7, reviews: 89, img: '/img/accent.jpg', category: 'Living Room', colors: ['#1f5a55', '#e0d6c6'], material: 'Velvet & Beech',
    desc: 'Channel-tufted back and wide arms give this accent chair a cocooning feel. Statement colour, timeless shape.' },
  { id: 'scandi-tv', name: 'Scandi TV Unit', price: 449, rating: 4.6, reviews: 78, img: '/img/tv.jpg', category: 'Living Room', colors: ['#9a6a42', '#5b4130'], material: 'Walnut Veneer',
    desc: 'Open shelf for media players plus soft-close drawers to hide the clutter. Cable management built in.' },
  { id: 'aria-table', name: 'Aria Coffee Table', price: 199, rating: 4.5, reviews: 64, img: '/img/aria.jpg', category: 'Living Room', colors: ['#4a3426', '#8a6a50'], material: 'Smoked Oak',
    desc: 'An oval top in smoked oak balanced on four rounded legs. Low, lean and beautifully understated.' },
  { id: 'nest-bed-chair', name: 'Nest Reading Chair', price: 329, rating: 4.9, reviews: 41, img: '/img/accent.jpg', category: 'Bedroom', colors: ['#1f5a55'], material: 'Velvet',
    desc: 'The perfect bedroom corner companion — a compact reading chair with a supportive high back.' },
  { id: 'atlas-desk-table', name: 'Atlas Side Table', price: 159, rating: 4.4, reviews: 37, img: '/img/bondi.jpg', category: 'Office', colors: ['#b98b5e'], material: 'Solid Ash',
    desc: 'A sturdy side table that doubles as a laptop perch in your home office.' },
]

export const byId = (id) => products.find((p) => p.id === id)
export const money = (n) => '$' + n.toFixed(2)

export const sampleOrders = [
  { id: 'EF-20481', date: 'Oct 28, 2026', status: 'Delivered', items: ['haven-sofa'], total: 799 },
  { id: 'EF-20533', date: 'Nov 02, 2026', status: 'On the way', items: ['bondi-table', 'luna-lounge'], total: 488 },
]

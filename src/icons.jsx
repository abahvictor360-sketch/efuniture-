const I = ({ children, size = 22, fill = 'none', sw = 1.8, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" {...p}>{children}</svg>
)
export const Search = (p) => <I {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></I>
export const Sliders = (p) => <I {...p}><path d="M4 7h10M18 7h2M4 17h4M12 17h8" /><circle cx="16" cy="7" r="2" /><circle cx="10" cy="17" r="2" /></I>
export const Cart = (p) => <I {...p}><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2" /><circle cx="10" cy="20.5" r="1.2" /><circle cx="17" cy="20.5" r="1.2" /></I>
export const Heart = ({ filled, ...p }) => <I fill={filled ? 'currentColor' : 'none'} {...p}><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" /></I>
export const Star = (p) => <I fill="#f5b301" stroke="#f5b301" sw={1} {...p}><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9Z" /></I>
export const Arrow = (p) => <I {...p}><path d="M5 12h14M13 6l6 6-6 6" /></I>
export const Back = (p) => <I {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></I>
export const Home = ({ active, ...p }) => <I fill={active ? 'currentColor' : 'none'} {...p}><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1Z" /></I>
export const Box = (p) => <I {...p}><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></I>
export const Doc = (p) => <I {...p}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></I>
export const User = (p) => <I {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3" /><path d="M6.5 18.5a6 6 0 0 1 11 0" /></I>
export const Award = (p) => <I {...p}><circle cx="12" cy="9" r="5" /><path d="m9 13.5-1 7.5 4-2 4 2-1-7.5" /></I>
export const Truck = (p) => <I {...p}><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></I>
export const Return = (p) => <I {...p}><path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v4h4" /></I>
export const Filter = (p) => <I {...p}><path d="M4 6h16M7 12h10M10 18h4" /></I>
export const Chevron = (p) => <I {...p}><path d="m9 6 6 6-6 6" /></I>
export const Down = (p) => <I size={14} {...p}><path d="m6 9 6 6 6-6" /></I>
export const Mail = (p) => <I {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></I>
export const Lock = (p) => <I {...p}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></I>
export const Eye = (p) => <I {...p}><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></I>
export const Minus = (p) => <I {...p}><path d="M5 12h14" /></I>
export const Plus = (p) => <I {...p}><path d="M12 5v14M5 12h14" /></I>
export const Trash = (p) => <I {...p}><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" /></I>
export const Check = (p) => <I {...p}><path d="m5 12 5 5 9-10" /></I>
export const Bell = (p) => <I {...p}><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4Z" /><path d="M10 20a2 2 0 0 0 4 0" /></I>
export const Pin = (p) => <I {...p}><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></I>
export const Card = (p) => <I {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /></I>
export const Logout = (p) => <I {...p}><path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10" /></I>
export const Help = (p) => <I {...p}><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01" /></I>

export const Logo = ({ size = 34, color = '#0f3b3a', accent = '#3f8f86' }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 10h17M8 20h12M8 30h17M8 10v20" stroke={color} strokeWidth="4" />
    <path d="M26 20l6 10M29 12l5 8" stroke={accent} strokeWidth="4" />
  </svg>
)

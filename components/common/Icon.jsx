const paths = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21c.6-4.2 2.9-6.3 7-6.3s6.4 2.1 7 6.3" /></>,
  bag: <><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  down: <path d="m6 9 6 6 6-6" />,
  star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.4l6.1-.9L12 3Z" />,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  minus: <path d="M5 12h14" />,
  close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  truck: <><path d="M3 6h11v12H3zM14 10h4l3 3v5h-7" /><circle cx="7.5" cy="18" r="1.5" /><circle cx="17.5" cy="18" r="1.5" /></>,
  shield: <><path d="m12 22 7-4V6l-7-4-7 4v12l7 4Z" /><path d="m9 12 2 2 4-4" /></>,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" /><path d="M10 10h4v4h-4z" /></>,
  radar: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="m12 12 6-6M12 2v2m10 8h-2M4 12H2m10 10v-2" /></>,
  board: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h2v2H8zm6 6h2v2h-2zm-6 0h1m5-5h2M2 9h2m-2 6h2m16-6h2m-2 6h2M9 2v2m6-2v2m-6 16v2m6-2v2" /></>,
  box: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="M3 8v9l9 5 9-5V8M12 13v9" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  heart: <path d="M20.8 8.8c0 5-8.8 10-8.8 10s-8.8-5-8.8-10A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
}

export function Icon({ name, size = 20, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || paths.chip}
    </svg>
  )
}

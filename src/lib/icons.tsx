// icons.tsx — thin-line iconography for Welcome Suites guide
// Drawn on a 24×24 grid, 1.4 stroke, rounded caps/joins, no fills.

const common = {
  width: '60%',
  height: '60%',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const Ic: Record<string, React.ReactNode> = {
  phone: (
    <svg {...common}>
      <path d="M6.5 3.5h3a1 1 0 0 1 1 .8l.8 3.4a1 1 0 0 1-.3 1L9.7 9.9a12 12 0 0 0 4.4 4.4l1.2-1.3a1 1 0 0 1 1-.3l3.4.8a1 1 0 0 1 .8 1v3a1.5 1.5 0 0 1-1.6 1.5C10.8 18.6 5.4 13.2 5 5.1A1.5 1.5 0 0 1 6.5 3.5Z" />
    </svg>
  ),
  wifi: (
    <svg {...common}>
      <path d="M3 9.5c5-4.7 13-4.7 18 0" />
      <path d="M6 12.7c3.3-3 8.7-3 12 0" />
      <path d="M9 15.9c1.7-1.4 4.3-1.4 6 0" />
      <circle cx="12" cy="18.7" r=".9" fill="currentColor" stroke="none" />
    </svg>
  ),
  amenities: (
    <svg {...common}>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M5.5 9.7V19a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.7" />
      <path d="M10 20v-5h4v5" />
    </svg>
  ),
  alert: (
    <svg {...common}>
      <path d="M12 3.5 2.5 20h19L12 3.5Z" />
      <path d="M12 10v4.5" />
      <circle cx="12" cy="17.3" r=".9" fill="currentColor" stroke="none" />
    </svg>
  ),
  pin: (
    <svg {...common}>
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  rules: (
    <svg {...common}>
      <rect x="5.5" y="4.5" width="13" height="16" rx="1.5" />
      <rect x="9" y="2.7" width="6" height="3.5" rx="1" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4.5" />
    </svg>
  ),
  fork: (
    <svg {...common}>
      <path d="M8 3v6.5a2 2 0 0 1-2 2 2 2 0 0 1-2-2V3" />
      <path d="M6 11.5V21" />
      <path d="M17 3c-1.7 0-3 2-3 5s1.3 5 3 5" />
      <path d="M17 3v18" />
    </svg>
  ),
  activity: (
    <svg {...common}>
      <path d="M3 6.5 9 4.5l6 2 6-2v13l-6 2-6-2-6 2v-13Z" />
      <path d="M9 4.5v15M15 6.5v15" />
    </svg>
  ),
  coffee: (
    <svg {...common}>
      <path d="M4.5 9.5h12v5.5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4z" />
      <path d="M16.5 11.2h1.7a2.3 2.3 0 0 1 0 4.6h-1.7" />
      <path d="M7.5 3.5c0 1 1 1.5 1 2.5s-1 1.5-1 2.5" />
      <path d="M11 3.5c0 1 1 1.5 1 2.5s-1 1.5-1 2.5" />
    </svg>
  ),
  bar: (
    <svg {...common}>
      <path d="M4 4.5h16l-8 8.5-8-8.5Z" />
      <path d="M12 13v7" />
      <path d="M8.5 20.5h7" />
    </svg>
  ),
  emergency: (
    <svg {...common}>
      <path d="M3 9.5h11V18H3z" />
      <path d="M14 12h4l3 3v3h-7" />
      <circle cx="7.5" cy="18" r="1.8" />
      <circle cx="16.5" cy="18" r="1.8" />
      <path d="M7 11.5v3M5.5 13h3" />
    </svg>
  ),
  key: (
    <svg {...common}>
      <circle cx="8" cy="15" r="3.5" />
      <path d="m10.5 12.5 9-9" />
      <path d="m15 8 2 2" />
      <path d="m17.5 5.5 2 2" />
    </svg>
  ),
  breakfast: (
    <svg {...common}>
      <path d="M3.5 16.5h17" />
      <path d="M4.5 16.5a7.5 7.5 0 0 1 15 0" />
      <circle cx="12" cy="6.5" r=".9" fill="currentColor" stroke="none" />
      <path d="M12 7.4v1.8" />
      <path d="M3.5 19.5h17" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02A9.81 9.81 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.24 8.24 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.26 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.89 2.38 1 2.54.12.17 1.74 2.66 4.22 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  ),
  chevronLeft: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="m15 5-7 7 7 7" />
    </svg>
  ),
  copy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="m5 12 5 5L20 7" />
    </svg>
  ),
  external: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M14 4h6v6" />
      <path d="m20 4-9 9" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  ),
};

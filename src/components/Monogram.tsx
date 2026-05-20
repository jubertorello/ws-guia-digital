export function Monogram({ small = false }: { small?: boolean }) {
  return (
    <div className={`monogram ${small ? 'is-small' : ''}`} aria-label="Welcome Suites Hotel">
      <div className="mg-flourish mg-top">
        <svg viewBox="0 0 100 14" preserveAspectRatio="none">
          <path d="M0 13 L50 1 L100 13" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      <div className="mg-wm">WELCOME</div>
      <div className="mg-mid">
        <span className="mg-dot" />
        <span className="mg-line" />
        <div className="mg-ws">SUITES</div>
        <span className="mg-line" />
        <span className="mg-dot" />
      </div>
      <div className="mg-flourish mg-bot">
        <svg viewBox="0 0 100 14" preserveAspectRatio="none">
          <path d="M0 1 L50 13 L100 1" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      <div className="mg-tag">HOTEL</div>
    </div>
  );
}

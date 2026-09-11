export default function CuteBorder() {
  return (
    <div className="cute-border" aria-hidden="true">
      <svg className="corner corner-tl" viewBox="0 0 80 80">
        <path d="M8 48 C8 18 18 8 48 8" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="18" cy="18" r="4" fill="currentColor" />
      </svg>
      <svg className="corner corner-tr" viewBox="0 0 80 80">
        <path d="M32 8 C62 8 72 18 72 48" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="62" cy="18" r="4" fill="currentColor" />
      </svg>
      <svg className="corner corner-bl" viewBox="0 0 80 80">
        <path d="M8 32 C8 62 18 72 48 72" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="18" cy="62" r="4" fill="currentColor" />
      </svg>
      <svg className="corner corner-br" viewBox="0 0 80 80">
        <path d="M32 72 C62 72 72 62 72 32" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="62" cy="62" r="4" fill="currentColor" />
      </svg>
    </div>
  )
}

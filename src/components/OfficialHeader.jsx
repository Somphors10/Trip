import { copy } from '../data/copy.js'

export default function OfficialHeader() {
  return (
    <header className="official-header">
      <span className="badge">♡ Bestie Tour ♡</span>
      <h2 className="main-title">
        {copy.title} {'\u17E2\u17E0\u17E2\u17E6'}
      </h2>
      <p className="trip-place">Siem Reap 2026</p>
    </header>
  )
}

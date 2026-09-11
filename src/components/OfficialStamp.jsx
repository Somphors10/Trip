import { copy } from '../data/copy.js'

export default function OfficialStamp() {
  return (
    <div className="official-stamp" aria-label={copy.stamp}>
      <strong>{copy.stamp}</strong>
      <span>Approved</span>
    </div>
  )
}

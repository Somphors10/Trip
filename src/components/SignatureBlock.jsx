import { copy } from '../data/copy.js'

export default function SignatureBlock() {
  return (
    <section className="signature-block">
      <h3>{copy.signTitle}</h3>
      <div className="sign-grid">
        {copy.signers.map((label) => (
          <div key={label} className="sign-card">
            <div className="sign-line" />
            <strong>{label}</strong>
          </div>
        ))}
        <div className="cute-stamp">
          <b>{copy.stamp}</b>
          <span>Approved ♡</span>
        </div>
      </div>
    </section>
  )
}

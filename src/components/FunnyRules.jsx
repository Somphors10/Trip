import { copy } from '../data/copy.js'

export default function FunnyRules() {
  return (
    <section className="panel rules-block">
      <div className="rules-heading">
        <h3>{copy.rulesTitle}</h3>
        <span>Rules</span>
      </div>
      <ol>
        {copy.rules.map((rule, index) => (
          <li key={rule}>
            <em>{String(index + 1).padStart(2, '0')}</em>
            <p>{rule}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

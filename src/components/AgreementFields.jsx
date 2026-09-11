import { copy } from '../data/copy.js'

export default function AgreementFields({ values, onChange }) {
  const fields = [
    { name: 'names', label: copy.names },
    { name: 'place', label: copy.place },
    { name: 'date', label: copy.date },
    { name: 'time', label: copy.time },
  ]

  return (
    <section className="panel fields-block">
      <h3>Details</h3>
      <div className="fields-grid">
        {fields.map((field) => (
          <label key={field.name} className="field-row">
            <span>{field.label}</span>
            <input
              value={values[field.name]}
              onChange={(event) => onChange(field.name, event.target.value)}
              placeholder="___________________"
            />
          </label>
        ))}
      </div>
    </section>
  )
}

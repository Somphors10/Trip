import Certificate from './components/Certificate.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <header className="toolbar no-print">
        <div>
          <p className="toolbar-kicker">Friendship Contract · 2026</p>
          <h1>កិច្ចព្រមព្រៀងដើរលេង</h1>
        </div>
        <button type="button" onClick={() => window.print()}>
          Print / Save A4 PDF
        </button>
      </header>
      <div className="certificate-stage">
        <Certificate />
      </div>
    </div>
  )
}

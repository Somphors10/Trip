import { useState } from 'react'
import { copy } from '../data/copy.js'
import OfficialHeader from './OfficialHeader.jsx'
import AgreementFields from './AgreementFields.jsx'
import FunnyRules from './FunnyRules.jsx'
import MemberPhotos from './MemberPhotos.jsx'
import SignatureBlock from './SignatureBlock.jsx'
import { CameraIcon, SuitcaseIcon } from './TravelIcons.jsx'
import './Certificate.css'

export default function Certificate() {
  const [values, setValues] = useState({
    names: 'Su Tii, Somphors, Molyka',
    place: copy.destination,
    date: '',
    time: '',
  })

  function handleChange(name, value) {
    setValues((current) => ({ ...current, [name]: value }))
  }

  return (
    <article className="certificate">
      <div className="cute-card">
        <div className="sticker-row">
          <div className="sticker sticker-drama">No Drama</div>
          <div className="sticker sticker-fun">100% Fun</div>
          <div className="sticker sticker-trip">Trip Approved</div>
        </div>
        <div className="icon icon-camera"><CameraIcon /></div>
        <div className="icon icon-bag"><SuitcaseIcon /></div>

        <OfficialHeader />
        <MemberPhotos />
        <div className="body-grid">
          <AgreementFields values={values} onChange={handleChange} />
          <FunnyRules />
        </div>
        <SignatureBlock />
      </div>
    </article>
  )
}

import {
  CameraIcon,
  CoconutIcon,
  GlassesIcon,
  HatIcon,
  MapIcon,
  MountainsIcon,
  SuitcaseIcon,
} from './TravelIcons.jsx'

function Polaroid({ className, caption, scene }) {
  return (
    <figure className={`polaroid ${className}`}>
      <span className="tape tape-left" />
      <span className="tape tape-right" />
      <div className={`photo-scene ${scene}`} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

function PassportStamp({ className, city, code }) {
  return (
    <div className={`passport-stamp ${className}`}>
      <strong>{city}</strong>
      <span>{code}</span>
      <em>ENTRY</em>
    </div>
  )
}

function Sticker({ className, text }) {
  return <div className={`sticker ${className}`}>{text}</div>
}

export default function Decorations() {
  return (
    <div className="decorations" aria-hidden="true">
      <div className="boarding-pass boarding-top">
        <span>BESTIE AIR</span>
        <b>PNH → FUN</b>
        <small>Seat 2026 · GATE BFF</small>
      </div>
      <div className="boarding-pass boarding-bottom">
        <span>BOARDING PASS</span>
        <b>BT-88</b>
        <small>Group Trip · One way to happiness</small>
      </div>

      <Polaroid className="polaroid-angkor" caption="Siem Reap '26" scene="scene-angkor" />
      <Polaroid className="polaroid-beach" caption="Beach day" scene="scene-beach" />
      <Polaroid className="polaroid-mountains" caption="Kampot hills" scene="scene-mountains" />
      <Polaroid className="polaroid-friends" caption="Besties" scene="scene-friends" />

      <PassportStamp className="stamp-sr" city="SIEM REAP" code="REP" />
      <PassportStamp className="stamp-pnh" city="PHNOM PENH" code="PNH" />
      <PassportStamp className="stamp-kos" city="KOH RONG" code="KOH" />

      <Sticker className="sticker-approved" text="Trip Approved" />
      <Sticker className="sticker-drama" text="No Drama" />
      <Sticker className="sticker-fun" text="100% Fun" />
      <Sticker className="sticker-bestie" text="Bestie Tour" />

      <div className="icon icon-suitcase"><SuitcaseIcon /></div>
      <div className="icon icon-camera"><CameraIcon /></div>
      <div className="icon icon-glasses"><GlassesIcon /></div>
      <div className="icon icon-coconut"><CoconutIcon /></div>
      <div className="icon icon-hat"><HatIcon /></div>
      <div className="icon icon-mountains"><MountainsIcon /></div>
      <div className="icon icon-map"><MapIcon /></div>

      <svg className="doodle doodle-arrow" viewBox="0 0 80 40">
        <path d="M6 28 C28 6, 48 8, 70 18" fill="none" stroke="#1b4d3e" strokeWidth="2" />
        <path d="M62 10 l10 10 -14 2" fill="#1b4d3e" />
      </svg>
      <div className="doodle doodle-smile">☺</div>
      <div className="doodle doodle-star">✦</div>
      <div className="doodle doodle-heart">♡</div>
    </div>
  )
}

import { copy } from '../data/copy.js'
import member1 from '../assets/members/member-1.png'
import member2 from '../assets/members/member-2.png'
import member3 from '../assets/members/member-3.png'

const PHOTOS = [member1, member3, member2]
const COLORS = ['pink', 'mint', 'lilac']

export default function MemberPhotos() {
  return (
    <section className="member-photos">
      {copy.members.map((name, index) => (
        <figure key={name} className={`photo-slot ${COLORS[index]}`}>
          <div className="photo-frame">
            <img src={PHOTOS[index]} alt={name} />
          </div>
          <figcaption>{name}</figcaption>
        </figure>
      ))}
    </section>
  )
}

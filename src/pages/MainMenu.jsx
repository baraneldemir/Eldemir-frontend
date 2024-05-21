import './MainMenu.css'
import BirinciSayfa from '../components/BirinciSayfa'
import EkipSayfa from '../components/EkipSayfa'
import Servislerimiz from '../components/Servislerimiz'
import Harita from '../components/Harita'

export default function MainMenu() {
  return (
    <div className="home">
      <main>
        <BirinciSayfa />
        <Servislerimiz />
        <EkipSayfa />
        <Harita />
      </main>
    </div>
  )
}

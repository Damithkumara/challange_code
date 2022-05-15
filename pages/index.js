import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
        <Navbar/>
          <Homepage />
          <Skills/>
          <Work/>
          <Clients/>
          <Contact/>
          <Footer/>
    </div>
  )
}

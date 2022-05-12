import Head from 'next/head'
import Navbar from '../components/Navbar'
import Homepage from './Homepage'
import Services from './Services'
import Work from './Work'

export default function Home() {
  return (
    <div>
        <Navbar/>
          <Homepage />
          <Services/>
          <Work/>
    </div>
  )
}

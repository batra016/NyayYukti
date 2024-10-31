
import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './components/Benefits'
import Documents from './components/Documents'
import Header from './components/Header'
import Services from './components/Services'

import Hero from './components/Hero'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.75rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <Documents />
        <Services />
        <Footer />
      </div>
      <ButtonGradient></ButtonGradient>

    </>
  )
}

export default App

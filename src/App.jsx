import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="grid-lines"></div>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App

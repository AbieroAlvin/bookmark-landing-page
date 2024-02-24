import Accordion from "./components/Accordion"
import Contact from "./components/Contact"
import Extension from "./components/Extension"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
 
  return (
    <>
    <div className="w-full h-full overflow-hidden font-primary">
    <Navbar/>
      <Hero/>
      <Features/>
      <Extension/>
      <Accordion/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App

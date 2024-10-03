import {Route, Routes} from 'react-router-dom'
// import HeroSection from './Components/HeroSection'
import Header from './Components/Header'
import Home from './Pages/Home'
import HeroSection from './Components/HeroSection'
import Services from './Components/services'
import AboutMe from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/contact'
import Footer from './Components/footer'
import Testmonials from './Components/Testmonials'
import Why from './Components/Why'
function App (){
  return <Routes>
    <Route path="/header" element={<Header/>}  />
    <Route path="/hero" element={<HeroSection/>}  />
    <Route path="/" element={<Home/>}  />
    <Route path="/services" element={<Services/>}  />
    <Route path="/about" element={<AboutMe/>}  />
    <Route path="/projects" element={<Projects/>}  />
    <Route path="/contact" element={<Contact/>}  />
    <Route path="/testmonials" element={<Testmonials/>}  />
    <Route path="/why" element={<Why/>}  />
    <Route path="/footer" element={<Footer/>}  />
  </Routes>
}
export default App
import AboutMe from "../Components/About"
import Contact from "../Components/contact"
import Footer from "../Components/footer"
import Header from "../Components/Header"
import HeroSection from "../Components/HeroSection"
import Projects from "../Components/Projects"
import Services from "../Components/services"
import Testmonials from "../Components/Testmonials"
import Why from "../Components/Why"

function Home (){
    return <div>
        <Header />
        <HeroSection />
        <Services />
        <AboutMe />
        <Projects />
        <Contact />
        <Testmonials />
        <Why />
        <Footer />
    </div>
}
export default Home
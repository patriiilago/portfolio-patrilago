import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomeSection from './components/HomeSection/HomeSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import TechSection from './components/TechSection/TechSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import AboutSection from './components/AboutSection/AboutSection'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
      <div className="portfolio-container">
        <Navbar />

        <main className="portfolio-main">

          <section id="home">
            <HomeSection />
          </section>

          <section id="experience">
            <ExperienceSection />
          </section>
          
          
          <section id="tech">
            <TechSection />
          </section>

          <section id="projects">
            <ProjectsSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section> 

        </main>

        <Footer />
      </div>
    </>
  )
}

export default App

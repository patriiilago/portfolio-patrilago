import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomeSection from './components/HomeSection/HomeSection'


function App() {


  return (
    <>
      <div className="portfolio-container">
        <Navbar />

        <main>

          <section id="home">
            <HomeSection />
          </section>

          {/* <section id="experience">
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
          </section> */}

        </main>

        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App

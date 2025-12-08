import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Tech from './components/Tech/Tech'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <Navbar />


        <main className="portfolio__main">

          <section id="home" className="portfolio__section portfolio__section--home">
            <Hero />
          </section>

          <section id="experience" className="portfolio__section portfolio__section--experience">
            <Experience />
          </section>

          <section id="tech" className="portfolio__section portfolio__section--tech">
            <Tech />
          </section>

          <section id="projects" className="portfolio__section portfolio__section--projects">
            <Projects />
          </section>

          <section id="about" className="portfolio__section portfolio__section--about">
            <About />
          </section>

          <section id="contact" className="portfolio__section portfolio__section--contact">
            <Contact />
          </section>

        </main>


        <Footer />
      </div>
    </div>
  )
}

export default App

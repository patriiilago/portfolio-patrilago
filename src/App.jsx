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
    <>
      <div className="portfolio-container">
        <Navbar />


        <main className="portfolio-main">

          <section id="home">
            <Hero />
          </section>

          <section id="experience">
            <Experience />
          </section>
          
          <section id="tech">
            <Tech />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="contact">
            <Contact />
          </section> 

        </main>


        <Footer />
      </div>
    </>
  )
}

export default App

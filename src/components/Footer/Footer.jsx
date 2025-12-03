import './Footer.css'

const Footer = () => {
    
return (
   <footer>
            <div className="footer-container">

                {/* 1. Columna de Perfil / Branding */}
                <div className="footer-section footer-info">
                    <h1>Patri Lago</h1>
                    <p className="role">Software Developer</p>
                    <p className="about-me">Creando soluciones digitales con pasión por el código limpio y la experiencia de usuario.</p>
                </div>


                {/* 2. Columna de Enlaces Sociales */}
                <div className="footer-section footer-links">

                    <div className="nav-links">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    </div>

                    <div className="social-links">
                        <a 
                            href="https://github.com/patriiilago"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub Profile"
                        >
                            GitHub
                        </a>
                        
                        <a 
                            href="https://www.linkedin.com/in/patri-lago/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn Profile"
                        >
                            LinkedIn
                        </a>
                    </div>

                </div>

            </div>
            
            {/* Sección de Copyright */}
            <div className="footer-bottom">
                <p>&copy; 2025 Patri Lado. Todos los derechos reservados.</p>
            </div>
        </footer>
)

}
export default Footer
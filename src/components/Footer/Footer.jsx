import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__container">

                {/* 1. Columna de Perfil / Branding */}
                <div className="footer__section footer__info">
                    <h1 className="footer__name">Patri Lago</h1>
                    <p className="footer__role">Software Developer</p>
                    <p className="footer__about">Creando soluciones digitales con pasión por el código limpio y la experiencia de usuario.</p>
                </div>

                {/* 2. Columna de Enlaces Sociales y Navegación */}
                <div className="footer__section footer__links">

                    <nav className="footer__nav">
                        <ul className="footer__nav-list">
                            <li><a href="#home">Inicio</a></li>
                            <li><a href="#projects">Proyectos</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </nav>

                    <div className="footer__social-links">
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
            <div className="footer__bottom">
                <p>&copy; 2025 Patri Lago. Todos los derechos reservados.</p>
            </div>

        </footer>
    )
}
export default Footer
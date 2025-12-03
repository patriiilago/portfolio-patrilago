import './Hero.css'

const Hero = () => {

    return (

        <div className="home-content">
            <h1 className="name-title">Patri Lago</h1>
            <h2 className="role-title">Software Developer</h2>

            <div className="social-links">
                <a
                    href="https://github.com/patriiilago"
                    className="social-icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="src\assets\iconGithub.png" alt="GitHub" />
                </a>

                <a
                    href="https://www.linkedin.com/in/patri-lago/"
                    className="social-icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="src\assets\iconLinkedin.png" alt="Linkedin" />
                </a>
            </div>

            <a
                href="/Patri-Lago-CV.pdf"
                download
                className="cv-button"
            >
                Download CV
            </a>

        </div>
    )

}
export default Hero
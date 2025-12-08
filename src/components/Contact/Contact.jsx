import './Contact.css'


const Contact = () => {
    return (
        <div className="contact">

            {/* Título global */}
            <h1 className="section-title contact__title">Contacto</h1>

            <form 
                className="contact__form" 
                action="https://formspree.io/f/mjkbkqbq" 
                method="post"
            >

                <div className="contact__form-group">
                    <label htmlFor="name" className="contact__form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="contact__form-input"
                        required
                    />
                </div>

                <div className="contact__form-group">
                    <label htmlFor="email" className="contact__form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="contact__form-input"
                        required
                    />
                </div>

                <div className="contact__form-group">
                    <label htmlFor="message" className="contact__form-label">
                        Comentario
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="contact__form-textarea"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="contact__button">
                    Enviar
                </button>

            </form>
        </div>
    )
}
export default Contact
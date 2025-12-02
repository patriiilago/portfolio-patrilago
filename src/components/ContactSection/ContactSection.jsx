import './ContactSection.css'

const ContactSection = () => {

    return (
        <>
            <h1 className="contact-title">Contact me</h1>

            <form 
            className="contact-form" 
            action="https://formspree.io/f/mjkbkqbq" 
            method="post"
            >

                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">
                        Comentario
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="form-textarea"
                        required
                    ></textarea>
                </div>

                <button className="buttonContact">
                    Enviar
                </button>

            </form>
        </>
    )

}
export default ContactSection
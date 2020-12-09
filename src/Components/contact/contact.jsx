import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import React from 'react';


import './contact.scss';


const Contact = () => {
    return (
        <div className="container__contact">
            <div className="contact">
                <h1>Contact me</h1>
            </div>
            <div className="component__contact">

                <div className="image">
                    <img src="./foto2.jpg" alt="" className="image bounceInLeft animated" />
                </div>
                <div className="me">

                    <div className="contenido">
                        <dl>
                            <dt className="contact__namedt">First Name</dt>
                            <dd className="contact__namedd"> Verónica</dd>

                            <dt className="contact__emaildt">Email</dt>
                            <dd className="contact__emaildd"><a href="mailto:veronicajn230285@gmail.com">veronicajn230285@gmail.com</a></dd>

                            <dt className="contact__telephonedt">Telephone</dt>
                            <dd className="contact__telephonedd"><a href="tel:+34639492415">639 492 415</a></dd>
                        </dl>
                                              
                    </div>
                    <div className="content__icons">
                        <a href="https://github.com/veronicajn" role="button" className="link">
                        <FontAwesomeIcon icon={faGithub} size="3x" className="icon__github" />
                        </a>
                        <a href="https://linkedin.com/in/veronica-juarez-nuñez-432ab95a" role="button" className="link">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" className="icon__linkedin" />
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Contact;
import "./index.css"
import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import emailjs from '@emailjs/browser'
import ContactSlider from "../ContactSlider";


const Contact = () => {
    const [buttonText, setButtonText] = useState('Send');
    const refForm = useRef();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        setButtonText("Sending...")

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                refForm.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
            .finally(() => {
                setButtonText("Send");
            });
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <ContactSlider></ContactSlider>
                    </Col>
                    <Col size={12} md={6}>
                        <div>
                            <h2>Connect</h2>
                            <form ref={refForm} onSubmit={handleSubmit}>
                                <Row>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="text" name="fname" placeholder="First Name" required />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="text" name="lname" placeholder="Last Name" required />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="email" name="email" placeholder="Email Address" required />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="tel" name="tel" placeholder="Phone Number" />
                                    </Col>
                                    <Col size={12} className="px-1">
                                        <textarea rows="6" name="message" placeholder="Message" required ></textarea>
                                        <button type="submit"><span>{buttonText}</span></button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Contact

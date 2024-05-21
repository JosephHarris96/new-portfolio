import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ajj0yws', 'template_37iz1em', form.current, {
                publicKey: 'zcEbY03ShcVRw2ZoS',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSubmitted(true);
                    setTimeout(() => {
                        setSubmitted(false);
                    }, 2000); 
                    form.current.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <div className="contact-container">
                    <h2>Contact Me</h2>
                    <input type="text" name="user_name" placeholder="Enter Full Name" />
                    <input type="email" name="user_email" placeholder="Enter Email Address" />
                    <textarea type="text" name="message" placeholder="Enter your enquiry here..." />
                    <button type="submit">Submit</button>
                </div>
            </form>
            {submitted && <p>Your request has been submitted</p>}
        </>
    );
};

export default Contact;

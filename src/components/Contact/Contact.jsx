import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
        <h2>Contact Me</h2>
        <input type="text" placeholder="Enter Full Name" />
        <input type="email" placeholder="Enter Email Address" />
        <input type="text" placeholder="Enter your enquiry here..." />
        <button>Submit</button>
    </div>
  )
}

export default Contact

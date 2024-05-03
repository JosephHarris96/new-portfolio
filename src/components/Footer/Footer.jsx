import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer-container">
        <h2>Joseph Harris</h2>
        <p>Front End Software Developer</p>
    <div className="footer-icons">
        <img src={assets.linkedin} alt="linkedin"/>
        <img src={assets.instagram} alt="instagram"/>
        <img src={assets.github} alt="github" />
        <img src={assets.gmail} alt="gmail" />
    </div>
    </div>
  )
}

export default Footer

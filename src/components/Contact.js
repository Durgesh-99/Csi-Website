import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import insta from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import './Contact.css';

function Contact() {

  const handleClick = () => { window.location.href = "https://rzp.io/l/31bBIMJ"; };

  return (
    <div className='Contact'>
        <div className="container">
          <div className="contact-info">
            <div className="info-item-1">
                <h2>Get in touch</h2>
                <div className="address">    
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>Department Of Computer Science And Engineering Progressive Education Society's Modern College of Engineering J.M. Road, Shivaji nagar , Shivajinagar, Pune, Maharashtra 411005 </p>
                </div>
                <div className="mail">
                  <p><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:csi_comp@moderncoe.edu.in">csi_comp@moderncoe.edu.in</a></p>
                </div>
                <div className="phone">
                  <p><FontAwesomeIcon icon={faPhone} /><a href="tel:+8805569744">+91 8805569744</a><br/></p>
                  <p><FontAwesomeIcon icon={faPhone} /><a href="tel:+7517219008">+91 7517219008</a></p>
                </div>
            </div>
            <div className="info-item">
                <h2>Locate Us</h2>
                <p><iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1337.5161873366164!2d73.84580517823657!3d18.52587130082115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07e4111123b%3A0x3f92335c2e5c8400!2sP.E.S.%20Modern%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1707584356895!5m2!1sen!2sin" 
                width="350" height="350" loading="lazy" title="Maps"></iframe>
                </p>
            </div>
          </div>
          <div className="social-icons">
              <a href="https://www.instagram.com/csi_mcoe?igsh=Mjl0emNweGRyNWx6"><img src={insta} alt="instagram"/></a>
              <a href="https://www.linkedin.com/in/csi-pesmcoe-ba53952b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><img src={linkedin} alt="linkedin"></img></a> 
              <a href="mailto:csi_comp@moderncoe.edu.in"><FontAwesomeIcon className="fa-mail" icon={faEnvelope} /></a>
              <button className="button-60" role="button" onClick={handleClick}><span className="text">Support Us!</span></button>
            </div>
            <hr className="horizontal-line"/>
            <div className="quick-links">
                <h2>Quick Links</h2>
                 <a href="http://www.csi-india.org/">CSI India</a>
                <a href="https://moderncoe.edu.in/">Discover PESMCOE</a>
               
                
            </div>
          </div>
        </div>
  );
}

export default Contact;
import React from "react";
import './About.css';
import csiLogo from '../images/csi_logo.jpg'
import clg from '../images/college_image.jpg'
import csi_team from '../images/csi.jpg'

function About() {

  return (
      <div className='About'>
          <section id="mission-vision-container">
            <h2>Mission & Vision</h2>
            <p>Our mission is to foster a collaborative environment where students can enhance their technical skills, engage in innovative projects, and contribute to the technological development of society. Our vision is to be a leading hub for technological innovation and excellence in the region.</p>
            <div class="logo3">
              <img src={csi_team} alt="CSI Team"/>
            </div>
          </section>
          <section id="csi-info-container" class="flex-row">
            <div class="logo1">
              <img src={csiLogo} alt="CSI Logo"/>
            </div>
            <div class="info1">
              <h2>CSI (Computer Society of India)</h2>
              <p>Welcome to the Computer Society of India (CSI) group at PES Modern College of Engineering, Pune. We are a community of passionate individuals 
                dedicated to advancing the field of computer science and technology.Keeping in mind the interest of the IT professionals & computer users CSI 
                works towards making the profession an area of choice amongst all sections of the society. The promotion of Information Technology as a 
                profession is the top priority of CSI today. To fulfill this objective, the CSI regularly organizes conferences, conventions, lectures, 
                projects, awards. And at the same time it also ensures that regular training and skill updating are organised for the IT professionals. 
                Education Directorate, CSI helps physically challenged citizens by providing training ‘Punarjani’. CSI also works towards a global approach, 
                by seeking out alliances with organizations overseas who may be willing to come forward and participate in such activities. CSI also helps 
                governments in formulating IT strategy & planning.</p>
            </div>
          </section>

          <section id="college-info-container">
            <div class="info2">
              <h2>P.E.S. Modern College of Engineering</h2>
              <p>Modern College of Engineering, an institute of higher education offers quality programs that integrate academic inputs and professional 
                skills to empower students for developing their personal and career potential. The Institute provides assistance to eligible graduates through
                 training, seminars, workshops and counseling sessions to make them employable.</p>
            </div>
            <div class="logo2">
              <img src={clg} alt="College Image"/>
            </div>
          </section>
      </div>
  );
}

export default About;
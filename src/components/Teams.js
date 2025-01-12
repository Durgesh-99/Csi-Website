import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'
import c3 from '../images/c3.jpg'
import c4 from '../images/c4.jpg'
import c5 from '../images/c5.jpg'
import web from '../images/web.jpg'
import tech from '../images/tech.jpg'
import fina from '../images/fina.jpg'
import mark from '../images/mark.jpg'
import doc from '../images/doc.jpg'
import pho from '../images/pho.jpg'
import eve from '../images/eve.jpg'
import soc from '../images/soc.jpg'
import desi from '../images/desi.jpg'
import './Teams.css';

function Teams() {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div className='Teams'>
          <section className="core">
              <div className="core-section">
                <h1>CORE TEAM</h1>
                <hr />
                <div className="core-image">
                  <div className="image" onMouseEnter={() => setShowSocial(true)} onMouseOut={() => setShowSocial(false)}>
                    <img src={c1} alt="image"/>
                    <div className="social">
                        <FontAwesomeIcon className="Icon" icon={faInstagram}/>
                        <FontAwesomeIcon className="Icon" icon={faLinkedin}/>
                    </div>
                    <div className="image-contents">ADHISH PAWAR</div>
                  </div>
                  <div className="image">
                    <img src={c2} alt="image" />
                    <div className="social">
                        <FontAwesomeIcon className="Icon" icon={faInstagram}/>
                        <FontAwesomeIcon className="Icon" icon={faLinkedin}/>
                    </div>
                    <div className="image-contents">ADHISH PAWAR</div>
                  </div>
                  <div className="image">
                    <img src={c3} alt="image" />
                    <div className="social">
                        <FontAwesomeIcon className="Icon" icon={faInstagram}/>
                        <FontAwesomeIcon className="Icon" icon={faLinkedin}/>
                    </div>
                    <div className="image-contents">ADHISH PAWAR</div>
                  </div>
                  <div className="image">
                    <img src={c4} alt="image" />
                    <div className="social">
                        <FontAwesomeIcon className="Icon" icon={faInstagram}/>
                        <FontAwesomeIcon className="Icon" icon={faLinkedin}/>
                    </div>
                    <div className="image-contents">ADHISH PAWAR</div>
                  </div>
                  <div className="image">
                    <img src={c5} alt="image" />
                    <div className="social">
                        <FontAwesomeIcon className="Icon" icon={faInstagram}/>
                        <FontAwesomeIcon className="Icon" icon={faLinkedin}/>
                    </div>
                    <div className="image-contents">ADHISH PAWAR</div>
                  </div>
                  <div className="image">
                    <img src="images/img.jpg" alt="image" />
                    <div className="social">
                        <FontAwesomeIcon className="Icon" icon={faInstagram}/>
                        <FontAwesomeIcon className="Icon" icon={faLinkedin}/>
                    </div>
                    <div className="image-contents">ADHISH PAWAR</div>
                  </div>
                </div>
              
            </div>
          </section>

          <section className="teams">
              <h1>OUR TEAMS</h1>
              <div className="team-imageL">
                <div className="content">
                  <img src={web} alt="team-img" />
                </div>
                <div className="headsL">
                <h2>WEBSITE TEAM</h2>
                  <h3>Head : Durgesh Sonar</h3>
                  <h3>Co-Head : Tejas Kothwal</h3>
                </div>
              </div>

              <div className="team-imageR">
                <div className="headsR">
                <h2>TECHNICAL TEAM</h2>
                <h3>Head : Yash Jaiswal</h3>
                <h3>Co-Head : Tahseen Bairagdar</h3>
                </div><div className="content">
                <img src={tech} alt="team-img" />
                </div>
              </div>

              <div className="team-imageL">
                <div className="content">
                <img src={fina} alt="team-img" />
                </div>
                <div className="headsL">
                <h2>FINANCE TEAM</h2>
                <h3>Head : Harsh Shaha</h3>
                <h3>Co-Head : Shraddha Dashpute</h3>
                </div>
              </div>

              <div className="team-imageR">
                <div className="headsR">
                <h2>MARKETING TEAM</h2>
                <h3>Head : Neha Wakhare</h3>
                <h3>Co-Head : Rahul Shirke</h3>
                </div>
                <div className="content">
                <img src={mark} alt="team-img" />
                </div>
              </div>

              <div className="team-imageL">
                <div className="content">
                <img src={doc} alt="team-img" />
                </div>
                <div className="headsL">
                <h2>DOCUMENTATION TEAM</h2>
                <h3>Head : Netra Narkhede</h3>
                <h3>Co-Head : Khushi Raut</h3>
                </div>
              </div>

              <div className="team-imageR">
                <div className="headsR">
                <h2>CONTENT TEAM</h2>
                <h3>Head : Nidhi Tikone</h3>
                <h3>Co-Head : Srishti Koli</h3>
                </div>
                <div className="content">
                <img src="images/img.jpg" alt="team-img" />
                </div>
              </div>

              <div className="team-imageL">
                <div className="content">
                  <img src={pho} alt="team-img" />
                </div>
                <div className="headsL">
                <h2>PHOTOGRAPHY TEAM</h2>
                  <h3>Head : Om Pakhare</h3>
                  <h3>Head : Subodh Joshi</h3>
                  <h3>Co-Head : Sojas Dhodare</h3>
                </div>
              </div>

              <div className="team-imageR">
                <div className="headsR">
                <h2>EVENT MANAGEMENT<br/> TEAM</h2>
                <h3>Head : Pranjal Shinde</h3>
                <h3>Co-Head : Rahul Raut</h3>
                </div>
                <div className="content">
                <img src={eve} alt="team-img" />
                </div>
              </div>

              <div className="team-imageL">
                <div className="content">
                <img src={soc} alt="team-img" />
                </div>
                <div className="headsL">
                <h2>SOCIAL MEDIA TEAM</h2>
                <h3>Head : Anajali Pujari</h3>
                <h3>Co-Head : Neha Desai</h3>
                </div>
              </div>

              <div className="team-imageR">
                <div className="headsR">
                <h2>Design TEAM</h2>
                <h3>Head : Harshad Parihar</h3>
                <h3>Co-Head : Divya Pawar</h3>
                </div>
                <div className="content">
                <img src={desi} alt="team-img" />
                </div>
              </div>
          </section>
    </div>
  );
}

export default Teams;
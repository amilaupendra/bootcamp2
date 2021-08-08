import React from 'react'
import Logo from '../img/csup_l-1.png';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../img/python.jpeg";
import img2 from "../img/image.jpeg";
import img3 from "../img/BootCamp V1.0.jpeg";
import facebook from "../img/facebook.png";
import linkedin from "../img/linkedin.png";
import youtube from "../img/youtube.png";
import insta from "../img/insta.png";
import web from "../img/web.jpg";
import csupp2 from "../img/csupp2.jpg";
import boots from "../img/boots.jpg"



function AboutCsup() {
    return (
        <div className="about-image"> 
            <h1 ></h1>
            <Carousel>
                <Carousel.Item>
                    
                    <img src={csupp2} height="300px" width="100%" alt="img1"/>
                    <br/>
                    <br/>
                    

                </Carousel.Item>
                <Carousel.Item>
                    
                    <img src={csupp2} height="300px" width="100%" alt="img1"/>
                    <br/>
                    <br/>
                    
                
                </Carousel.Item>
                <Carousel.Item>
                    
                    <img src={csupp2} height="300px" width="100%" alt="img1"/>
                    <br/>
                    <br/>
                    
                
                </Carousel.Item>
            </Carousel>
            

            <hr/>
            <h2 align="center" className="AboutCsup-h1-1">PURPOSE</h2>
            <p>The CSUP Peradeniya, Computer Society University of Peradeniya recognized as the paramount society in the university which connects all the nine faculties together with the intention of transforming tomorrow's world with intelligence together with practical and theoretical knowledge to the betterment of the world.</p>
            
            <hr/>
            <h2 className="aboutus-h1-1">OUR EVENTES</h2>
            <br/>

            <p></p>
            <Carousel>
                <Carousel.Item>
                    <h2>WORKSHOP</h2>
                    <img src={img1} height="300px" width="80%" alt="img1"/>
                    <br/>
                    <br/>
                    <h4>more details..</h4>
                    <p>"Introduction to python programming language " session was delivered by Mr. Ashen Ranaweera through CSUP YouTube channel.</p>
                    <h3><a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q">Workshop videos</a></h3>

                </Carousel.Item>
                <Carousel.Item>
                    <h2>ONLINE SESSION</h2>
                    <img src={img2} height="300px" width="80%" alt="img1"/>
                    <br/>
                    <br/>
                    <h4>more details..</h4>
                    <p>This session consists of 3 phases about Bootstraps, Jquery & Ajax. This session was conducted via CSUP Youtube channel.</p>
                    <h3><a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q">Online session  videos</a></h3>
                
                </Carousel.Item>
                <Carousel.Item>
                    <h2>BOOTCAMP </h2>
                    <img src={img3} height="300px" width="80%" alt="img1"/>
                    <br/>
                    <br/>
                    <h4>more details..</h4>
                    <p>This series was arranged based on web designing & it was offered as  3 sessions.Resource contribution to the program </p>
                    <h3><a href="https://youtube.com/playlist?list=PLK1fnte3Gz-jFNI9JEqy6sv2RAmu0eA3q">bootcamp videos</a></h3>
                
                </Carousel.Item>
            </Carousel>
            
            <hr/>
            
            <hr/>
            <h2 align="center" className="aboutus-h1-1">PAST EVENTS </h2>
            <p>We have successfully completed some remarkable events with the guidance of lecturers and support by the members of the CSUP to create innovative extraordinary solutions to the wider world.</p>
            
            <hr/>
            <br/>
            <img src={Logo}  alt="Logo" width="450" height="300"/>
            <br/>
            <br/>
            <h2 className="aboutus-h1-1"> SOCIAL MEDIA</h2>
            
            <img src={facebook} height="50px" width="50px" alt="img1"></img>
            <p background color="black"><a  href ="https://www.facebook.com/CsupFB/"> facebook</a></p>
            <br/>
            <br/>

            <img src={linkedin} height="50px" width="50px" alt="img1"></img>
            <p background color="black"><a href ="https://www.linkedin.com/company/computer-society-university-of-peradeniya-csup/mycompany/"> <t/> linkedin</a></p>
            <br/>
            <br/>

            <img src={youtube} height="50px" width="50px" alt="img1"></img>
            <p background color="black"><a href ="https://www.youtube.com/c/CSUPComputerSocietyUniversityofPeradeniya"> <t/> youtube</a></p>
            <br/>

            <img src={insta} height="50px" width="50px" alt="img1"></img>
            <p background color="black"><a href ="https://www.instagram.com/csup_insta/"> <t/> Instagram</a></p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default AboutCsup;

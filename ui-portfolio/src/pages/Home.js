import {Row, Col, Card, CardGroup, Container, Button} from 'react-bootstrap';
import webLogo from '../assests/web-logo.png';
import { useEffect, useState } from 'react';
import home1 from '../assests/home1.jpeg';
import home2 from '../assests/home2.jpeg';
import home3 from '../assests/home3.jpeg';
import { useLocation } from 'react-router-dom';


function Home() {


    let location = useLocation();
    const [curPage, setCurPage] = useState("home")

    useEffect(() => {
        setCurPage(location)
    }, [location]);

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 1399px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 1399px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

      return (
        <Container style={{marginLeft:"20%"}}>
        <Row>
            <Col lg={10}>
                <Row style={{marginTop:"2%"}}>
                    <Col>
                    <h1>Hola Mundo</h1>
                    <p>My name is Ángela, I am a recent Gonzaga graduate and aspiring UI/UX designer. I am passionate about visual art and design but have
                         always struggled to find an intersection between my creative and technical 
                         skills. After taking a UI/UX course during the last semester of my senior 
                         year, I realized it was where I wanted to be. Working in UI/UX would utilize
                          my eye for design and my CS background while also allowing me to work 
                          toward the powerful mission of <b>making the world accessible and enjoyable 
                          for all.</b>
                    </p>
                    <div style={{marginLeft:"-40%", marginTop:"10%"}}>
                      
                        <Button>Resume</Button>
                       
                        <Button>Latina Design Corner</Button>
                        
                        <Button>Art Potfolio</Button> 
                    </div>
                
                    </Col>
                    <Col className="text-center">
                        <img src={home1} width="400px" height="300px" style={{objectFit:"cover"}} alt="designer @ work"/>
                        <div><i>Designer @ Work</i></div>
                    </Col>
                    
                    
                </Row>
                <div style={{marginLeft:"-50%", marginRight:"-30%", marginTop:"2%", paddingBottom:"2%", backgroundColor: "#E68BE1"}}>
                    <Col style={{marginLeft:"17%", paddingTop:"2%"}}>
                    <h2>Creating This Space</h2>
                    <p>
                    After graduating, I realized I wanted to learn more about UI/UX Design. 
                    I started the Coursera Google UI/UX Certification course so that I could 
                    assemble a portfolio of my skills and interests in UI. This site itself 
                    was my final project. I initially designed it to look separate from the 
                    rest of my blog but after some reflection, I realized I could use my blog 
                    theme as a design system to practice designing within a built-out framework. 

                    The final project for Coursera also required the project to benefit the 
                    social good. This motivated me to push my portfolio one step further and 
                    incorporate a networking tool as part of the site. As a Latina designer in 
                    the tech field, I have always felt like an only in my classes and internships. 
                    The Latina Design Corner is designed to connect Latina and minority designers 
                    in a fun way that allows for sharing resources, mentorship, and motivation. 

                    </p>
                    <h3>
                        Wireframes, Mockups, Prototype
                    </h3>
                    </Col>
                </div>
                <Row style={{marginLeft:"-20%", marginTop:"-2%"}}>
                    <Col className="text-center">
                        <img src={home2} alt="wireframe" width="350px"/>
                        <p><i>Paper Wireframe</i></p>
                    </Col>
                    <Col className="text-center">
                        <img src={home3} alt="wireframe"width="350px"/>
                        <p><i>Lo-Fi Mockup</i></p>
                    </Col>
                    <Col className="text-center">
                    <iframe width="500" height="250" src="https://xd.adobe.com/embed/ec86a22b-25c6-429f-929c-c56f5b17e9b0-b9d5/" frameborder="0" allowfullscreen></iframe>
                    <p><i>Adobe XD Hi-Fi Prototype</i></p>
                    </Col>
                </Row>
                <Row style={{marginLeft:"-21%"}}>
                    <Col>
                        <h3>
                            Design Challenges
                        </h3>
                        <p>
                        Creating a portfolio that looks good on all screen sizes was the 
                        biggest challenge. I wanted to ensure my resources were available
                         anytime and anywhere. Besides the general trend towards mobile 
                         internet access, there is a recent microtrend of NFC business cards. 
                         These types of cards are marketed toward professionals going to networking 
                         events. With this use case in mind, it is more and more likely a 
                         professional site like this would be viewed on a phone.  
                        </p>
                        <div >
                      
                        <Button>Course Notes</Button>
                       
                        <Button>GitHub</Button>
                        
                        <Button>LinkedIn</Button> 
                    </div>
                    </Col>
                </Row>
                {/* <Col lg={ matches ? 12 : 10 } md = {10} style={{marginBottom:'0.5rem'}}>
                    <CardGroup>
                                <a className= "card-link" href = "https://artfullyange.notion.site/Google-UI-UX-Certification-6abcd5d8a49b4765b34fdae891a5d2e9">
                                <Card style={{ width: '15rem', height : '18rem'}} className="card-home">
                                    <Card.Body>
                                    <Row style={{padding:"15px"}}><Col><img alt="google logo" src="https://img.icons8.com/fluency/120/000000/google-logo.png" height="60px"/></Col></Row>
                                    <Card.Title>UI/UX Certification</Card.Title>
                                        <Card.Text>
                                            I have started the Coursera Google UI/UX Certification course. In addition to this in-progress certification I have a B.A. in Computer Science.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </a>
                                <a className= "card-link" href = "https://github.com/Angela-Mari/UIPortfolio">
                                <Card style={{ width: '15rem', height : '18rem'}} className="card-home">
                                        <Card.Body>
                                        <Row style={{padding:"15px"}}><Col><img alt="GitHub logo" src="https://img.icons8.com/ios-glyphs/120/000000/github.png" height="60px"/></Col></Row>
                                        <Card.Title>GitHub Repository</Card.Title>
                                            <Card.Text>
                                                Clone the code for this porfolio on my GitHub! I have other fun projects on there too like my Taylor Swift Lyric Generator.
                                            </Card.Text>
                                        </Card.Body>
                                </Card>
                                </a>
                                <a className= "card-link" href = "https://www.linkedin.com/in/angela-george-a5073b164/">
                                <Card style={{ width: '15rem', height : '18rem' }} className="card-home">
                                        <Card.Body>
                                        <Row style={{padding:"15px"}}><Col><img alt="GitHub logo" src="https://img.icons8.com/color/144/000000/linkedin-circled--v1.png" height="60px"/></Col></Row>
                                        <Card.Title>LinkedIn Profile</Card.Title>
                                            <Card.Text>
                                                Connect with me on LinkedIn! There you will find my updated resume and professional persona. #9to5Life
                                            </Card.Text>
                                        </Card.Body>
                                </Card>
                                </a>
                                <a className= "card-link" href = "https://angelageorge.com/">
                                <Card style={{ width: '15rem', height : '18rem' }} className="card-home">
                                        <Card.Body>
                                        <Row style={{padding:"15px"}}><Col><img alt="Website logo" src={webLogo} height="60px"/></Col></Row>
                                        <Card.Title>Personal Blog</Card.Title>
                                            <Card.Text>
                                                Check out the rest of my blog for lifestyle, academic, artistic, and technical content. I fondly refer to it as <i>the hub.</i> 
                                            </Card.Text>
                                        </Card.Body>
                                </Card>
                                </a>
                    </CardGroup>
                </Col> */}
            </Col>
        </Row>
        </Container>
    );
}

export default Home;

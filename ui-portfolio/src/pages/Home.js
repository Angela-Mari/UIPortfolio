import {Row, Col, Container, Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import home1 from '../assests/home1.jpeg';
import home2 from '../assests/home2.jpeg';
import home3 from '../assests/home3.jpeg';

function Home() {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 1199px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 1199px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

      return (
        <Container>
        <Row>
            <Col >
                <Row style={{marginTop:"2%"}}>
                    <Col style={matches? {paddingLeft:"20%"}: {}} xl={9} lg={6} md={6}> 
                    <h1>Hola Mundo</h1>
                    <p>My name is Ángela, I am a recent Gonzaga graduate and aspiring UI/UX designer. I am passionate about visual art and design but have
                         always struggled to find an intersection between my creative and technical 
                         skills. After taking a UI/UX course during the last semester of my senior 
                         year, I realized it was where I wanted to be. Working in UI/UX would utilize
                          my eye for design and my CS background while also allowing me to work 
                          toward the powerful mission of <b>making the world accessible and enjoyable 
                          for all.</b>
                    </p>
                    <div style={matches? {} : {display:"none"}} >
                      
                      <Button href="https://angelageorge.com/wp-content/uploads/2023/02/PublicResume.pdf">Resume</Button>
                     
                      <Button href="https://angelageorge.com/ui-portfolio/latina-design-corner">Latina Design Corner</Button>
                      
                      <Button href="https://angelageorge.com/art-portfolio">Art Potfolio</Button> 
                  </div>   
                
                    </Col>
                    <Col className="text-center" xl={3} lg={6} md={6}>
                        <img src={home1} className="img-fluid" style={{objectFit:"cover", minHeight:"300px"}} alt="designer @ work"/>
                        <div><i>Designer @ Work</i></div>
                    </Col>
                    
                    
                </Row>
                <div style={matches? {display:"none"} : {}} >
                      
                    <Button href="https://angelageorge.com/wp-content/uploads/2023/02/PublicResume.pdf">Resume</Button>
                     
                     <Button href="https://angelageorge.com/ui-portfolio/latina-design-corner">Latina Design Corner</Button>
                     
                     <Button href="https://angelageorge.com/art-portfolio">Art Potfolio</Button>
                  </div> 
                <div style={{marginLeft:"-50%", marginRight:"-50%", marginTop:"2%", paddingBottom:"2%", backgroundColor: "#E68BE1"}}>
                    <Col style={{marginLeft:"25%", paddingTop:"2%", marginRight:"25%"}}>
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
                    the tech field, <b>I have always felt like an only</b> in my classes and internships. 
                    The Latina Design Corner is designed to connect Latina and minority designers 
                    in a fun way that allows for sharing resources, mentorship, and motivation. 

                    </p>
                    <h3>
                        Wireframes, Mockups, Prototype
                    </h3>
                    </Col>
                </div>
                <Row style={{marginTop:"-2%"}}>
                    <Col sm ={12} lg={4} className="text-center">
                        <img src={home2} alt="wireframe" style={{minHeight:"150px", maxWidth:"300px"}} className='img-fluid' />
                        <p><i>Paper Wireframe</i></p>
                    </Col>
                    <Col sm ={12} lg={4} className="text-center">
                        <img src={home3} alt="wireframe" style={{minHeight:"150px",  maxWidth:"300px"}} className='img-fluid'/>
                        <p><i>Lo-Fi Mockup</i></p>
                    </Col>
                    <Col sm ={12} lg={4} className="text-center">
                    <iframe title = "Adobe Prototype" className='img-fluid' src="https://xd.adobe.com/embed/ec86a22b-25c6-429f-929c-c56f5b17e9b0-b9d5/" frameborder="0" allowfullscreen></iframe>
                    <p><i>Adobe XD Hi-Fi Prototype</i></p>
                    </Col>
                </Row>
                <Row style={{marginLeft:""}}>
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
                        <div className='text-center'>
                      
                        <Button href="https://artfullyange.notion.site/Google-UI-UX-Certification-6abcd5d8a49b4765b34fdae891a5d2e9">Course Notes</Button>
                       
                        <Button href="https://github.com/Angela-Mari">GitHub</Button>
                        
                        <Button href="https://www.linkedin.com/in/angela-george-a5073b164/">LinkedIn</Button> 
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

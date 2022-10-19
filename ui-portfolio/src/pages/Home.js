import {Row, Col, Card, CardGroup, Container} from 'react-bootstrap';
import webLogo from '../assests/web-logo.png';
import { useEffect, useState } from 'react';

function Home() {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 1399px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 1399px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

      return (
        <Container>
        <Row>
            <Col lg={10}>
                <Row style={{marginTop:"2%"}}>
                    <h2>Hola.</h2>
                    <p>I am a recent Gonzaga graduate looking to start my career in UI/UX design. 
                        I have been passionate about visual art and design for as long as I can remeber but I 
                        always struggled to find an intersection between my createive and computer science skills. 
                        After taking a UI/UX course my last semester of senior year I realized that 
                        was the niche for me. Working in UI/UX is something that perfectly meshes my eye 
                        for design with my technical background while also falling in line with the powerful 
                        mission to <b>make the world accessible and enjoyable by all</b>.</p>
                </Row>
                <Col lg={ matches ? 12 : 10 } md = {10} style={{marginBottom:'0.5rem'}}>
                    <CardGroup>
                                <a className= "card-link" href = "https://www.linkedin.com/in/angela-george-a5073b164/">
                                <Card style={{ width: '15rem', height : '18rem'}}>
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
                                <Card style={{ width: '15rem', height : '18rem'}}>
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
                                <Card style={{ width: '15rem', height : '18rem' }}>
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
                                <Card style={{ width: '15rem', height : '18rem' }}>
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
                </Col>
            </Col>
        </Row>
        </Container>
    );
}

export default Home;

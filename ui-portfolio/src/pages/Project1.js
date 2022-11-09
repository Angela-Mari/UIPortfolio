import {Row, Col, Card, CardGroup, Container} from 'react-bootstrap';
import phone from "../assests/phone.png"


function Project1() {

    return (
    <Container style={{marginBottom:'1rem'}}>
        <Row style={{marginTop:"2%"}}>
            <Col lg={10}>
                <Row>
                <Col lg={8}>
                <Row >
                    <h2>Mobile App Design Project</h2>
                    <p>
                        CalChat is my dream solution to the problem of deconfilicting my schedule to hang out socially with a group of friends! 
                        Currently there is a gap in the market of groupchat and event-planning platforms. CalChat aims to 
                        fill this gap by becoming a social media platform for event planning. 
                    </p>
                </Row>
                
                </Col>
                <Col lg={4}>
                <img src={phone} className='phone-resource' alt="mockup"/>
                </Col>
                </Row>
                <Col>
                    
                    <Row style={{marginBottom:'1rem'}}>
                     
                    {/* User Research */}
                        <h2>
                            Pitch Deck
                        </h2>
                        <div className='canva-div'>
                            <iframe 
                                title='UX Presentation'
                                loading="lazy" 
                                className='canva-iframe'
                                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFRNjSNOEE&#x2F;view?embed" 
                                allowfullscreen="allowfullscreen" 
                                allow="fullscreen">
                            </iframe>
                        </div>
                    </Row>
                </Col>
            </Col>
        </Row>
    </Container>
    );
}

export default Project1;

import {Row, Col, Card, CardGroup, Container} from 'react-bootstrap';
import phone from "../assests/tempphone.jpeg"
import manIcon from "../assests/man-icon-1.png"
import womanIcon from "../assests/woman-icon-1.png"
import manIcon2 from "../assests/man-icon-2.png"
import womanIcon2 from "../assests/woman-icon-2.png"

function Project1() {
    return (
    <Container style={{marginBottom:'1rem'}}>
        <Row style={{marginTop:"2%"}}>
            <Col lg={10}>
                <Row>
                <Col lg={8}>
                <Row >
                    <h2>Mobile App Design Project</h2>
                </Row>
                <h3>Problem Statement</h3>
                <p>
                    
                </p>
                <h3>Research Goals</h3>
                <p>
                    <ul>
                        <li>
                        Understand what tools users are missing for event organizing
                        </li>
                        <li>
                        Understand how users feel when faced with organizing an event
                        </li>
                    </ul>
                </p>
                </Col>
                <Col lg={4}>
                <img src={phone} className='phone-resource' />
                </Col>
                </Row>
                <Col>
                    <h3>Interviews</h3>
                    <h4><i>What frustrations do you encounter when planing a social event?</i></h4>
                    <Row>
                    <CardGroup>
                        <Card style={{ width: '15rem', height : '20.5rem'}}>
                            <Card.Body>
                            <Row style={{padding:"15px"}}><Col><img alt="user icon" src={manIcon} height="60px"/></Col></Row>
                            <Card.Title>Participant 1</Card.Title>
                                <Card.Text>
                                    <b>Age:</b> 26<br/>
                                    <b>Gender:</b> Man<br/>
                                    <b>City:</b> Minneapolis, MN<br/>
                                    <br/>
                                    "I have trouble getting input on my event from my friends."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                        <Card style={{ width: '15rem', height : '20.5rem'}}>
                                <Card.Body>
                                <Row style={{padding:"15px"}}><Col><img alt="user icon" src={womanIcon} height="60px"/></Col></Row>
                                <Card.Title>Participant 2</Card.Title>
                                    <Card.Text>
                                        Age: 21<br/>
                                        Gender: Woman<br/>
                                        City: Pasedena, CA<br/>
                                        <br/>
                                        "There is no way to organize my group chats if not everyone is an iPhone user."
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem', height : '20.5rem' }}>
                                <Card.Body>
                                <Row style={{padding:"15px"}}><Col><img alt="user icon" src={manIcon2} height="60px"/></Col></Row>
                                <Card.Title>Participant 3</Card.Title>
                                    <Card.Text>
                                        Age: 52<br/>
                                        Gender: Man<br/>
                                        City: Northfield, MN<br/>
                                        <br/>
                                        "Not all my friends are on Facebook so I'm juggling multiple different apps."
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem', height : '20.5rem'}}>
                                <Card.Body>
                                <Row style={{padding:"15px"}}><Col><img alt="user icon" src={womanIcon2} height="60px"/></Col></Row>
                                <Card.Title>Participant 4</Card.Title>
                                    <Card.Text>
                                        Age: 22<br/>
                                        Gender: Woman<br/>
                                        City: Seattle, WA<br/>
                                        <br/>
                                        "I can't see everyone's availiblity easily."
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </CardGroup>
                    </Row>
                </Col>
            </Col>
        </Row>
    </Container>
    );
}

export default Project1;

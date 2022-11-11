import {Row, Col, Container} from 'react-bootstrap';

function Project3() {
    return (
        <Container style={{marginBottom:'1rem'}}>
            <Row style={{marginTop:"2%"}}>
                <Col lg={10}>
                    <Row>
                        <Col lg={8}>
                            <Row >
                                <h2>Reimagining a Mobile Design</h2>
                                <p>
                                    Snapchat is a popular app for sharing photos and instant messaging but it could be better. For a group project, my teammates conducted interviews, a usability study, and redesigned
                                    the UI. After presenting our work we were given feedback which I have used to create a V2. 
                                </p>
                            </Row>
                            
                        </Col>
                        <Row style={{marginBottom:'1rem'}}>
                     
                            {/* User Research */}
                                <h2>
                                    Pitch Deck
                                </h2>
                                <div className="canva-div">
                                    <iframe loading="lazy" className="canva-iframe"
                                        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFRmvRsoOk&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                                    </iframe>
                                </div>
                            </Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Project3;

import {Row, Col, Card, CardGroup} from 'react-bootstrap';

function Home() {
    console.log("in about")
    return (
        <Row>
            <Col xs={11}>
            <Row style={{marginTop:"2%"}}>
                <h2>Hi</h2>
                <p>This is a bunch of info about me! This is a bunch of info about me! This is a bunch of 
                    info about me! This is a bunch of info about me! vThis is a bunch of info about me! This
                     is a bunch of info about me! </p>
            </Row>
            <Row>
            <CardGroup>
                    <Card style={{ width: '15rem' }} className="text-center">
                        <Card.Body>
                        <Row className="justify-content-md-center" style={{padding:"15px"}}><Col><img alt="google logo" src="https://img.icons8.com/fluency/120/000000/google-logo.png" height="60px"/></Col></Row>
                        <Card.Title>UI/UX Certification</Card.Title>
                            <Card.Text>
                                I have started the Coursera Google UI/UX Certification course. In addition to this in progress certification I have a B.A. in computer science.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                <Card style={{ width: '15rem' }} className="text-center">
                        <Card.Body>
                        <Row className="justify-content-md-center" style={{padding:"15px"}}><Col><img alt="GitHub logo" src="https://img.icons8.com/ios-glyphs/120/000000/github.png" height="60px"/></Col></Row>
                        <Card.Title>GitHub Repository</Card.Title>
                            <Card.Text>
                                Check out the code for this porfolio on my GitHub! I have other fun projects on there too like my Taylor Swift Lyric Generator.
                            </Card.Text>
                        </Card.Body>
                </Card>
                    <Card style={{ width: '15rem' }} className="text-center">
                            <Card.Body>
                            <Row className="justify-content-md-center" style={{padding:"15px"}}><Col><img alt="GitHub logo" src="https://img.icons8.com/color/144/000000/linkedin-circled--v1.png" height="60px"/></Col></Row>
                            <Card.Title>LinkedIn Profile</Card.Title>
                                <Card.Text>
                                    Connect with me on LinkedIn and don't be shy to look around at my job history. 
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </CardGroup>
            </Row>
            </Col>
        </Row>
    );
}

export default Home;

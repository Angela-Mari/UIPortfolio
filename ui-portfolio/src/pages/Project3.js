import {Row, Col, Container, Button, Carousel} from 'react-bootstrap';
import chat from '../assests/Chat.png';
import camera from '../assests/Camera.png';
import aiassist from '../assests/aiassist.gif';
import stories from '../assests/stories.png';
import bitmojiPhone from '../assests/bitmoji-phone.png';
import bitmojiLean from '../assests/lean.png';
import editBitmoji from '../assests/EditBitmoji.png';
import settingsv1 from '../assests/settingsv1.png';
import skinToneEditor from '../assests/SkintoneEditor.png';

function Project3() {
    return (
        <Container style={{marginTop:"2%"}}>
            <Row>
            <Col sm= {12} md={12} lg={6}>
                <h1>Snapchat Reimagined</h1>
                <p>
                The problem with Snapchat's UI is that its use has evolved away from its design.
                 The current Snapchat UI is centered on taking pictures and sending "snaps." 
                 According to my team’s usability study, users favor Snapchat's group chat and
                  chat features over its image-capturing tools. In the changes suggested here by 
                  the prototype, we push for recentering the user experience around the chat feature
                   and simplifying the app to its core features again. 
                </p>
                
                <Row>
                    <Col xs={4} className="text-center d-none d-md-block">
                        <img src={camera} alt="camera view in Snapchat" className='snap-photos img-fluid'/>
                        <div><i>Camera</i></div>

                    </Col>
                    <Col xs={4} className="text-center d-none d-md-block">
                        <img src={chat} alt="chat view in Snapchat" className='snap-photos img-fluid'/>
                        <div><i>Home</i></div>

                    </Col>
                    <Col xs={4} className="text-center d-none d-md-block">
                        <img src={stories} alt="stories view in Snapchat" className='snap-photos img-fluid'/>
                        <div><i>Stories</i></div>
                    </Col>
                </Row>
                <Row className="d-md-none justify-content-center">
                <Carousel style={{width:"250px", height:"390px", marginBottom:"10%"}} variant="dark">
                    <Carousel.Item>
                        <img
                        className="snap-photos"
                        src={camera}
                        alt="camera view in Snapchat"
                        />
                        <Carousel.Caption>
                        <div><i>Camera</i></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="snap-photos"
                        src={chat}
                        alt="chat view in Snapchat"
                        />
                        <Carousel.Caption>
                        <div><i>Home</i></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="snap-photos"
                        src={stories}
                        alt="stories view in Snapchat"
                        />
                        <Carousel.Caption>
                        <div><i>Stories</i></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Row>
                <h2 style={{marginTop:"2%"}}>Mindful Content</h2>
                <p>
                The reasoning behind redesigning the story page was to prioritize the relevancy of content 
                to the user. Many users continue to use Snapchat solely for the story feature however this 
                feature has become difficult to use as personal friend’s stories are interrupted by ads. 
                In the redesign, we still leave space for ads but they should be based on location so that 
                they maintain relevance and allow users to get through their circle of friends before being 
                bombarded with ads. 
                </p>
                <Row>
                <Col xs={12} sm={8} md={8}>
                <p>
                In an age where users are begging social media giants to revert to simpler times, 
                (think Kim K, Make Instagram Instagram again) Snapchat should be thinking about what 
                users truly care about. As designers, we are professionally empowered to empathize 
                with users. It is hard to watch beloved apps become nearly unusable because the focus 
                has shifted away from building communities to growing profits.
                </p>
                </Col>
                <Col xs={12} sm ={4} md={4}>
                    <img src={bitmojiPhone} alt="bored bitmoji looking at phone" width="150px" />
                </Col>
                </Row>
            </Col>
            <Col sm = {12} md={12} lg={6}>
            <div style={{marginTop:"2%"}}>
                <Button href="https://www.figma.com/proto/ulnnS4ORKi2dQRsDyjLPvq/Superior-Snapchat?node-id=37-15&scaling=scale-down&page-id=0%3A1&starting-point-node-id=37%3A15&show-proto-sidebar=1">Prototype V1</Button> 
                <Button href="https://www.figma.com/proto/PezKLgEffxykvubw1ONI2e/Snapchat-Prototype?node-id=1-98&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A98">Prototype V2</Button>
            </div>
            <h2>Iterating on Feedback</h2>
            <Row>
            <Col xs={8} sm={10}>
            <p>
            After presenting the redesign to our class, new issues were revealed with the usability 
            of our mockup. Buttons were too small and key features were still buried. Using this 
            feedback, I redesigned the settings page and the bitmoji page to be both more modern 
            and usable.  
            </p>
            </Col>
            <Col xs={4} sm={2}>
            <img src={bitmojiLean} alt="gesturing bitmoji" width="200px" style={{marginLeft:"-50px", marginTop:"-100px"}}/>
            </Col>
            </Row>
            <Row>
            <Col sm={7}>
            <p>
            In V2 of the Snapchat redesign, settings are now searchable with an AI assistant and the Bitmoji color pickers are color blind accessible. 
            Usability issues with buttons being too small are also corrected. A new observation was that the skin and hair colors in the Bitmoji Editor were not colorblind accessible. I designed a labeled color picker that clearly idenitfies the base hue and 
            if it is a pure hue, tone, shade, or tint. I followed a modified <a href="https://en.wikipedia.org/wiki/Fitzpatrick_scale" >Fitzpatrick scale</a> to get a broad range of
            skintones without overwheling the UI. I don't think it is perfect, but I think it is a good start to making the color picker both accessible and diverse. 
            </p>
            <h3>Future Work</h3>
            <p>
            While the new redesign addresses some of the gaps, more research should be conducted to 
            create a final iteration of this design. I am certain there are ways 
            to improve the UX of the stories, profile, and even chats; especially as the favored feature of the app.  

            </p>
            </Col>
            <Col sm={5} className="text-center"> 
            <Row className="justify-content-center">
            <Carousel style={{width:"250px", height:"390px", marginBottom:"10%", marginTop:"10%"}} variant="dark">
                    <Carousel.Item>
                        <img
                        className="snap-photos"
                        src={editBitmoji}
                        alt="bitmoji Editor version 1"
                        />
                        <Carousel.Caption style={{marginLeft:"2rem"}}>
                        <div><i>Bitmoji V1</i></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="snap-photos"
                        src={skinToneEditor}
                        alt="Bitmoji Skintone Editor version 2"
                        />
                        <Carousel.Caption style={{marginLeft:"2rem"}}> 
                        <div><i>Bitmoji V2</i></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="snap-photos"
                        src={settingsv1}
                        alt="settings version 1"
                        />
                        <Carousel.Caption style={{marginLeft:"1.5rem"}}>
                        <div><i>Settings V1</i></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="snap-photos"
                        src={aiassist}
                        alt="ai assist view in settings"
                        />
                        <Carousel.Caption style={{marginLeft:"1.5rem"}}>
                        <div><i>Settings V2</i></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    </Carousel>
                    </Row>
            </Col>
            
            </Row>
            <Row style={{padding:"10%"}}>
                <div className='figma-container'>
                    <iframe title="snapchat figma" className='figmaIFrame3' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPezKLgEffxykvubw1ONI2e%2FSnapchat-Prototype%3Fnode-id%3D0%253A1%26t%3DFKLijkhfM34x4fgL-1" allowfullscreen></iframe>
                </div>
                </Row>
            </Col>
            </Row>
        </Container>
    );
}

export default Project3;

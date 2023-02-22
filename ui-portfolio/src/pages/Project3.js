import {Row, Col, Container, Button, Carousel} from 'react-bootstrap';
import chat from '../assests/Chat.png';
import camera from '../assests/Camera.png';
import bitmojiScreen from '../assests/bitmoji.png';
import stories from '../assests/stories.png';
import ghost from '../assests/snap-ghost.png';
import bitmojiPhone from '../assests/bitmoji-phone.png';
import bitmojiLean from '../assests/lean.png';




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
                        <h3>Camera</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="snap-photos"
                        src={chat}
                        alt="chat view in Snapchat"
                        />
                        <Carousel.Caption>
                        <h3>Home</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="snap-photos"
                        src={stories}
                        alt="stories view in Snapchat"
                        />
                        <Carousel.Caption>
                        <h3>Stories</h3>
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
                <Button>Latina Design Corner</Button>
                <Button>Art Potfolio</Button> 
            </div>
            <h2>Iterating on Feedback</h2>
            <Row>
            <Col xs={8} sm={10}>
            <p>
            After presenting the redesign to our class, new issues were revealed with the usability 
            of our mockup. Buttons were too small and key features were still buried. Using this 
            feedback, I redesigned the settings page and the profile page to look both more modern 
            and more usable.  
            </p>
            </Col>
            <Col xs={4} sm={2}>
            <img src={bitmojiLean} alt="gesturing bitmoji" width="200px" style={{marginLeft:"-50px", marginTop:"-100px"}}/>
            </Col>
            </Row>
            <Row>
            <Col sm={8}>
            <p>
            In V2 of the Snapchat redesign, the focus is still on chats but issues of privacy are 
            better addressed. In the original research, users were concerned with the public nature 
            of profiles on the app as well as difficulty finding privacy settings related to location 
            services. Both features needed to be prioritized in a new way for V2. My innovation on the 
            design was creating a privacy wizard which guides users through each setting. I have also 
            integrated some cyber security measures which default the user to private and location 
            services off. Users must opt into publicizing their profiles and location. 
            </p>
            <h3>Future Work</h3>
            <p>
            While the new redesign addresses some of the gaps, more research should be conducted to 
            create a final iteration of this design. The chat page and chat settings were not 
            investigated beyond deleting a group chat from your inbox. I am certain there are ways 
            to improve the UX of the chats. Especially since they are the favored feature of the app.  


            </p>
            </Col>
            <Col sm={4} className="text-center">
                <img src={bitmojiScreen} alt="bitmoji view in Snapchat" className='snap-photos'/>
                <div><i>Profile V2</i></div>
            </Col>
            </Row>
            <Row style={{padding:"10%"}}>
                <div className='figma-container'>
                    <iframe className='figmaIFrame3' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPezKLgEffxykvubw1ONI2e%2FSnapchat-Prototype%3Fnode-id%3D0%253A1%26t%3DFKLijkhfM34x4fgL-1" allowfullscreen></iframe>
                </div>
                </Row>
            </Col>
            </Row>
        </Container>
    );
}

export default Project3;

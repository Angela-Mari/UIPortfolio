import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import '../App.css';
import { useEffect, useState } from 'react';
import bluenoseHeader from '../assests/bluenoseheader.jpeg';
import sipping from '../assests/sipping.jpeg';


function Project2({curPage, setCurPage}) {

    useEffect(() => {
        setCurPage("project2")
    }, []);

    return (
            <div>
                <div style={{marginTop:"2%"}}>
                    <div className='overlay-row'></div>
                    <img src={bluenoseHeader} alt="Bluenose Coffee Interior" height="250px" style={{objectFit:"cover", marginBottom:'1rem', width:"2000px", marginLeft:"-1%"}}/>
                    <h1 style={{position:"absolute", top: "50%", left: "50%", transform: "translate(-50%, -100%)", color:"white", fontWeight:"bold", textShadow:"black 1px 1px 10px", zIndex:"5"}}>BlueNose Coffee Redesign</h1>
                </div>

                <Container>
                    <Row>
                    <Col xs={4}>
                    <h2>Case Study</h2>
                    
                    <p>Sarah is a local business owner in Farmington, MN who needs a website 
                    to sell beans in bulk and advertise in-store craft beverages. By 
                    partnering with other small businesses, through her wholesale beans 
                    program, she can expand her business beyond regular in-store customers. 
                    Her current site is professional but by using elements of <b>Neubrutalism</b>, I 
                    created a mockup of her site that is fun and accessible to new customers, 
                    walk-ins, and businesses alike.
                    </p>
                    <img width="400px" src={sipping} alt="Me sipping coffee" />
                    </Col>
                    <Col xs={8}>
                        <div>
                            <Button>Resume</Button>
                            <Button>Latina Design Corner</Button>
                            <Button>Art Potfolio</Button> 
                        </div>
                        <Row>
                            <h2>Empathizing With the User</h2>
                            <p>
                            One of the main site features is a menu with current beverages 
                            and snacks. The current site offers an image of the menu but I 
                            wanted to create something that would be more responsive across 
                            screen sizes as well as easier to update individual items. The site 
                            also needed an injection of images to show off the great craftsmanship 
                            of BlueNose baristas and pastry partners. 
                            </p>
                            <h3>Accessibility in Design</h3>
                            <p>
                            An important part of designing a website usable by all is to have a
                            responsive design and text that can be translated into other languages. 
                            With the menu now a responsive part of the website, and designed with 
                            Gestalt principles in mind (proximity, similarity, and closure) more 
                            users will be able to navigate the menu.
                            </p>
                            <h2>Neubrutalism Experiment</h2>
                            <p>
                            I am usually drawn to clean, minimalistic modern web designs that allow 
                            the content to speak for itself. However, I have always admired sites where 
                            their brand is present throughout every design choice across the site. With 
                            the Neubrutalism design trend, I found a way to push myself to design outside 
                            of my comfort zone. Redesigning the BlueNose Coffee site within the Neubrutalism 
                            design patterns meant thinking about what pictures need to pop, how to arrange the 
                            typography to maximize readability and quirkiness, and how will those design choices 
                            translate across screens.
                            </p>
                            <p>
                            Neubrutalism combines elements of brutalism (jarring or clashing colors and bold fonts)
                             along with fun and maybe groovy shapes, patterns, and fonts. It is a break from the 
                             minimalism trend in which sites have become almost indistinguishable from each other
                              besides the logo and potentially one accent color. While minimalism and following common
                               design trends can lead to better usability, there is a question of did we lose brand identity.
                            </p>
                            <Row>
                                
                            <Col xs={1}className="block-quote justify-content-end">“</Col><Col xs={10} className="align-items-center"><p>People think we are a corporate chain but we are a family-run 
                                local coffee shop.</p></Col><Col xs={1} className="block-quote justify-content-start">”</Col>
                            </Row>
                            <Row >
                            <p style={{textAlign:"end"}}>-	Sarah, BlueNose Owner</p>
                            </Row>
                            
                            <p>
                            In my mockup for BlueNose which I know to be a warm, welcoming, and friendly coffee shop; I took a risk and designed it in the Neubrutalism style. This also distinguishes BlueNose as a local coffee shop. 
                            </p>
                        </Row>
                    </Col>
                    </Row>
                </Container>
                {/* <Row >
                    <h2>Redesinging a Website</h2>
                    <p>
                        BlueNose coffee is a local coffee shop in Farmington MN. I have been friends with the owner for some time now and she was genrous enough to let me practice mocking up a website using her buisness and brand. Inspired by the Neubrutalism style in web design, I sought to give BlueNose a new look geared towards a gen z audeince.
                    </p>
                </Row>
                <Col lg={10}>
                    <Row>  
                        <h2>
                            <img alt ="figma logo" height="30px" src="data:image/png;base64,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"></img> Digital Wireframes & Mockup
                        </h2>
                        <Col style={{paddingTop:"0.5rem"}}>
                            <iframe 
                                title="CalChat Figma Wireframe"
                                className="figmaIFrame"
                                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FlJYHybwOOk9wBTTwAQCtV2%2FBlueNose-Coffee%3Fnode-id%3D0%253A1%26t%3DGchy10VfjdAv8yUj-1" 
                                allowFullScreen>
                            </iframe>
                        </Col>
                    </Row>
                </Col> */}
            </div>
    );
}

export default Project2;

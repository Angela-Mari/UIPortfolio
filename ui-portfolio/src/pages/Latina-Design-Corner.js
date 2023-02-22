import {Row, Col, Container, Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import rendering from '../assests/Mockup.png';
import { useEffect, useState } from 'react';
import latina from '../assests/embroidery.JPG';
import market from '../assests/market.png';
import loteria from '../assests/loteria.jpg';


function LatinaDesignCorner() {

    const [size, setSize] = useState(
        window.matchMedia("(min-width: 576px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 576px)")
        .addEventListener('change', e => setSize( e.matches ));
        console.log(size)
      }, []);

    return (
        <div className="latina-design" style={{marginBottom:"-20vh"}}>
         <Container>
            <Row>
                <Row style={{marginTop:"2%", paddingLeft:"15%"}}>
                <h1>Latina Design Corner</h1>
                <Col xs={12} sm ={12} md ={12} lg ={9}>
                    
                    <p>
                    The goal of this page is to be a community space for building knowledge, 
                    resources, and sharing experiences. When creating this portfolio, I wanted 
                    it to be a place that gave something back to the viewer. Being a woman in 
                    the tech field is hard enough, and the only way to make it easier for the 
                    next wave of designers is to make information easily accessible. 
                    </p>
                    <p>
                    By creating a network, we are working toward the goal of a beautiful and 
                    accessible internet for all. So please, read a story, use the links, and 
                    submit your ideas to make this space even better.  
                    </p>

                    <h2>Resources</h2>
                    <p>
                    This is a running list of Job Boards, Networking Events, and Educational Content deemed helpful by the community.
                    </p>
                    <p>
                    <a href="https://latinasintech.org/lit-recruit/">Latinas In Tech - Job Board</a>
                    </p>
                    <p>
                    <a href="https://www.latinxswhodesign.com/">Latinx Designers - Contact List</a>
                    </p>
                    <p>
                    <a href="https://open.spotify.com/show/3Ayn0VL4f9ZwR1GZ45XXL2?si=db7b19e0421f4fc7">A Hoe and a House Wife - Chicana Podcast</a>
                    </p>
                    <h2>Stories</h2>
                    <Row>
                        <Col xs={12} sm ={12} md={12} lg={12} xl={3} style={{marginRight:"20px", backgroundColor:"white", paddingBottom:"15px"}}>
                            <img src={loteria} className="img-fluid" style={{objectFit:"cover", marginBottom:"15px", maxHeight:"100px", minWidth:"150px", maxWidth:"350px"}}></img>
                            <h3>Finishing the Google UI/UX Certificate</h3>
                            <p >
                                {
                            
                                    size? 
                                    "Hey there, design enthusiasts! If you're looking to break into the world of user experience design, you might be considering the Google UI/UX Certificate program to beef up your design skills..."
                                    
                                    : 
                                    "Hey there, design enthusiasts! If you're ..."
                                    }
                                
                             
                            </p>
                            <a href="">Read More →</a>
                        </Col>
                        <Col xs={12} sm ={12} md={12} lg={12} xl={3} style={{marginRight:"20px", backgroundColor:"white", paddingBottom:"15px"}}>
                            <img src={latina} className="img-fluid" style={{objectFit:"cover", marginBottom:"15px", maxHeight:"100px", minWidth:"150px", maxWidth:"150px"}}></img>
                            <h3>Being a Latina in STEM: Postgrad Reflection</h3>
                            <p>
                            {
                            
                            size? 
                            "As a Latina in STEM, I've faced a unique set of challenges that my non-Latina peers might not fully understand. From constantly feeling like I had to prove myself to being one of the few women of color..."
                            :
                            "As a Latina in STEM, I've faced a unique..."
                            }
                            </p>
                            <a href="">Read More →</a>
                        </Col>
                        <Col xs={12} sm ={12}  md={12} lg={12} xl={3} style={{marginRight:"20px", backgroundColor:"white", paddingBottom:"15px"}}>

                            
                            <img src={market} className="img-fluid" style={{objectFit:"cover", marginBottom:"15px", maxHeight:"100px", minWidth:"150px", maxWidth:"150px"}}></img>
                            <h3>Talking with a Target UI/UX Designer</h3>
                            <p>
                            {
                            
                            size? 
                            "Hey guys, it's your girl, Angela back with another article! This time, I wanted to share my experience meeting with a UI/UX designer at Target, one of my favorite stores. In this article I'll go through the good, the bad, and the ugly..."
                            :
                            "Hey guys, it's your girl, Angela back ..."
                            } 
                            </p>
                            <a href="">Read More →</a>
                        </Col>
                    </Row>
                    <Row style={{marginBottom:"20%", paddingBottom:"20%"}}>
                      <div>
                      <Button>Submit a Story</Button>
                     
                      <Button>Join the Newsletter</Button>
                      </div>
                  </Row> 
                </Col>
                </Row>
                 
            </Row>
            </Container>
        
        </div>
    );
}

export default LatinaDesignCorner;
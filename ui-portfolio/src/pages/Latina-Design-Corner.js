import {Row, Col, Container, Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import latina from '../assests/embroidery.JPG';
import market from '../assests/minions.jpg';
import loteria from '../assests/loteria.jpg';


function LatinaDesignCorner() {

    const [size, setSize] = useState(
        window.matchMedia("(min-width: 576px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 576px)")
        .addEventListener('change', e => setSize( e.matches ));
      }, []);

    return (
        <div className="latina-design" style={{marginBottom:"-20vh"}}>
         <Container>
            <Row>
                <Row style={{marginTop:"2%", paddingLeft:"15%", marginBottom:"20%", paddingBottom:"20%"}}>
                
                <Col xs={12} sm ={12} md ={12} lg ={10} style={{backgroundColor:"white"}}>
                <h1>Latina Design Corner</h1>
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
                    <Row>
                    <h2>Stories</h2>
                    <Row>
                        <Col xs={12} sm ={12} md={12} lg={12} xl={3} style={{marginRight:"20px", backgroundColor:"white", paddingBottom:"15px"}}>
                            <img src={loteria} className="img-fluid" style={{objectFit:"cover", marginBottom:"15px", maxHeight:"200px", minWidth:"200px", maxWidth:"200px"}} alt="blog post cover"></img>
                            <h3>Should You Do the Google UX Design Certificate?</h3>
                            <p >
                                {
                            
                                    size? 
                                    "It only took 4 months, but here we are, I completed the Google UX Design Professional Certificate Program. While I don’t have a UI/UX job (necessarily)… this post is intended for lifelong learners, curious minds, and future designers...”"
                                    : 
                                    "It only took 4 months, but here we are, I ..."
                                    }
                                
                             
                            </p>
                            <a href="https://angelageorge.com/google-ux-design-certificate/">Read More →</a>
                        </Col>
                        <Col xs={12} sm ={12} md={12} lg={12} xl={3} style={{marginRight:"20px", backgroundColor:"white", paddingBottom:"15px"}}>
                            <img src={latina} className="img-fluid" style={{objectFit:"cover", marginBottom:"15px", maxHeight:"200px", minWidth:"200px", maxWidth:"200px"}} alt="blog post cover"></img>
                            <h3>Arc Browser Review: a UI/UX Success Story</h3>
                            <p>
                            {
                            
                            size? 
                            "What is the Arc Browser? Arc is a new player in the browsing space, less than a year old, and now in a public (invite-only) beta. Despite its infancy, it could be positioned to knock Chrome out of its decade-long domination..."
                            :
                            "What is the Arc Browser? Arc is a new..."
                            }
                            </p>
                            <a href="https://angelageorge.com/arc-browser-review/">Read More →</a>
                        </Col>
                        <Col xs={12} sm ={12}  md={12} lg={12} xl={3} style={{marginRight:"20px", backgroundColor:"white", paddingBottom:"15px"}}>

                            
                            <img src={market} className="img-fluid" style={{objectFit:"cover", marginBottom:"15px", maxHeight:"200px", minWidth:"200px", maxWidth:"200px"}} alt="blog post cover"></img>
                            <h3>Interviewing a Target UI/UX Designer</h3>
                            <p>
                            {
                            
                            size? 
                            "After graduating with my CS degree, I felt like I didn’t have enough insight into careers outside of software development. I was fortunate to connect with a UI designer at Target for an informational interview. I asked about..."
                            :
                            "After graduating with my CS degree, I felt ..."
                            } 
                            </p>
                            <a href="https://angelageorge.com/interviewing-a-ui-ux-designer/">Read More →</a>
                        </Col>
                        </Row>
                    </Row>
                    <Row >
                      <div>
                      <Button href="https://angelageorge.com/contact-me/">Submit a Story</Button>
                      </div>
                    </Row> 
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
                    
                    
                </Col>
                </Row>
                 
            </Row>
            </Container>
        
        </div>
    );
}

export default LatinaDesignCorner;

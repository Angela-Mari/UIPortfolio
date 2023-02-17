import {Row, Col, Container, Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import rendering from '../assests/Mockup.png';
import { useEffect, useState } from 'react';

// carousel source code: https://codesandbox.io/s/quote-carousel-react-s8get?from-embed=&file=/src/styles.css:206-1340

function Project1() {

    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        // This variable prevents race condition
        let current = 1;
        const cycleReviews = () => {
          if (current === 4) {
            current = 1;
          } else {
            current += 1;
          }
          setActiveSlide(current);
        };
        // intervalId identified so it can be canceled on unmount
        const intervalId = setInterval(() => {
          cycleReviews();
        }, 10000);
        // Removes interval on unmount
        return () => clearInterval(intervalId);
      }, []);

      const reviews = [
        {
          name: "Participant 1",
          citation: "Minneapolis, MN",
          quote:
            "I have trouble getting input on my event from my friends."
        },
        {
          name: "Participant 2",
          citation: "Pasadena, CA",
          quote:
            "There is no way to organize my group chats if not everyone is an iPhone user."
        },
        {
          name: "Participant 3",
          citation: "Northfield, MN",
          quote:
            "Not all my friends are on Facebook so I'm juggling multiple different apps."
        },
        {
          name: "Participant 4",
          citation: "Northfield, MN",
          quote:
            "Anything more than a text feels over the top."
        }
      ];

    return (
    <Container style={{marginBottom:'1rem'}}>
        <Row style={{marginTop:"2%"}}>
            <Col lg={10}>
                <Row >
                    <Col xs={10}>
                    
                    <h1>CalChat App Concept</h1>
                    <p>
                    CalChat is a blend of both a calendar and a social media tool. 
                    The goal is to make event planning fun, social, and easy so that users can focus 
                    on enjoying their company. Imagine an event planning tool with the power of 
                    enterprise technology wrapped into a mobile-friendly and casual experience. 
                    </p>
                    <p>
                    Research started with the assumption this app would be targeted at tech-savvy 
                    organized users. After three interviews and an exploration of personas and user 
                    journeys, the research identified gaps in the market where many users could benefit 
                    from a tool like this across age, gender, and technological literacy.
                    </p>
                    <div style={{marginBottom:"10px"}}>
                        <Button>Resume</Button>
                       
                        <Button>Latina Design Corner</Button>
                        
                        <Button>Art Potfolio</Button> 
                    </div>
                    <h2>Pain Points</h2>
                    <Row>
                    <ul className="carousel__list">
        {reviews.map((review, index) => {
          const { citation, name, quote } = review;
          const count = index + 1;
          return (
            <li
              className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
              key={count}
            >
              <blockquote className="carousel__quote">
                
                <Row>
                <Col xs={1}className="block-quote text-end" style={{padding:"0px", textAlign:"end"}}>
                    “
                </Col>
                <Col xs={9} className="h-25" style={{paddingTop:"25px", paddingRight:"0px", marginRight:"-10px"}}>
                                
                     <p>{quote}</p>
                               
                </Col>
                <Col xs={1} className="block-quote text-start" style={{padding:"0px", textAlign:"end"}}>
                                ”
                </Col>
                </Row>
                <cite>
                  <span className="carousel__name">{name}</span>
                  <span className="carousel__citation">{citation}</span>
                </cite>
              </blockquote>
            </li>
          );
        })}
        <li className="carousel__indicator">
          <span
            className={`carousel__dot${activeSlide === 1 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 2 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 3 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 4 ? " active" : ""}`}
          />
        </li>
      </ul>
                    </Row>
                    <h2 style={{marginTop:"2%", marginBottom:"2%"}}>Wirframes & Mockups</h2>
                    <Row >
                        <Col xs={3}>
                            <img src = {rendering} alt="3d rendering of CalChat" style={{maxWidth:"300px"}} />
                        </Col>
                        <Col xs={9}>
                            <p>
                            Some pain points that came out of the UX research were that large group chats are hard to manage, 
                            it is hard to find out friends' schedules, it is difficult to get input from everyone when planning 
                            an event, and anything beyond a group text seems over the top. To address these issues, Calendar Chat 
                            is oriented toward creating events with a variety of guests involved all while having a single source of truth for the event.
                            </p>
                            <p>
                            Having an event in Calendar Chat means a central place to store and comment on event details as well as a 
                            place to add photos after it is over. This photo album feature was further developed after the initial lo-fi 
                            prototype was reviewed in a usability study. 
                            </p>
                            <h3>
                            Diversity in Design
                            </h3>
                            <p>
                            As a Latina designer, I cannot help but bring my perspective into my designs which eventually makes them better 
                            for all users. Many of the most popular apps today were designed and launched by men. Even in my first computer 
                            science internship, I was the only woman on my team. Diversity in the tech field is a systemic issue but we can be 
                            proactive. I know that by designing for myself and a diverse group of people I am being inclusive and equitable in my designs. 
                            </p>
                        </Col>
                    </Row>
                    </Col>
                    <Col xs={2}>
                    <iframe 
                            title="CalChat Figma Mockup"
                            className="figmaIFrame"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0hG1n4Yr2WnkmDq6vKJnBp%2FCalChat-Wireframes%3Fpage-id%3D89%253A393%26node-id%3D129%253A23%26viewport%3D455%252C542%252C0.29%26scaling%3Dscale-down%26starting-point-node-id%3D129%253A23" 
                            allowfullscreen>
                        </iframe>  
                    </Col>
                </Row>
               
                {/* <Row >
                    <h2>
                        <img alt ="figma logo" height="30px" src="data:image/png;base64,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"></img> Digital Wireframes & Mockup
                    </h2>
                    <Col xs={12} md ={7} style={{paddingTop:"0.5rem"}}>
                        <Row>
                       
                        </Row>
                    </Col>
                    <Col xs={12} md={4} style={{paddingTop:"0.5rem"}}>
                        
                    </Col> 
                    <p><a href="https://www.figma.com/community/file/1184623446302040281">Full Figma Project File</a></p>     
                </Row> */}
                <Col>
                    
                    
                    {/* <Row style={{marginBottom:'1rem'}}>
                   
                        <h2>
                            Pitch Deck
                        </h2>
                        <div className='canva-div'>
                            <iframe 
                                title='UX Presentation'
                                loading="lazy" 
                                className='canva-iframe'
                                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFRNjSNOEE&#x2F;view?embed" 
                                allowFullScreen="allowFullScreen" 
                                allow="fullscreen">
                            </iframe>
                        </div>
                    </Row> */}
                </Col>
            </Col>
        </Row>
    </Container>
    );
}

export default Project1;

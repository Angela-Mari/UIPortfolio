import './App.css';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import github from './assests/github-white.png';
import linkedin from './assests/linkedIn-white.png';
import spotify from './assests/spotify-white.png';
import { useEffect, useState } from 'react';
import LatinaDesignCorner from './pages/Latina-Design-Corner';
import menu from "./assests/icons8-menu-rounded-50.png"

function App() {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1199px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 1199px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const [key, setKey] = useState(window.location.pathname);

  return (
        <div className="contain-me">
        <Router>
          <div className='content-main'>
         

              { matches ? 
              <Row>
                 <Nav className="top-nav align-items-center" >
            <Col xs={4} ></Col>
            <Col xs={4} className="text-center">
              <h1 className='nav-title'>ANGELA GEORGE</h1>
              <h1 className='nav-title'>UI/UX PORTFOLIO</h1>
            </Col>
            <Col xs={4} >
              <Row className="justify-content-end">
                <Col xs={6} className="text-end">
                  <a href="https://www.angelageorge.com" className="top-nav-link">The Hub</a>
                </Col>
                <Col xs={1} className="text-end">
                  <a href="https://www.linkedin.com/in/angela-george-a5073b164/" target="_blank" >
                    <img src={linkedin} width="30px" height="30px" alt="linked-in logo"/>
                  </a>
                </Col>
                <Col xs={1}>
                  <a href="https://github.com/Angela-Mari" target="_blank" >
                  <img src={github} width="30px" height="30px" alt="github logo"/>
                  </a>
                </Col>
                <Col xs={1}>
                  <a href="https://open.spotify.com/playlist/7aliolkAQk668klmmlcBtI?si=e59ece244f5b4149https://github.com/Angela-Mari" target="_blank" >
                  <img src={spotify} width="30px" height="30px" alt="spotify logo"/>   
                  </a>             
                </Col>
                <Col xs={3}>
                </Col>
              </Row>
            </Col>
  
           </Nav>
                <Col >
                { key === "/ui-portfolio/" ||  key === "/ui-portfolio/home" || key === "/ui-portfolio/latina-design-corner" ? <svg className="avatar" xmlns="http://www.w3.org/2000/svg" width="198.43" height="429.09" viewBox="0 0 248.25 536.816">
                  <g id="Avatar" transform="translate(-59.646 558.288) rotate(-90)">
                    <path id="Path_9" data-name="Path 9" d="M311.994,157.451c-4.063,8.255-7.43,3.716-11.494,11.973-15.405-9.589-33.034-16.3-46.215-28.768-5.127-4.853,4.348-12.245,2.437-19.041,20.44-9.561,12.271-10.907,32.711-20.468,7.963,9.29,12.913,22.461,23.887,27.869,14.711,7.249,33.494,1.38,48.568,7.835,11.847,5.074,31.172,20.009,31.539,28.576s-21.14,22.239-30.327,20.718C312.252,177.729,325.238,168.432,311.994,157.451Z" transform="translate(155.489 27.902)" fill="#fac0a2"/>
                    <path id="Path_10" data-name="Path 10" d="M242.757,141.489s7.722,23.789,10.057,36.407-6.921,22.508-6.921,22.508-7.29,4.792-34.2-1.543-73.444-23.8-73.444-23.8-14.069-3.329-24.642-7.15-12.594-6.434-17.65-8.129a18.513,18.513,0,0,0-10.418.081L57.018,146.713l-16.109-5.186s-2.186-10.008,3.123-15.228,10.153-6.144,18.115-5.648,13.732,7.632,13.732,7.632l25.031,16.26,71.1,3.856s16.566-4.628,32.7-4.245S242.757,141.489,242.757,141.489Z" transform="translate(12.768 40.936)" fill="#d5977a"/>
                    <path id="Path_11" data-name="Path 11" d="M73.67,129.951s-8.345-5.847-15.952-6.013-9.628,4.1-12.193,6.878c-2.343,2.538-5.032,11.233-5.032,11.233S35.813,136,38.732,129.4,49.1,117.34,53.655,117.016c5.3-.376,9.535,1.106,16.159,4.169s12.4,10.929,12.4,10.929l-9.61,5.372L58.162,149.925l-9.551-4Z" transform="translate(10.959 38.533)" fill="#7e1b79"/>
                    <path id="Path_12" data-name="Path 12" d="M257.584,99.163s-12.461,2.206-27.71,5.3-33.285,7.067-33.285,7.067l-93.826,32.054-42.4,4.991s-.867-.211-2.319-.5c-5.092-1.03-17.373-3.089-24.638-.7-9.337,3.069-11.45,8.51-7.917,16.218s6.367,10.122,18.532,13.724,16.5-.622,26.466,1.174,7.923,5.52,15.875,4.9,17.119-10.615,17.119-10.615l48.145-7.635s27.8.555,34.973-.468,29.77-9,29.77-9l26.551,5.3s10.911-5.607,14.578-21.057S257.584,99.163,257.584,99.163Z" transform="translate(1.613 26.568)" fill="#e8af93"/>
                    <path id="Path_13" data-name="Path 13" d="M378.45,142.681c3.284-10.787,12.976-18.584,12-29.818-.732-8.45-8.648-20.585-16.621-23.473-13.063-4.73-28.079-2.269-41.671.6-4.221.892-7.647,5.68-8.285,9.948-1.052,7.047,2.435,14.042,3.653,21.063l-42.472,14.342s-28.367-35.012-47.38-46.2c-24.835-14.614-54.173-19.666-81.261-29.5-1.67,11.867-6.615,23.726-5.009,35.6,2.751,20.308,19.125,38.4,17.8,58.847-1.081,16.651-23.824,27-24.458,43.676-.576,15.151,20.753,25.054,21.27,40.206.4,11.673-17.337,17.933-18.894,29.51-1.847,13.712,6.321,26.94,9.481,40.409,31.122-13.436,65.621-20.836,93.368-40.309,19.449-13.651,42.981-51.718,42.981-51.718s27.217.413,40.321,2.806c.262,8.9-1.674,18.138.789,26.694,1.324,4.6,5.107,10.539,9.893,10.41,15-.407,30.017-5.121,43.427-11.853,5.167-2.593,8.4-8.916,9.325-14.624,1.028-6.368.744-14.48-3.9-18.955-9.449-9.1-25.786-14.6-39.358-25.63s-15.322-21.371-15.322-21.371,4.7-13.862,12.737-17.63C361.072,140.929,367.178,142.747,378.45,142.681Z" transform="translate(82.873 0)" fill="#232f6a"/>
                    <path id="Path_14" data-name="Path 14" d="M316.3,173.89c1.326,13.7,1.125,17.223,2.453,30.921-21.559-.78-47.619-9.749-68-16.816a183.741,183.741,0,0,1-34.491-16.309c-9.341-5.666-36.612-22.707-43.92-35.253-5.481-9.408,4.019-11.551,13.618-4.471,1.615.079-4.345-6.14-4.607-9.063-.075-1,3.638-1.612,7.63,1.362C229.714,160.985,250.5,162.6,250.5,162.6S293.484,172.86,316.3,173.89Z" transform="translate(99.9 41.645)" fill="#d5977a"/>
                    <path id="Path_15" data-name="Path 15" d="M311.543,84.752c2.354,9.884,1.525,15.407,3.88,25.29-17.606,4.234-37.37,10.418-53.036,15.473s-50.5,28.425-54.269,40.122c-1.171,3.639-7.439,17.9-10.964,20.88s-.009-11.133-3.136-8.974c-10.973,7.579-22.689,12.183-16.971,0,8.533-18.182,36.618-56.2,61.137-73.233C259.03,89.829,292.6,87.136,311.543,84.752Z" transform="translate(103.642 16.88)" fill="#fac0a2"/>
                    <path id="Path_16" data-name="Path 16" d="M303.86,151.818s-2.246-3.517-2.854-4.393c-1.8-2.6-.339-7.112-.051-8.01,1.046-3.276,4.535-4.685,5.546-6.872-1.318,5.356-3.148,7.5-3.112,14.27C303.412,151.632,303.86,151.818,303.86,151.818Z" transform="translate(187.342 49.01)" fill="#d84cd1"/>
                    <path id="Path_17" data-name="Path 17" d="M305.551,132.133c-1.259,5.421-1.024,6.382-1.243,11.9-.217,5.5-1.348,4.241-1.889,8.535C301.675,145.565,301.438,138.251,305.551,132.133Z" transform="translate(188.596 48.735)" fill="#e68be1"/>
                    <path id="Path_18" data-name="Path 18" d="M317.056,137.592s1.66,2.38,1.731,3.612-1.831,2.69-1.831,2.69" transform="translate(198.659 52.405)" fill="none" stroke="#d84cd1" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                    <path id="Path_19" data-name="Path 19" d="M322.085,144.771l-2.53-1.579-.387,5.423-.5,2.362,1.993.683Z" transform="translate(199.811 56.17)" fill="#331c06"/>
                    <path id="Path_20" data-name="Path 20" d="M258.963,109.081s12.273-1.092,20.355.494a24.468,24.468,0,0,1,13.033,7.658S296.544,128,302.753,134c4.975,4.807,12.881,5.822,19.784,6.272,10.162.661,18.344-4.115,27.919-.643,7.326,2.654,8.249,9.858,12.346,15.293,6.763,8.972,21.566,7.158,21.566,7.158S373.821,178.04,364.741,179.9c-4.837.993-11-3.75-12.188-3.158-8.188,4.067-14.355,1.482-22.445-2.548a89.71,89.71,0,0,1-12.289-7.02c-3.16-1.97-1.672-12-1.672-12a71.357,71.357,0,0,0-10.274-2.289c-3.54-.314-6.173,11.454-16.181,18.614-7.2,5.149-21.132,2-27.7,3.992,8.283,3.215,28.292,10.961,35.545,8,18.075-7.375,36.624,3.1,55.384,6.149,7.543,1.226,21.338,2.654,27.872-1.306,9.82-5.952,13.422-19.141,12.5-26.143-.446-3.418,8.054-16.12,4.419-25.581-2.175-5.666-4.979-10.871-11.5-15.3C374.3,113.228,354.743,105.2,340.5,103.061c-14.559-2.185-11.484-.574-27.945,1.629-3.99.534-19.54-3.268-32.812-3.746C268.084,100.523,258.963,109.081,258.963,109.081Z" transform="translate(159.67 27.755)" fill="#5f3924"/>
                    <path id="Path_21" data-name="Path 21" d="M318.77,153.368c-2.828-1.683-.217-4.419.047-6.947-1.16.3-3.175.975-4.369-.683s.278-3.961.278-3.961l2.354-.422a14.639,14.639,0,0,1,2.281,3.256C320.57,147.4,317.849,150.149,318.77,153.368Z" transform="translate(196.661 54.935)"/>
                    <path id="Path_22" data-name="Path 22" d="M316.1,144.654c8.253-3.923,3.891-8.3,4.526-16.856-.126,1.13-1.072,2.218-1.487,4.092a10.113,10.113,0,0,0-.173,3.405s-2.281-.651-3.075-.055a3.644,3.644,0,0,0-1.115,2.952c.081,2.808,2.455,2.376,4.211,2.362C318.235,143.216,318.018,142.48,316.1,144.654Z" transform="translate(197.194 44.798)"/>
                    <path id="Path_23" data-name="Path 23" d="M322.53,144.74l-2.238-.669a47.738,47.738,0,0,0,1.885-10.177c.059-2.124-2.927-7.314-2.927-7.314s4.354,2.65,5.173,7.191c.385,2.129-.3,5.587-.823,7.691A16.48,16.48,0,0,1,322.53,144.74Z" transform="translate(200.203 45.001)" fill="#331c06"/>
                    <path id="Path_24" data-name="Path 24" d="M320.927,134.667l-1.506,13.686" transform="translate(200.318 50.438)" fill="none" stroke="#d84cd1" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                    <path id="Path_25" data-name="Path 25" d="M327.609,128.132c1.058,1.372-.351,14.349-3.069,16.1-.784.505-2.668,1.472-7.742.079-4.417-1.214-6.073-6.629-5.776-9.518.223-2.2,1.056-6.542,6.921-8.151C321.387,125.7,327.3,127.727,327.609,128.132Z" transform="translate(194.648 44.876)" fill="none" stroke="#d84cd1" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                    <path id="Path_26" data-name="Path 26" d="M324.578,142.867a3.428,3.428,0,0,1,.624,2.966c-.328,2.159-.784,5.686-2.124,7.774-1.887,2.941-7.351-.178-10.353-2.015-3.175-1.942-2.2-6.483,1.52-8.845S323.242,141.1,324.578,142.867Z" transform="translate(194.532 54.859)" fill="none" stroke="#d84cd1" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                    <path id="Path_27" data-name="Path 27" d="M323.732,142.83s-6.641.055-8.9,3.185a4.865,4.865,0,0,1-5.518,1.206c-2.378-.827-2.445-4.713-2.735-7.969-.093-1.056,1.147,6.434,2.939,6.951a4.463,4.463,0,0,0,4.371-.88c.959-.823,1.608-2.275,4.14-2.767A15.98,15.98,0,0,1,323.732,142.83Z" transform="translate(191.692 52.631)" stroke="#000" stroke-linejoin="bevel" stroke-miterlimit="10" stroke-width="0.012"/>
                    <path id="Path_28" data-name="Path 28" d="M275.094,100.23s-16.473-5.747-30.2,4.433c-8.249,6.119-.484,22.892-.484,22.892Z" transform="translate(147.661 26.199)" fill="#232f6a"/>
                    <path id="Path_29" data-name="Path 29" d="M277.918,167.166s-11.162,2.984-19.374,1.32S243.9,162.594,242.36,157.46,245.026,133,245.026,133Z" transform="translate(148.279 49.316)" fill="#232f6a"/>
                    <path id="Path_30" data-name="Path 30" d="M302.159,132.374a8.116,8.116,0,0,1,2.729.253,8.412,8.412,0,0,1,2.986,1.642C306.491,131.573,305.4,131.376,302.159,132.374Z" transform="translate(188.712 48.525)"/>
                    <path id="Path_31" data-name="Path 31" d="M118.926,152.931c-5.122-3.065-11.57-4.588-15.366-9.193-4.443-5.392-5.556-14.14-6.083-17.367-5.043-1.249-6.764-.32-11.291,1.362,4.72,10.969,6.055,15.839,13.273,25.746-2.108,1.608-12.534,5.954-12.534,5.954s-8.035-.586-14.131-.937c-6.769-16.242-6.6-19.019-10.612-28.034-4.593-1.226-6.437-2.781-10.651-1.7,2.623,2.487,4.171,3.837,5.822,7.051,2.752,5.36,4.616,15.247,6.251,22.96l-13.35-.742c-4.078-15.35-4.076-27.217-7.219-29.822-1.636-1.358-7.421,1.156-7.421,1.156s3.185,12.666,6.077,27.2c-4.7-1.411-10.014-4.219-11.36-8.334C28.1,141.409,27.745,137.9,28.7,132.667c-2.4,3.039-7.666,5.275-7.2,9.12.958,7.813,3.761,17.6,10.881,20.961,15.428,7.278,52.807,5.751,52.807,5.751S106.927,158.873,118.926,152.931Z" transform="translate(0 44.473)" fill="#e68be1"/>
                  </g>
                </svg>
                :
                <></>
}
                  <Row style={{marginTop:"3.75%"}}>
                  </Row>
                    <Nav className="nav-two" variant="tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                        <Nav.Item>
                          <LinkContainer to="/ui-portfolio/">
                            <Nav.Link eventKey="/ui-portfolio/">Home</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>
                      
                        <Nav.Item>
                          <LinkContainer to="/ui-portfolio/cal-chat">
                            <Nav.Link eventKey="/ui-portfolio/cal-chat">CalChat Mobile App</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>

                        <Nav.Item>
                          <LinkContainer to="/ui-portfolio/coffee-redesign">
                            <Nav.Link eventKey="/ui-portfolio/coffee-redesign">BlueNose Coffee Redesign</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>

                        <Nav.Item>
                          <LinkContainer to="/ui-portfolio/snapchat-feature">
                            <Nav.Link eventKey="/ui-portfolio/snapchat-feature">Snapchat Feature Implementation</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                          <LinkContainer to="/ui-portfolio/latina-design-corner">
                            <Nav.Link eventKey="/ui-portfolio/latina-design-corner">Latina Design Corner</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>
                    </Nav> 
                  <Routes>
                    <Route element={<Home />} path="/ui-portfolio/" />
                    <Route element={<Project1 />} path="/ui-portfolio/cal-chat"/>
                    <Route element={<Project2 />} path="/ui-portfolio/coffee-redesign"/>
                    <Route element={<Project3 />} path="/ui-portfolio/snapchat-feature"/>
                    <Route element={<LatinaDesignCorner />} path="/ui-portfolio/latina-design-corner"/>
                  </Routes>
                </Col>
              </Row>
                : 
                <Row>
                <Col>
                  
                  {/* <Row style={{marginTop:"4%"}}>
                  
                  </Row> */}
                  <Navbar expand="xs" className='top-nav-sm'>
                    <Container>
                     
                      <Navbar.Brand>
                        <Row >
                          <Row className="justify-content-center" >
                            
                          <Col >
                            <h1 className='nav-title-sm'>ANGELA GEORGE</h1>
                            <h1 className='nav-title-sm'>UI/UX PORTFOLIO</h1>
                          </Col>
                          </Row>
                          
                          
                        </Row>
                        </Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <img src={menu} width="30px" height="30px" alt="hamburger icon"/>
                      </Navbar.Toggle>
                      <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft:"5%", color:"white"}}>
                        <Nav className="me-auto" onSelect={(k) => setKey(k)}>
                        <Nav.Item >
                          <LinkContainer to="/ui-portfolio/">
                            <Nav.Link eventKey="/ui-portfolio/">Home</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>
                      
                        <Nav.Item>
                          <LinkContainer to="/ui-portfolio/cal-chat">
                            <Nav.Link eventKey="/ui-portfolio/cal-chat">CalChat Mobile App</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>

                        <Nav.Item>
                          <LinkContainer to="/ui-portfolio/coffee-redesign">
                            <Nav.Link eventKey="/ui-portfolio/coffee-redesign">BlueNose Coffee Redesign</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>

                        <Nav.Item>
                          <LinkContainer to="/ui-portfolio/snapchat-feature">
                            <Nav.Link eventKey="/ui-portfolio/snapchat-feature">Snapchat Feature Implementation</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                          <LinkContainer to="/ui-portfolio/latina-design-corner">
                            <Nav.Link eventKey="/ui-portfolio/latina-design-corner">Latina Design Corner</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>
                        
                            <a href="https://angelageorge.com" style={{color:"white", textDecoration:'none'}}>The Hub</a>
                          
                            <a href="https://angelageorge.com/contact-me" style={{color:"white", textDecoration:'none', paddingTop:"1%", paddingBottom:"1%"}}>Contact Me</a>
                         
                        </Nav>
                        <Row className="justify-content-right" style={{marginTop:"1%", marginBottom:"1%"}}>
                
                <Col xs={1}>
                  <a href="https://www.linkedin.com/in/angela-george-a5073b164/" target="_blank">
                    <img src={linkedin} width="30px" height="30px" alt="linked-in logo"/>
                  </a>
                </Col>
                <Col xs={1}>
                  <a href="https://github.com/Angela-Mari" target="_blank">
                  <img src={github} width="30px" height="30px" alt="github logo" />
                  </a>
                </Col>
                <Col xs={1}>
                  <a href="https://open.spotify.com/playlist/7aliolkAQk668klmmlcBtI?si=e59ece244f5b4149https://github.com/Angela-Mari" target="_blank">
                  <img src={spotify} width="30px" height="30px" alt="spotify logo"/>   
                  </a>             
                </Col>
                <Col xs={3}>
                </Col>
              </Row>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                  <div >
                  <Routes basename="https://angelageorge.com">
                    <Route
                      path="/redirect"
                      element={ <Navigate to="/ui-portfolio" /> }
                    />
                    <Route element={<Home />} path="/ui-portfolio/" />
                    <Route element={<Project1 />} path="/ui-portfolio/cal-chat"/>
                    <Route element={<Project2 />} path="/ui-portfolio/coffee-redesign"/>
                    <Route element={<Project3 />} path="/ui-portfolio/snapchat-feature"/>
                    <Route element={<LatinaDesignCorner />} path="/ui-portfolio/latina-design-corner"/>
                  </Routes>
                  </div>
                </Col>

                </Row>
                }
                
            
          </div>
          </Router>
          <footer className="footer">
            <Col className="text-center" style={{paddingTop:"15px", color:"white"}}>Ⓒ Ángela George 2022</Col>
          </footer>
          </div>

  );


}

export default App;

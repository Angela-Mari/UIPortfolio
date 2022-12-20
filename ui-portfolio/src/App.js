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
import avatar from './assests/avatar.png';
import avatarsm from './assests/avatar-sm.png';
import { useEffect, useState } from 'react';

function App() {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1030px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 1030px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const [key, setKey] = useState("/ui-portfolio/");

  //put in local storage
  useEffect(() => {
    console.log("put in local storage")
    const getActiveTab = JSON.parse(localStorage.getItem("activeTab"));
    if (!getActiveTab){
      console.log("storage is undefined")
      localStorage.setItem("activeTab", JSON.stringify(key));
    }
    console.log(key)
    }, [key]);

  //retreive from local storage
  useEffect(() => {
    console.log("retrevie from local storage")
  const getActiveTab = JSON.parse(localStorage.getItem("activeTab"));
  if (getActiveTab) {
  setKey(getActiveTab);
  console.log(key)
  console.log("in use effect 1")
  }
  }, [key]);

  

  return (
        <div className="contain-me">
        <Router>
          <div className='content-main'>
          
              { matches ? 
              <Row>
                <Col >
                  <img className='avatar' src= {avatar} alt="big tech style avatar"/>
                  <Row style={{marginTop:"4%"}}>
                  <h1 style={ matches ? {marginLeft:"20%", marginBottom:"2%"}: {}}>Ángela George</h1>
                  </Row>
                    <Nav variant="tabs" activeKey={key} onSelect={(k) => setKey(k)}>
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
                    </Nav> 
                  <Container style={{marginLeft:"20%"}}>
                  <Routes>
                    <Route element={<Home />} path="/ui-portfolio/" />
                    <Route element={<Project1 />} path="/ui-portfolio/cal-chat"/>
                    <Route element={<Project2 />} path="/ui-portfolio/coffee-redesign"/>
                    <Route element={<Project3 />} path="/ui-portfolio/snapchat-feature"/>
                  </Routes>
                  </Container>
                </Col>
              </Row>
                : 
                <Row>
                <Col>
                  
                  {/* <Row style={{marginTop:"4%"}}>
                  
                  </Row> */}
                  <Navbar bg="light" expand="xs">
                    <Container>
                      <Navbar.Brand>
                        <Row >
                          <Row className="justify-content-center" >
                            <Col xs = {8} md = {4} className="text-center" style={{paddingLeft:"4rem"}}>
                            <img style={{marginRight:"20px"}}src= {avatarsm} width="100px" alt="big tech style avatar" />
                            </Col>
                            <Col style={{paddingLeft:"3rem"}} className="text-center">
                              <h2 style={{fontSize:"2em"}}>Ángela George</h2>
                            </Col>
                          </Row>
                          
                          
                        </Row>
                        </Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft:"5%"}}>
                        <Nav className="me-auto" onSelect={(k) => setKey(k)}>
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
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                  <Container >
                  <Routes basename="https://angelageorge.com">
                    <Route
                      path="/redirect"
                      element={ <Navigate to="/ui-portfolio" /> }
                    />
                    <Route element={<Home />} path="/ui-portfolio/" />
                    <Route element={<Project1 />} path="/ui-portfolio/cal-chat"/>
                    <Route element={<Project2 />} path="/ui-portfolio/coffee-redesign"/>
                    <Route element={<Project3 />} path="/ui-portfolio/snapchat-feature"/>
                  </Routes>
                  </Container>
                </Col>

                </Row>
                }
                
            
          </div>
          </Router>
          <footer className="footer">
            <Col className="text-center" style={{paddingTop:"15px"}}>Ⓒ Ángela George 2022</Col>
          </footer>
          </div>

  );


}

export default App;

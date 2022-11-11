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

  const [key, setKey] = useState("link-0");

  useEffect(() => {
    localStorage.setItem("activeTab", JSON.stringify(key));
    }, [key]);

  useEffect(() => {
  const getActiveTab = JSON.parse(localStorage.getItem("activeTab"));
  if (getActiveTab) {
  setKey(getActiveTab);
  }
  }, []);

  

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
                          <LinkContainer to="/">
                            <Nav.Link eventKey="home">Home</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>
                      
                        <Nav.Item>
                          <LinkContainer to="/cal-chat">
                            <Nav.Link eventKey="cal-chat">CalChat Mobile App</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>

                        <Nav.Item>
                          <LinkContainer to="/coffee-redesign">
                            <Nav.Link eventKey="coffee-redesign">BlueNose Coffee Redesign</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>

                        <Nav.Item>
                          <LinkContainer to="/snapchat-feature">
                            <Nav.Link eventKey="snapchat-feature">Snapchat Feature Implementation</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>
                    </Nav> 
                  <Container style={{marginLeft:"20%"}}>
                  <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Project1 />} path="/cal-chat"/>
                    <Route element={<Project2 />} path="/coffee-redesign"/>
                    <Route element={<Project3 />} path="/snapchat-feature"/>
                  </Routes>
                  </Container>
                </Col>
              </Row>
                : 
                <Row>
                <Col>
                  
                  <Row style={{marginTop:"4%"}}>
                  
                  </Row>
                  <Navbar bg="light" expand="xs">
                    <Container>
                      <Navbar.Brand><h2 style={{fontSize:"2em"}}><img style={{marginRight:"20px"}}src= {avatarsm} width="100px" alt="big tech style avatar" />Ángela George</h2></Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft:"5%"}}>
                        <Nav className="me-auto">
                        <Nav.Item>
                          <LinkContainer to="/">
                            <Nav.Link eventKey="link-0">Home</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>
                      
                        <Nav.Item>
                          <LinkContainer to="/cal-chat">
                            <Nav.Link eventKey="link-1">CalChat Mobile App</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>

                        <Nav.Item>
                          <LinkContainer to="/coffee-redesign">
                            <Nav.Link eventKey="link-2">BlueNose Coffee Redesign</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>

                        <Nav.Item>
                          <LinkContainer to="/snapchat-feature">
                            <Nav.Link eventKey="link-3">Snapchat Feature Implementation</Nav.Link>
                          </LinkContainer>
                        </Nav.Item>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                  <Container >
                  <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Project1 />} path="/cal-chat"/>
                    <Route element={<Project2 />} path="/coffee-redesign"/>
                    <Route element={<Project3 />} path="/snapchat-feature"/>
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

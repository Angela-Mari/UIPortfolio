import './App.css';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import avatar from './assests/avatar.png';


function App() {
  return (

        <Router>
          <Row>
            <Col>
              <img className='avatar' src= {avatar} alt="big tech style avatar"/>
              <Row style={{marginTop:"4%"}}>
              <h1>Angela George</h1>
              </Row>
                <Nav variant="tabs" defaultActiveKey="link-0" style={{marginTop:"2%"}}>
                  <Nav.Item>
                    <LinkContainer to="/">
                      <Nav.Link eventKey="link-0">Home</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                
                  <Nav.Item>
                    <LinkContainer to="/cal-chat">
                      <Nav.Link eventKey="link-1">CalendarChat</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>

                  <Nav.Item>
                    <LinkContainer to="/coffee-redesign">
                      <Nav.Link eventKey="link-2">Blue Nose Coffee Redesign</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>

                  <Nav.Item>
                    <LinkContainer to="/snapchat-feature">
                      <Nav.Link eventKey="link-3">Snapchat Feature Implementation</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                </Nav>
                <Col style={{marginLeft:"20%"}}>
                  <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Project1 />} path="/cal-chat"/>
                    <Route element={<Project2 />} path="/coffee-redesign"/>
                    <Route element={<Project3 />} path="/snapchat-feature"/>
                  </Routes>
                </Col>
            </Col>
          </Row>
         
          </Router>

  );


}

export default App;

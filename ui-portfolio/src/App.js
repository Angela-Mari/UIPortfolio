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
import About from './pages/About';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';


function App() {
  return (
       
        <Router>
           <Container>
          <Row>
          <h1>Angela George</h1>
            <Nav variant="tabs" defaultActiveKey="link-0">
              
            
              <Nav.Item>
                <LinkContainer to="/">
                  <Nav.Link eventKey="link-0">About</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            

              
              <Nav.Item>
                <LinkContainer to="/cal-chat">
                  <Nav.Link eventKey="link-1">Calendar Chat</Nav.Link>
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
          </Row>


            <Routes>
            <Route element={<About />} path="/" />
              <Route element={<Project1 />} path="/cal-chat"/>
              <Route element={<Project2 />} path="/coffee-redesign"/>
              <Route element={<Project3 />} path="/snapchat-feature"/>
            </Routes>
            </Container>
          </Router>
  );


}

export default App;

import React from 'react';
import {Badge,Container,Col,Dropdown,Image,Row,Navbar,Nav} from 'react-bootstrap';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faBell,faUserFriends } from '@fortawesome/free-solid-svg-icons'
import profilePics from './image1.jpg';
import './NavigationBar.css';

const NavigationBar = ()=>{
    return(
        <Navbar  expand="md" className = 'header'variant="dark">
            <Container fluid>
                <Row style={{width:100+'%'}}>
                    <Col xs='2' >
                    <Navbar.Brand className='logo' href="#home"><span className='bigB'>B</span>jornson
                
                    </Navbar.Brand>
                    </Col>
                    <Col  >
                        <Router>
                    <Nav justify className='flex-direction-row justify-content-around align-self-center '>
                    <Link to="/"><FontAwesomeIcon className='links' icon={faHome} size="2x"/></Link>
                    <Link to="/notifications"><FontAwesomeIcon className='links' icon={faBell} size="2x"/><Badge variant="danger">9</Badge></Link>
                    <Link to="/friends"><FontAwesomeIcon className='links' icon={faUserFriends} size="2x"/><Badge variant="danger">9</Badge></Link>
                    </Nav>
                    </Router>
                    </Col>
                    <Col xs='2' >
                        <Dropdown>
                        <Dropdown.Toggle as='a'  >
                        <Image className='img' src={profilePics}  roundedCircle  />
                        </Dropdown.Toggle>
                    
                    <Dropdown.Menu>
                        <Router>
                            <Dropdown.Item><Link to='/profile'>profile</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/settings'>settings</Link></Dropdown.Item>
                            <Dropdown.Item ><Link to='/logout'>logout</Link></Dropdown.Item>
                            </Router>
                    </Dropdown.Menu>
                    </Dropdown>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    </Navbar.Collapse> */}
      
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;


  
    
   
  
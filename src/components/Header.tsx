
import './Header.scss'
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap'
import { Navigate } from 'react-router-dom';
function Header() {
  const pageview=()=>{
    <Navigate to={"/specialist"}/>
}
  return (
    <>
       <Navbar expand="lg" className="header-navbar">
      <Container fluid className=' px-3'>
        <Navbar.Brand href="#">WFC Health</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/landingpage">Home</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action3">About</Nav.Link>
            <Nav.Link href="#action4">Reviews</Nav.Link>
          </Nav>
          <Form className="">
            <Button className='header-button py-2 px-4' onClick={()=>pageview()}>Get Started</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header

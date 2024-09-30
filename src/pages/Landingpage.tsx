import { Container, Row, Col, Button, Form, Image } from 'react-bootstrap'
import './Landingpage.scss'
import mainImage from '../assets/Shoulder-treatment-wall-frame-min.webp'
import { IoStarSharp } from "react-icons/io5";
function Landingpage() {
  return (
    <>
        <Container fluid className='main'>
            <Row className='px-3 main-content'>
                <Col lg={5} className='d-flex justify-content-start'>
                <h1>Best Physio Therapy Care In City</h1>
                </Col>
                <Col lg={2}></Col>
                <Col lg={5} className='justify-content-end'>
                    <Form className="main-search-bar d-flex">
                        <Form.Control
                            type="search"
                            placeholder="David John Neuro Specialist"
                            className="me-2 py-3"
                            aria-label="Search"
                        />
                        <Button className="px-4 py-2 main-search-button">Appointment</Button>
                    </Form>
                    <div className='main-star-icons'>
                        <div >
                        <IoStarSharp className='star-icon' /></div>
                        <div >
                        <IoStarSharp className='star-icon' /></div>
                        <div >
                        <IoStarSharp className='star-icon' /></div>
                        <div >
                        <IoStarSharp className='star-icon' /></div>
                        <div >
                        <IoStarSharp className='star-icon' /></div>
                        <span>Trustpilot</span>
                    </div>   
                    <p>Excellent based on 456 reviews</p>
                </Col>
            </Row>
            <Row className='px-2 py-5'>
                <Col lg={12} ><Image src={mainImage} className='main-image img-fluid w-100'></Image></Col>
            </Row>
        </Container>
    </>
  )
}

export default Landingpage

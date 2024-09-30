import React from 'react'
import { Container, Row, Col, Button, Form, Image } from 'react-bootstrap'
import './Landingpage.scss'
import mainImage from '../assets/Shoulder-treatment-wall-frame-min.webp'
import { IoStarSharp } from "react-icons/io5";

function Landingpage() {

  return (
    <>
    {/* Main Section */}
        <Container fluid className='main'>
            <Row className='px-3 main-content'>
                <Col lg={7} className='d-flex justify-content-start'>
                <h1>Best Physio Therapy Care In City</h1>
                </Col>
                
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
            <Row className='position-relative'>
                <div className='py-5 main-img-container'>
                <Col lg={12} ><Image src={mainImage} className='main-image img-fluid w-100'></Image></Col>
                </div>
            </Row>
        </Container>

    {/* Services Section */}
    <Container fluid  className='service-section-container'>
        <Row className='justify-content-end'>
            <Col xl={6} className=''>
            <h1>Services We provided For Your Health</h1>
            </Col>  
            <Col xl={6}></Col>
        </Row>
    </Container>
    </>
  )
}

export default Landingpage

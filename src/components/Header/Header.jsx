import React from 'react'
import './Header.css'
import imgHeader from '../../assets/NombreRick_Morty.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';

export default function Header() {
  return (
    <Container fluid>
        <Row>
            <Col sm={12} md={12} lg={12} xl={12} className='d-flex justify-content-center mt-5'>
                <Image fluid  className="header-img" src={imgHeader} alt="Rick and Morty" />
            </Col>
        </Row>
    </Container>
  )
}

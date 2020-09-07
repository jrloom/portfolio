import React from 'react'
import { Link } from 'gatsby'
import { Col, Container, Row } from 'react-bootstrap'

import NavBar from './navbar'
import { TechIcons } from './icons'

const Header = ({ author, title, links }) => {
  return (
    <Container as='header' className='mb-5'>
      <Row
        noGutters
        className='d-flex flex-wrap align-items-center justify-content-center mb-5 p-3'
      >
        <Col
          xs={6}
          lg={4}
          className='d-flex flex-column align-items-center header-btm-margin'
        >
          <Row as='h1' noGutters className='text-nowrap'>
            {author}
          </Row>
          <Row noGutters className='text-nowrap'>
            {title}
          </Row>
        </Col>
        <Col xs={12} lg={8} as='nav' className='d-flex justify-content-around'>
          <NavBar links={links} />
        </Col>
      </Row>
      <Row className='w-50 mx-auto pt-2 pb-2 border-top border-bottom '>
        <Col className='d-flex justify-content-around'>
          <TechIcons />
        </Col>
      </Row>
    </Container>
  )
}
export default Header

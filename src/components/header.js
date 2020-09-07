import React from 'react'
import { Link } from 'gatsby'
import { Col, Container, Row } from 'react-bootstrap'

import NavBar from './navbar'

const Header = ({ author, title, links }, ...props) => {
  console.log(`header props >> `, props)
  return (
    <Container as='header' fluid className='mb-5'>
      <Row className='d-flex flex-wrap align-items-center justify-content-center mb-5 p-4  bg-black'>
        <Col xs={6} lg={4} className='header-btm-margin'>
          <Link
            to={links.home}
            className='d-flex flex-column align-items-center'
          >
            <Row as='h1' noGutters className='text-light text-nowrap'>
              {author}
            </Row>
            <Row noGutters className='text-light text-nowrap'>
              {title}
            </Row>
          </Link>
        </Col>
        <Col xs={12} lg={8} as='nav' className='d-flex justify-content-around '>
          <NavBar links={links} />
        </Col>
      </Row>
    </Container>
  )
}
export default Header

// text-icon'

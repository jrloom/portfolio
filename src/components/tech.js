import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Icons } from './icons'

const icons = {
  HTML5: 'SiHtml5',
  CSS3: 'SiCss3',
  JavaScript: 'SiJavascript',
  React: 'SiReact',
  Redux: 'SiRedux',
  Node: 'SiNodeDotJs',
  GraphQL: 'SiGraphql',
  RESTful: 'AiFillApi',
  Git: 'SiGit',
}

const Tech = () => (
  <Container>
    <Row className='d-none d-sm-block w-50 mx-auto pt-3 pb-3 bg-primary border border-black rounded'>
      <Col as='h3' className='d-flex justify-content-around fade-in text-icon'>
        <Icons icons={icons} />
      </Col>
    </Row>
  </Container>
)

export default Tech

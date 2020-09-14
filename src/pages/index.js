import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/about'
import Photo from '../components/photo'
import Tech from '../components/tech'
import Projects from '../components/projects'
import Message from '../components/message'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Row className='d-flex flex-wrap mb-5 p-4 bg-primary border border-black rounded'>
      <Col
        md={7}
        className='d-flex flex-column justify-content-around mr-4 p-4 text-light margin-fix'
      >
        <About />
      </Col>
      <Col className='d-none d-sm-flex flex-column justify-content-around p-4 ml-4 margin-fix'>
        <Photo />
      </Col>
    </Row>
    <Row className='d-none d-sm-block w-50 mx-auto mb-5 pt-3 pb-3 bg-primary border border-black rounded'>
      <Col as='h3' className='d-flex justify-content-around fade-in text-icon'>
        <Tech />
      </Col>
    </Row>
    <Row className='mb-5 p-3 bg-primary border border-black rounded'>
      <Col>
        <Projects />
      </Col>
    </Row>
    <Row className='d-flex flex-wrap mb-5 p-4 bg-primary border border-black rounded'>
      <Col className='d-flex flex-column justify-content-around mr-4 p-4 text-light margin-fix'>
        <Message />
      </Col>
      <Col md={7} className='ml-4 p-4 margin-fix'>
        <Contact />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Col, Row } from 'react-bootstrap'

import Header from './header'

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { author, title, links },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          title
          links {
            home
            about
            projects
            contact
          }
        }
      }
    }
  `)

  const boxes = Object.keys(children).length

  return (
    <Container fluid>
      <Header author={author} title={title} links={links} />
      <Container as='main'>
        <Row className='d-flex flex-wrap mb-5'>
          {boxes >= 2 ? (
            <Col className='d-flex flex-column p-4 mr-4 bg-primary border border-black rounded text-light'>
              {children[1]}
            </Col>
          ) : null}
          {boxes > 2 ? (
            <Col className='d-flex flex-column p-4 mr-4 bg-primary border border-black rounded text-light'>
              {children[2]}
            </Col>
          ) : null}
        </Row>
        {boxes === 4 ? (
          <Row>
            <Col className='mt-5'>{children[3]}</Col>
          </Row>
        ) : null}
      </Container>
    </Container>
  )
}

export default Layout

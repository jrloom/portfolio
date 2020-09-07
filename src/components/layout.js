import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Col, Container, Row, Button } from 'react-bootstrap'

import Header from './header'

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { author, title },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)

  return (
    <Container fluid>
      <Row noGutters>
        <Header author={author} title={title} />
      </Row>
    </Container>
  )
}

export default Layout

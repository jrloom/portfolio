import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Row } from 'react-bootstrap'

import Header from './header'

const Layout = ({ children }) => {
  console.log(`children >>> `, children[0].props.title)
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

  return (
    <Container fluid>
      <Row>
        <Header author={author} title={title} links={links} />
      </Row>
      <Row as='main' noGutters>
        {children}
      </Row>
    </Container>
  )
}

export default Layout

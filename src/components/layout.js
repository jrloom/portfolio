import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from 'react-bootstrap'

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

  return (
    <Container fluid>
      <Header author={author} title={title} links={links} />
      <Container as='main'>{children}</Container>
    </Container>
  )
}

export default Layout

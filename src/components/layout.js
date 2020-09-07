import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Row } from 'react-bootstrap'

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
    <>
      <Row noGutters>
        <Header author={author} title={title} links={links} />
      </Row>
      <Row as='main'>{children}</Row>
    </>
  )
}

export default Layout

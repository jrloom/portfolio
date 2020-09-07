import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { TechIcons } from '../components/icons'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />

    <TechIcons />
  </Layout>
)

export default IndexPage

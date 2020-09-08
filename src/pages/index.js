import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Col, Container, Row } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { TechIcons } from '../components/icons'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title='Home' />
      <Container>
        <Row className='mb-5'>
          <Col className='d-flex flex-column align-items-center p-4 mr-4 bg-primary border border-black rounded text-light'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              ducimus ea laudantium rerum quibusdam alias asperiores ex quam,
              autem nihil officiis explicabo iure dolore non doloremque
              molestias quisquam sunt hic!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              obcaecati magni. Aut, optio enim. Dolorem, in, rem aspernatur
              delectus nemo laborum ipsam ducimus nihil, aperiam non tempore
              voluptas nostrum repellat.
            </p>
          </Col>
          <Col className='d-none d-sm-block p-4 ml-4 bg-primary border border-black rounded text-light'>
            <Image fluid={data.photo.childImageSharp.fluid} />
          </Col>
        </Row>
        <Row>
          <Col className='mt-5'>
            <TechIcons />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    photo: file(relativePath: { eq: "placeholder.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

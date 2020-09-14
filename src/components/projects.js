import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { RiExternalLinkLine } from 'react-icons/ri'
import { Icons } from './icons'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allProjectsJson {
        nodes {
          id
          image {
            url {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          name
          tech
          text {
            desc
            role
          }
          urls {
            backend
            deployed
            frontend
          }
        }
      }
    }
  `)

  return (
    <Carousel interval={50000}>
      {data.projects.nodes.map(proj => {
        console.log(`tech >> `, proj.tech)
        return (
          <Carousel.Item key={proj.id}>
            <Image
              fluid={proj.image.url.childImageSharp.fluid}
              alt={`Screenshot of ${proj.name}`}
            />
            <Carousel.Caption>
              <Row className='d-flex align-items-center'>
                <Col as='h4'>
                  <a
                    href={proj.urls.deployed}
                    className='p-2 bg-primary border border-black rounded text-link'
                  >
                    {proj.name}{' '}
                    <RiExternalLinkLine className='external-link-icon' />
                  </a>
                </Col>
                {/* <Col
                  as='h4'
                  className='p-2 bg-primary border border-black rounded text-icon'
                  >
                  {proj.tech.map(icon => (
                    <Icons key={icon} icons={{ icon }} />
                    ))}
                  </Col> */}
                <Col as='h4'>
                  <a
                    href={proj.urls.frontend}
                    className='p-2 bg-primary border border-black rounded text-link'
                  >
                    Repository{' '}
                    <RiExternalLinkLine className='external-link-icon' />
                  </a>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
export default Projects

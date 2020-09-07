import React from 'react'
import { Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import {
  SiCss3,
  SiHtml5,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiNodeDotJs,
  SiReact,
  SiRedux,
} from 'react-icons/si'
import { AiFillApi } from 'react-icons/ai'

export const TechIcons = () => {
  const techTips = {
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

  return (
    <>
      <Container>
        <Row className='d-none d-sm-block w-50 mx-auto pt-3 pb-3 bg-primary border border-black rounded'>
          <Col
            as='h3'
            className='d-flex justify-content-around fade-in text-icon'
          >
            {Object.entries(techTips).map(tip => {
              let icon

              switch (tip[1]) {
                case 'SiHtml5':
                  icon = <SiHtml5 />
                  break
                case 'SiCss3':
                  icon = <SiCss3 />
                  break
                case 'SiJavascript':
                  icon = <SiJavascript />
                  break
                case 'SiReact':
                  icon = <SiReact />
                  break
                case 'SiRedux':
                  icon = <SiRedux />
                  break
                case 'SiNodeDotJs':
                  icon = <SiNodeDotJs />
                  break
                case 'AiFillApi':
                  icon = <AiFillApi />
                  break
                case 'SiGraphql':
                  icon = <SiGraphql />
                  break
                case 'SiGit':
                  icon = <SiGit />
                  break
                default:
                  return null
              }

              return (
                <OverlayTrigger
                  key={tip[0]}
                  placement='top'
                  overlay={<Tooltip>{tip[0]}</Tooltip>}
                >
                  {icon}
                </OverlayTrigger>
              )
            })}
          </Col>
        </Row>
      </Container>
    </>
  )
}

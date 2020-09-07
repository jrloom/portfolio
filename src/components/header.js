import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Header = ({ author, title }) => (
  <header>
    <Container fluid>
      <Row noGutters>{author}</Row>
      <Row noGutters>{title}</Row>
    </Container>
  </header>
)

export default Header

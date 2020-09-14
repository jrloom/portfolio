import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Icons } from './icons'

const icons = {
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

const Tech = () => <Icons icons={icons} />

export default Tech

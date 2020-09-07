import React from 'react'
import { Link } from 'gatsby'

const NavBar = ({ links: { home, about, projects, contact } }) => {
  return (
    <>
      <Link to={home}>Home</Link>
      <Link to={about}>About</Link>
      <Link to={projects}>Projects</Link>
      <Link to={contact}>Contact</Link>
    </>
  )
}

export default NavBar

import React from 'react'
import { Link } from 'gatsby'

const NavBar = ({ links: { home, about, projects, contact } }) => {
  return (
    <>
      <Link className='text-link' to={projects}>
        Projects
      </Link>
      <Link className='text-link' to={contact}>
        Contact
      </Link>
    </>
  )
}

export default NavBar

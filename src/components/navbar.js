import React from 'react'
import { Link } from 'gatsby'
import { Icons } from './icons'

const NavBar = ({ links: { home, about, projects, contact } }) => (
  <>
    <Link to={projects} className='text-link icon'>
      <Icons icons={{ Projects: 'FaCogs' }} />
    </Link>
    <Link to={contact} className='text-link icon'>
      <Icons icons={{ Contact: 'IoMdText' }} />
    </Link>
    <a href='https://github.com/jrloom' className='text-link icon'>
      <Icons icons={{ GitHub: 'SiGithub' }} />
    </a>
  </>
)

export default NavBar

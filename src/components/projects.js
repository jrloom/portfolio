import React from 'react'
import { Carousel } from 'react-bootstrap'
import img01 from '../images/placeholder.jpg'
import img02 from '../images/placeholder02.jpg'
import img03 from '../images/placeholder03.jpg'

const Projects = () => (
  <Carousel interval='10000'>
    <Carousel.Item>
      <img className='d-block w-100' src={img01} alt='First slide' />
      <Carousel.Caption>
        <h3>First slide</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className='d-block w-100' src={img02} alt='First slide' />
      <Carousel.Caption>
        <h3>First slide</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className='d-block w-100' src={img03} alt='First slide' />
      <Carousel.Caption>
        <h3>First slide</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default Projects

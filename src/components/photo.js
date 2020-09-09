import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const Photo = () => {
  const photo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "placeholder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Image fluid={photo.file.childImageSharp.fluid} />
}

export default Photo

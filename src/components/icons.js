import React from 'react'
import { Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { AiFillApi } from 'react-icons/ai'
import { IoMdText } from 'react-icons/io'
import { FaCogs } from 'react-icons/fa'
import {
  SiCss3,
  SiHtml5,
  SiGit,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiNodeDotJs,
  SiReact,
  SiRedux,
} from 'react-icons/si'

export const Icons = ({ icons }) => (
  <>
    {Object.entries(icons).map(tip => {
      let icon

      switch (tip[1]) {
        case 'AiFillApi':
          icon = <AiFillApi />
          break
        case 'FaCogs':
          icon = <FaCogs />
          break
        case 'IoMdText':
          icon = <IoMdText />
          break
        case 'SiCss3':
          icon = <SiCss3 />
          break
        case 'SiHtml5':
          icon = <SiHtml5 />
          break
        case 'SiGit':
          icon = <SiGit />
          break
        case 'SiGithub':
          icon = <SiGithub />
          break
        case 'SiGraphql':
          icon = <SiGraphql />
          break
        case 'SiJavascript':
          icon = <SiJavascript />
          break
        case 'SiNodeDotJs':
          icon = <SiNodeDotJs />
          break
        case 'SiReact':
          icon = <SiReact />
          break
        case 'SiRedux':
          icon = <SiRedux />
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
  </>
)

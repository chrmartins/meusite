import React from 'react'
import { Container } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'


export default function SocilLinks() {
  return (
    <Container>

      <ul>

        <li>
            <a 
              href='https://github.com/chrmartins'
              classname='Github'
              target="_blank"
            >
              <FontAwesomeIcon icon={ faGithub } size='2x' />
            </a>
        </li>

        <li>
          <a 
            href='https://twitter.com/chri37ian'
            classname='Twitter'
            target="_blank"
          >
            <FontAwesomeIcon icon={ faTwitter } size='2x' />
          </a>
        </li>

        <li>
          <a 
            href='https://www.linkedin.com/in/chrmartins'
            classname='Linkedin'
            target="_blank"
          >
            <FontAwesomeIcon icon={ faLinkedin } size='2x' />
          </a>
        </li>

        <li>
          <a 
            href='https://www.instagram.com/chrmartins'
            classname='Instagram'
            target="_blank"
          >
            <FontAwesomeIcon icon={ faInstagram } size='2x' />
          </a>
        </li>

        
        
      </ul>
      
    </Container>
  )
}

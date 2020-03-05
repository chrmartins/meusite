import React from 'react'
import { Container } from './styles'
import { library } from '@fortawesome/fontawesome-svg-core'    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function Footer() {
  return (
    <Container>


      <footer class="footer-distributed">

        <div class="footer-left">

          <h3>CHR3 <span>Web</span></h3>

          {/* <p class="footer-links">
            <a href="#" class="link-1">Home</a>
          
            <a href="#">About</a>
            
            <a href="#">Contact</a>
          </p> */}

          <p class="footer-company-name">Christian Martins © 2020</p>
        </div>

        <div class="footer-center">

          <div>
            <i><FontAwesomeIcon icon="map-marker-alt"/></i>
            <p>Recreio - Rio de Janeiro - RJ</p>
          </div>

          <div>
            <i><FontAwesomeIcon icon="phone-alt"/></i>
            <p>+55 21 96462-7741</p>
          </div>

          <div>
          <i><FontAwesomeIcon icon="envelope"/></i>
            <p><a href="contato@chrmartins.com">contato@chrmartins.com</a></p>
          </div>

        </div>

        <div class="footer-right">

          <p class="footer-company-about">
            <span>Web Developer</span>
            Estudante de Análise e desenvolvimento de sistemas de informação, Javascript, NodeJS, React,
            React Native e todo ecossistema envolvido.</p>
        
        </div>

      </footer>
    </Container>
  )
}

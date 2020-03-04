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

          <h3>Christian <span>CHR3</span></h3>

          <p class="footer-links">
            <a href="#" class="link-1">Home</a>
          
            <a href="#">About</a>
            
            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">Christian Martins © 2015</p>
        </div>

        <div class="footer-center">

          <div>
            <i class="fas fa-map-marker-alt"></i>
            <p>Recreio - Rio de Janeiro - RJ</p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+55.21.96462.7741</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="contato@chrmartins.com">contato@chrmartins.com</a></p>
          </div>

        </div>

        <div class="footer-right">

          <p class="footer-company-about">
            <span>Christian Martins</span>
            Desenvolvedor web, estudante de Análise e desenvolvimento de sistemas, Javascript e todo seu ecossistema.</p>

          <div class="footer-icons">

            <a href="#"><i class="fab fa-facebook-square"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>

          </div>

        </div>

      </footer>
    </Container>
  )
}

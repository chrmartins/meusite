import React from 'react'
import { Container } from './styles'

export default function Skills() {
  return (
    <Container>
      <h1>Skills</h1>
      <p>HTML</p>
      <div class="container">
        <div class="skills html">90%</div>
      </div>

      <p>CSS</p>
      <div class="container">
        <div class="skills css">80%</div>
      </div>

      <p>JavaScript</p>
      <div class="container">
        <div class="skills js">65%</div>
      </div>

      <p>NodeJS</p>
      <div class="container">
        <div class="skills php">60%</div>
      </div>
    </Container>
  )
}

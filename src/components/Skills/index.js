import React from "react";
import { Container } from "./styles";

export default function Skills() {
  return (
    <Container>
      
      <h1>Skills</h1>

      <p>Javascript</p>
      <div className="container">
        <div className="skills Javascript">90%</div>
      </div>

      <p>NodeJS</p>
      <div className="container">
        <div className="skills NodeJS">70%</div>
      </div>

      <p>ReactJS</p>
      <div className="container">
        <div className="skills ReactJS">80%</div>
      </div>

      <p>React Native</p>
      <div className="container">
        <div className="skills ReactNative">60%</div>
      </div>

      <p>HTML 5</p>
      <div className="container">
        <div className="skills html5">90%</div>
      </div>

      <p>CSS 3</p>
      <div className="container">
        <div className="skills css3">75%</div>
      </div>

      <p>Bancos de Dados SQL e NoSQL</p>
      <div className="container">
        <div className="skills bd">85%</div>
      </div>

      <p>VueJS</p>
      <div className="container">
        <div className="skills vueJS">50%</div>
      </div>
    </Container>
  );
}

import React from "react";
import { Container } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function SocilLinks() {
  return (
    <Container>
      <ul>
        <li>
          <a
            href="https://github.com/chrmartins"
            className="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/chri37ian"
            className="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/chrmartins"
            className="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/chrmartins"
            className="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </li>
      </ul>
    </Container>
  );
}

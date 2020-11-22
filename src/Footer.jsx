import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg-light text-center">
        <p>@ 2020 Sammy. All Rights Reserved.</p>
      </footer>

      <footer className="bg-light text-center">
        <p>
          <a
            className="m-3"
            href="https://facebook.com/sammyh.mukta"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              color="#3b5998"
              size="2x"
            />
          </a>
          <a
            className="m-3"
            href="https://github.com/hossain1527"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithubSquare} color="#211f1f" size="2x" />
          </a>
          <a
            className="m-3"
            href="https://www.linkedin.com/in/a-s-m-hossain-88423951/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#0e76a8" size="2x" />
          </a>
          <a
            className="m-3"
            href="https://www.instagram.com/sammymukta/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagramSquare}
              color="#cd486b"
              size="2x"
            />
          </a>
        </p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

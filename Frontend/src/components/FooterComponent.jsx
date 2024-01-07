import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class FooterComponent extends Component {
 constructor(props) {
    super(props);

    this.state = {};
 }

 render() {
    return (
      <div>
        <footer id="contact" className="text-center text-white bg-dark">
        <div className="container py-4">
          <div className="d-flex justify-content-center">
            <a href="https://www.instagram.com/sacgit/" className="mx-4 text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/pwaparazzi" className="mx-4 text-white">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/ariantiasagita/" className="mx-4 text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div className="d-flex justify-content-center">
          <div className="text-center bg-dark py-2">With love, Sagit!</div>
        </div>
        </div>
      </footer>

      </div>

    );
 }
}

export default FooterComponent;
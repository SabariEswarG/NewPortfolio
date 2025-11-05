import React from 'react';
import './portfolio.css';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p><strong>NithyaSabari Eswar G</strong></p>
        <p>
          Feel free to ask queries about my projects and certifications.<br />
          So contact me any time for your queries.
        </p>
      </div>
      <div className="footer-right">
        <a href="https://www.linkedin.com/in/nithyasabari-eswar-g" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/SabariEswarG" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nithyasabari123@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

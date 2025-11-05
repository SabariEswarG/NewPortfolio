import React from 'react';
import './portfolio.css';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="social-sidebar">
      <a href="https://www.linkedin.com/in/nithyasabari-eswar-g"><FaLinkedinIn /></a>
      <a href="https://github.com/SabariEswarG"><FaGithub /></a>
      <a href="mailto:nithyasabarieswar.com"><FaEnvelope /></a>
    </div>
  );
};

export default Sidebar;

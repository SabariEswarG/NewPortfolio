import React, { useRef, useEffect, useState } from "react";
import './portfolio.css';
import { FaJava} from 'react-icons/fa';
import { SiPostman, SiMysql } from 'react-icons/si';
import { MdDesktopMac } from 'react-icons/md';

const About = () => {
  const aboutRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutRef} className={`about ${inView ? 'visible' : ''}`}>
      <div className="intro">
        <h1>ABOUT ME</h1>
        <hr />
        <h3>
          Enthusiastic professional with a B.E[CSE] background. Proficient in Technical Skills.
          Motivated and eager to contribute in Your Industry Roles.
        </h3>
      </div>

      <div className="get">
        <h3>Get to Know me!</h3>
        <p>
          Hey! It's <b>NithyaSabari Eswar G</b> and <b>I'm a Full Stack Developer</b> located in Madurai, Tamil Nadu.
          Recent <b>B.E</b> graduate with strong academic performance and a passion for Developer.
          Eager to apply my knowledge and skills in Full-Stack Development to contribute positively to a dynamic team.
          Seeking an opportunity to learn and grow in a professional environment that values innovation and creativity.
        </p>
      </div>

      <div className="Skills">
        <h1>Skills</h1>
        <h3><FaJava /> Java</h3>
        <h3><MdDesktopMac /> HTML, CSS, JS, ReactJS</h3>
        <h3><SiPostman /> SpringBoot</h3>
        <h3><SiMysql /> MySql</h3>
      </div>
    </div>
  );
};

export default About;

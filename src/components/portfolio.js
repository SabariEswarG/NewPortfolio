import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Home from './home';
import About from './about';
import Education from './educations';
import Project from './project';
import Contact from './contact';
import Footer from './footer';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Project /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
};

export default Portfolio;

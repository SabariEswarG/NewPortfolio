import React from "react";
import './portfolio.css';

const Project =()=>{
    return(
        <div className="Projects">
            <div className="protitle">
                <h1>Projects</h1>
            </div>

            <div className="pro">
            <div className="E-learning">
                <h3>Project 1</h3>
                <h3>Course Registration Portal</h3>
                <p>Developed a responsive Course Registration Panel featuring login, signup, course listings, and interactive UI using HTML, CSS, JS.  Built a secure Spring Boot backend with JWT authentication to handle user access and API protection.  Implemented MySQL for data storage</p>
            </div>
            <div className="Proland">
                <h3>Project 2</h3>
                <h3>IPL Data Analysis</h3>
                <p>A Tableau dashboard for analyzing data from the Indian Premier League.  Developed an interactive Tableau dashboard to analyze IPL data and statistics.  Enhanced user experience through data visualization techniques.</p>
            </div>
            </div>

            <div className="UIcon">
            <div className="UI">
                <h3>Project 3</h3>
                <h3>E-Learning Platform</h3>
                <p>I have created a Simple E-learning Platform using HTML, CSS, JavaScript</p>
            </div>
            </div>
        </div>
    );
};

export default Project;
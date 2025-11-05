import React, { useEffect, useRef, useState } from "react";
import "./portfolio.css";

const Education = () => {
  const eduRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (eduRef.current) observer.observe(eduRef.current);

    return () => {
      if (eduRef.current) observer.unobserve(eduRef.current);
    };
  }, []);

  return (
    <div
      ref={eduRef}
      className={`Edu ${isVisible ? "visible" : ""}`}
    >
      <div className="title">
        <h1>EDUCATION</h1>
        <hr />
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <span className="dot" />
          <div className="content">
            <h3>B.E - CSE</h3>
            <p>PSNA College of Engineering and Technology</p>
            <p>7.67 CGPA</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="dot" />
          <div className="content">
            <h3>Diploma</h3>
            <p>KLN Polytechnic College</p>
            <p>91.4%</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="dot" />
          <div className="content">
            <h3>SSLC</h3>
            <p>St. Britto Higher Secondry School</p>
            <p>75.4%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

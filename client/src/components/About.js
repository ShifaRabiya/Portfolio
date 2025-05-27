import React from 'react';
import './About.css'; // optional for styling
import myPhoto from '../assets/img/navIcon3'; // adjust path as needed

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I’m <strong>Shifa</strong> — a passionate <strong>UI/UX designer</strong> and
              front-end developer. I love transforming complex problems into intuitive,
              beautiful digital experiences. With a strong eye for detail and a love for clean
              code, I aim to deliver elegant, user-friendly interfaces that leave a lasting impact.
            </p>
            <ul className="about-details">
              <li><strong>Name:</strong> Shifa</li>
              <li><strong>Role:</strong> UI/UX Designer & Frontend Developer</li>
              <li><strong>Email:</strong> shifa@example.com</li>
              <li><strong>Location:</strong> India (Remote-friendly)</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={myPhoto} alt="Shifa" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

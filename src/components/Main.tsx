import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* You can replace this placeholder with an actual picture in your assets folder later */}
          <img src="https://flaticon.com" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/gal-peter-48a19b97" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:G.peter26@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="tel:0545732437" target="_blank" rel="noreferrer"><PhoneIcon/></a>
          </div>
          <h2>Gal Peter</h2>
          <p>Quality & Infrastructure Automation Engineer</p>

          <div className="about-intro">
            <p>
              I am a veteran QA Engineer with <strong>over 19 years of extensive experience</strong> driving end-to-end software testing architectures, automated frameworks, and team deployment models. I specialize in designing test strategies, setting up metrics infrastructure, and leading engineering teams across diverse enterprise scopes.
            </p>
            <p>
              <strong>Actively transitioning into DevOps engineering</strong>, I leverage my comprehensive background in quality assurance to build rock-solid CI/CD delivery pipelines, automate infrastructure as code solutions, and establish continuous verification boundaries that guarantee reliable, high-speed release cycles.
            </p>
          </div>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/gal-peter-48a19b97" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:G.peter26@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

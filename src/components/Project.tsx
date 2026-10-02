import React from "react";
import DTC_Main from '../assets/images/DTC_Main.png';
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Engineering Projects</h1>
        <div className="project-grid">
            <div className="project">
                <a href="https://github.com/Gal-Peter/Gal-Peter.github.io" target="_blank" rel="noreferrer">
                    <img src={DTC_Main} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/Gal-Peter/Gal-Peter.github.io" target="_blank" rel="noreferrer">
                    <h3>DevOps Terminal Commander</h3>
                </a>
                <p>Designed and developed a command-line interface tool for streamlining DevOps workflows, enabling efficient management of CI/CD pipelines and infrastructure automation tasks.</p>
            </div>
            
            <div className="project">
                <a href="https://github.com/Gal-Peter/Gal-Peter.github.io" target="_blank" rel="noreferrer">
                    <img src={mock02} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/Gal-Peter/Gal-Peter.github.io" target="_blank" rel="noreferrer">
                    <h3>Infrastructure as Code Staging Suite</h3>
                </a>
                <p>Engineered isolated, clean infrastructure configuration files deploying dynamic virtual private cloud grids inside AWS cloud networks. Programmed security parameter rules alongside modular configuration definitions to enforce predictable sandbox instances specialized for heavy load verification cycles.</p>
            </div>

            <div className="project">
                <a href="https://github.com/Gal-Peter/Gal-Peter.github.io" target="_blank" rel="noreferrer">
                    <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                    <h3>Telemetry & Service Alert Engine</h3>
                </a>
                <p>Configured an infrastructure system observability environment attaching Prometheus matrix capture daemons straight onto running container node groups. Constructed uniform visualization metrics maps via Grafana dashboards tracking memory usage thresholds and setting operational warning triggers.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;

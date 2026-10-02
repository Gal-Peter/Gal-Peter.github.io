import React from "react";
import '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faFlask, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Docker",
    "Kubernetes (K8s)",
    "GitHub Actions",
    "Jenkins",
    "Grafana",
    "Prometheus",
    "Bash Scripting",
    "YAML Configuration"
];

const labelsSecond = [
    "Python",
    "Pytest",
    "Playwright",
    "Selenium",
    "Postman / Bruno",
    "Appium (Mobile)",
    "SDLC / STLC",
    "Jira & Confluence"
];

const labelsThird = [
    "Linux Systems",
    "AWS",
    "GCP",
    "MS SQL Server",
    "MySQL",
    "Oracle PL/SQL",
    "LoadRunner",
    "Windows / iOS / Android"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Technical Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faTerminal} size="3x"/>
                        <h3>DevOps & Infrastructure</h3>
                        <p>Actively expanding into scalable configuration management and infrastructure automation. Experienced in continuous integration workflows, container containerization orchestrations, and cloud-native monitoring setups to establish efficient code release cycles.</p>
                        <div className="flex-chips">
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faFlask} size="3x"/>
                        <h3>Test Automation & QA Architecture</h3>
                        <p>19+ years of industry leadership in engineering reliable quality gates. Expert at building automated testing frameworks from scratch, setting up custom end-to-end (E2E) integration strategies, and leading multi-tiered engineering sprint units.</p>
                        <div className="flex-chips">
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x"/>
                        <h3>Databases & Environments</h3>
                        <p>Strong foundations in backend database querying, system logic optimizations, and cross-platform verification. Highly proficient in testing infrastructure components across multi-tier distributions spanning cloud nodes, Linux servers, and embedded networks.</p>
                        <div className="flex-chips">
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;

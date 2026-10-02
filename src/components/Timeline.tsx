import React from "react";
import '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">QA Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Plasson Ltd</h4>
            <p>
              Engineered and maintained automated test suites utilizing Python, Pytest, and Playwright to optimize regression testing pipelines. Structured manual coverage boundaries for internal MES logic systems using Jira and Confluence tracking nodes. Directed cloud integrations for brand label infrastructures straight into live pipelines.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2022"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">QA Team Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">NCR</h4>
            <p>
              Managed and coordinated an engineering squad of 6 QA analysts. Established strict release quality gates within the systems integration cycle and authored central end-to-end framework test strategy guidelines to optimize performance standards across multi-platform delivery scopes.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">QA Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">WorldMate Inc.</h4>
            <p>
              Authored high-level STP/STD system coverage blueprints and tracked cross-platform anomalies across web and mobile ecosystems via Bugzilla workflows. Developed direct operational database mapping and backend schema tracking scripts via raw MySQL terminals.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2007 - 2010"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">QA Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Motorola Solutions</h4>
            <p>
              Executed heavy infrastructural stress and volume testing routines using LoadRunner. Managed system performance verifications using MS SQL Server environments and drove low-level embedded hardware validations targeting client-server real-time (RT) devices.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

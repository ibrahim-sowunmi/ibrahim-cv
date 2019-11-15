import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              Second year student pursuing a BSc in{' '}
              <span className="highlight">Computer Science with Human-computer Interaction</span>
              , graduating in 2021.
              Passionate about problem-solving, intuitive design, and
              everything web. 
            </p>
            <p>
              Constantly {' '}<span className="highlight">learning</span>
              , currently in cahoots with ... 
            </p>
            <p>
              <b>Java, HTML, CSS, Js, Sketch 4, Python.</b>
            </p>
            <p>
              View {' '}
              <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1YKnYYw4ENRwtMPU0ccwDsNHqLqTeVvAv/view?usp=sharing">
              <span className="highlight">My Resume!</span>
              </a>
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>

          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;

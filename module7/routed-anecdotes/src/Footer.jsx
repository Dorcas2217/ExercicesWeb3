import React from 'react';
import '../Footer.css'; // Import the CSS file

const Footer = () => (
  <div className="container">
    Anecdote app for{' '}
    <a
      href="https://fullstackopen.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="link"
    >
      Full Stack Open
    </a>
    . <br />
    See{' '}
    <a
      href="https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js"
      target="_blank"
      rel="noopener noreferrer"
      className="link"
    >
      source code on GitHub
    </a>
    .
  </div>
);

export default Footer;

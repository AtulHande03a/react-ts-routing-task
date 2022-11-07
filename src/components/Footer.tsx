import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="footer-container side-padding-footer">
      <div className="footer-sub-container">
        <div className="footer-icons">
          <a
            className="footer-icons-link"
            href="https://github.com/AtulHande03a"
          >
            <AiOutlineGithub />
          </a>
          <a href="https://www.linkedin.com/in/atul-hande/">
            <AiOutlineLinkedin />
          </a>
          <a href="https://twitter.com/AtulHande9">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

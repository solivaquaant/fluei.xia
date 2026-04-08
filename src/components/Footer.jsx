import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-links-row">
          <div className="footer-col">
            <h4 className="footer-title">This site</h4>
            <ul className="footer-list">
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/patterns">Patterns</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-list">
              <li>
                <a
                  href="https://www.tiktok.com/@fluei.xia"
                  target="_blank"
                  rel="noreferrer">
                  TikTok ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/fluei.xia"
                  target="_blank"
                  rel="noreferrer">
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-title">More</h4>
            <ul className="footer-list">
              <li>
                <a
                  href="https://github.com/solivaquaant"
                  target="_blank"
                  rel="noreferrer">
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright &copy; {new Date().getFullYear()} @solivaquaant, built on
            April 06, 2026.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

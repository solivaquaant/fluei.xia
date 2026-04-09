import React from "react";
import { motion } from "framer-motion";
import transparentLogo from "../assets/logo/Logo-transparent.png";
import "./Home.css";

const Home = () => {
  React.useEffect(() => {
    document.title = "@fluei.xia | Home";
  }, []);

  return (
    <div className="home-page">
      <section className="hero container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <h1 className="title">@fluei.xia</h1>
          <p className="subtitle">
            Welcome to my cozy little corner of the Internet.
          </p>
          <div className="cta-buttons">
            <a href="/gallery" className="btn btn-primary">
              View gallery
            </a>
            <a href="/patterns" className="btn btn-secondary">
              Crochet patterns
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="image-blob">
            <img src={transparentLogo} alt="fluei.xia logo" />
          </div>
        </motion.div>
      </section>
      <section className="slogan-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="slogan-wrapper">
            <h2 className="home-slogan">
              "let art be your voice when words fall short."
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="story-section container">
        <motion.h2
          className="story-title centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          The meaning behind @fluei.xia
        </motion.h2>
        <div className="story-grid">
          <motion.div
            className="story-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className="story-blocks">
              <motion.div
                className="story-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}>
                <div className="story-icon">.☘︎ ݁</div>
                <div className="story-text">
                  <h3>The name</h3>
                  <p>
                    <strong>@fluei.xia</strong> is a reflection of my creative
                    journey - the delicate balance between flowing creativity
                    and structured artistry.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="story-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}>
                <div className="story-icon">˙✮⋆</div>
                <div className="story-text">
                  <h3>The philosophy</h3>
                  <p>
                    Inspired by <strong>October 12th</strong>, the number{" "}
                    <strong>121</strong> represents my birth date. 121%
                    symbolizes a surplus of joy. I strive to weave that extra
                    21% of happiness into every stitch, ensuring every recipient
                    feels the warmth and love behind each crochet gift.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="story-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <motion.div
              className="visual-card-wrapper"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}>
              <div className="visual-card white">
                <div className="visual-sparkle">✨</div>
                <div className="visual-hero-stat">
                  121<span>%</span>
                </div>
                <div className="visual-divider">
                  <span></span>
                  <p>PURE HAPPINESS</p>
                  <span></span>
                </div>
                <div className="visual-nav-dots">
                  <span className="dot dot-light"></span>
                  <span className="dot dot-dark"></span>
                  <span className="dot dot-light"></span>
                </div>
              </div>
              <motion.div
                className="visual-badge"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={{
                  y: [0, 5, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  opacity: { delay: 0.8 },
                  x: { delay: 0.8 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                viewport={{ once: true }}>
                Since Oct 12th
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="design-essence container">
        <div className="design-divider-wrap">
          <div className="design-divider-line"></div>
          <div className="design-divider-sparkle">✦</div>
          <div className="design-divider-line"></div>
        </div>

        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="section-title">Design essence</h2>
          <p className="section-subtitle">The visual language of @fluei.xia</p>
        </motion.div>

        <div className="design-grid">
          <motion.div
            className="palette-box glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <h3>Color palette</h3>
            <div className="colors-list">
              <div className="color-item">
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "var(--primary-dark)" }}></div>
                <div className="color-info">
                  <span className="color-name">Dark</span>
                  <span className="color-hex">#FF85A2</span>
                </div>
              </div>
              <div className="color-item">
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "var(--primary)" }}></div>
                <div className="color-info">
                  <span className="color-name">Primary</span>
                  <span className="color-hex">#FFB3C6</span>
                </div>
              </div>
              <div className="color-item">
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "var(--primary-light)" }}></div>
                <div className="color-info">
                  <span className="color-name">Light</span>
                  <span className="color-hex">#FFD1DC</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="typography-box glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <h3>Typography</h3>
            <div className="fonts-list">
              <div className="font-item">
                <span className="font-label">Heading font</span>
                <span className="font-example-serif">Playfair Display</span>
              </div>
              <div className="font-item">
                <span className="font-label">Body font</span>
                <span className="font-example-sans">Quicksand</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

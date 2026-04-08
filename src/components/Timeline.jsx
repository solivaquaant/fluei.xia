import React from "react";
import { motion } from "framer-motion";
import "./Timeline.css";

const TimelineImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className={`img-wrapper ${!isLoaded ? "shimmer" : ""}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

const TimelineItem = ({ item, index }) => (
  <motion.div
    className="timeline-item"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true, margin: "-100px" }}>
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <span className="timeline-date">{item.date}</span>
      <h3 className="timeline-title">{item.title}</h3>
      <p className="timeline-desc">{item.description}</p>

      <div className="timeline-images">
        {item.images.map((img, i) => (
          <TimelineImage key={i} src={img} alt={`Work from ${item.date}`} />
        ))}
      </div>
    </div>
  </motion.div>
);

const Timeline = ({ items }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default Timeline;

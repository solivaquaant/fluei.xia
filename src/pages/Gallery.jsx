import React from "react";
import Timeline from "../components/Timeline";
import { galleryEvents } from "../data/galleryConfig";
import "./Gallery.css";

const galleryImages = import.meta.glob(
  "../gallery/**/*.{png,jpg,jpeg,svg}",
  { eager: true },
);

const Gallery = () => {
  const processedTimelineData = galleryEvents.map((event) => {
    const eventImages = Object.keys(galleryImages)
      .filter((path) => path.includes(`/gallery/${event.folder}/`))
      .map((path) => galleryImages[path].default);

    return {
      ...event,
      images: eventImages,
    };
  });

  return (
    <div className="gallery-page container">
      <div className="page-header">
        <h1 className="page-title">The 121% gallery</h1>
        <p className="page-subtitle">
          A timeline of my crochet journey and the pieces that brought joy.
        </p>
      </div>

      <div className="timeline-wrapper">
        <Timeline items={processedTimelineData} />
      </div>
    </div>
  );
};

export default Gallery;

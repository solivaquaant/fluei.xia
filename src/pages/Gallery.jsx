import React from "react";
import Timeline from "../components/Timeline";
import { parseDate, formatDisplayDate } from "../utils/dateUtils";
import "./Gallery.css";

const eventConfigs = import.meta.glob("../gallery/*/config.json", {
  eager: true,
});

const galleryImages = import.meta.glob(
  "../gallery/**/*.{png,jpg,jpeg,svg,webp}",
  { eager: true },
);

const Gallery = () => {
  React.useEffect(() => {
    document.title = "@fluei.xia | Gallery";
  }, []);

  const processedTimelineData = Object.keys(eventConfigs)
    .map((configPath) => {
      const config = eventConfigs[configPath];
      const folderName = configPath.split("/")[2];

      const eventImages = Object.keys(galleryImages)
        .filter((imagePath) => imagePath.includes(`/gallery/${folderName}/`))
        .map((imagePath) => galleryImages[imagePath].default);

      const parsedDate = parseDate(config.date);

      return {
        ...config,
        folder: folderName,
        images: eventImages,
        parsedDate, // Used for sorting
        formattedDate: formatDisplayDate(parsedDate), // Used for display
      };
    })
    .sort((a, b) => b.parsedDate - a.parsedDate);

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

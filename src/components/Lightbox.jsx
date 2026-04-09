import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Lightbox.css";

const Lightbox = ({ images, activeIndex, onClose, onPrev, onNext }) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (activeIndex === null) return null;

  return (
    <motion.div
      className="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}>
      <motion.div
        className="lightbox-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}>
        <button
          className="lightbox-close"
          onClick={onClose}
          title="Close (Esc)">
          ✕
        </button>

        {images.length > 1 && (
          <>
            <button
              className="lightbox-btn prev"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              title="Previous (Left Arrow)">
              ‹
            </button>
            <button
              className="lightbox-btn next"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              title="Next (Right Arrow)">
              ›
            </button>
          </>
        )}

        <div className="lightbox-image-container">
          <AnimatePresence initial={false}>
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`Gallery image ${activeIndex + 1}`}
              className="lightbox-img"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 0.5, ease: "easeOut" },
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>
        </div>

        {images.length > 1 && (
          <div className="lightbox-counter">
            {activeIndex + 1} / {images.length}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Lightbox;

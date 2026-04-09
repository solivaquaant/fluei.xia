import React from "react";
import { useParams, Link } from "react-router-dom";
import PatternRenderer from "../components/PatternRenderer";
import { motion } from "framer-motion";
import "./Patterns.css";

const patternModules = import.meta.glob("/src/patterns/*/index.mdx", {
  eager: true,
});

const Patterns = () => {
  const { slug } = useParams();

  const patternsList = Object.keys(patternModules).map((path) => {
    const pathParts = path.split("/");
    const folderName = pathParts[pathParts.length - 2];

    const module = patternModules[path];
    return {
      slug: folderName,
      path: path,
      component: module.default,
      ...module.metadata,
    };
  });

  const selectedPattern = slug
    ? patternsList.find((p) => p.slug === slug)
    : null;

  React.useEffect(() => {
    if (selectedPattern) {
      document.title = `@fluei.xia | ${selectedPattern.title}`;
    } else {
      document.title = "@fluei.xia | Patterns";
    }
  }, [selectedPattern]);

  return (
    <div className="patterns-page container">
      {!slug && (
        <div className="page-header">
          <h1 className="page-title">Crochet patterns</h1>
          <p className="page-subtitle">
            Free patterns to spread the 121% happiness around the world.
          </p>
        </div>
      )}

      {!selectedPattern ? (
        <div className="patterns-grid">
          {patternsList.map((pattern) => (
            <Link
              to={`/patterns/${pattern.slug}`}
              key={pattern.slug}
              className="pattern-link-card">
              <motion.div
                className="pattern-card glass"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}>
                <div className="card-thumb">
                  <img src={pattern.thumbnail} alt={pattern.title} />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{pattern.title}</h3>
                  <p>{pattern.description}</p>
                  <button className="read-more">Read pattern →</button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="pattern-view">
          <Link to="/patterns" className="back-btn">
            ← Back to patterns
          </Link>

          <PatternRenderer MDXComponent={selectedPattern.component} />
        </div>
      )}


    </div>
  );
};

export default Patterns;

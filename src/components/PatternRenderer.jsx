import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MDXProvider } from "@mdx-js/react";
import slugify from "slugify";
import "./PatternRenderer.css";

// Custom components to override MDX styling
const components = {
  h1: (props) => <h1 className="mdx-h1" {...props} />,
  h2: (props) => {
    const id = slugify(props.children.toString(), {
      lower: true,
      strict: true,
    });
    return <h2 className="mdx-h2" id={id} {...props} />;
  },
  table: (props) => (
    <div className="table-responsive">
      <table className="mdx-table" {...props} />
    </div>
  ),
  img: (props) => {
    const [alt, width] = (props.alt || "").split("|");
    return (
      <img
        className="mdx-img"
        {...props}
        alt={alt}
        style={{ width: width || "100%", ...props.style }}
      />
    );
  },
};

const TableOfContents = ({ headings }) => {
  if (!headings.length) return null;

  return (
    <aside className="toc-sidebar">
      <div className="toc-sticky">
        <h4 className="toc-title">ON THIS PAGE</h4>
        <nav className="toc-nav">
          {headings.map((heading) => (
            <a key={heading.id} href={`#${heading.id}`} className="toc-link">
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

const PatternRenderer = ({ MDXComponent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (MDXComponent) {
      const h2Elements = document.querySelectorAll(".mdx-h2");
      const foundHeadings = Array.from(h2Elements).map((el) => ({
        id: el.id,
        text: el.innerText,
      }));
      setHeadings(foundHeadings);
    }
  }, [MDXComponent]);

  if (!MDXComponent)
    return <div className="loading-pattern">Pattern not found.</div>;

  return (
    <div className="pattern-layout">
      <motion.div
        className="pattern-container glass"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <MDXProvider components={components}>
          <div className="mdx-content">
            <MDXComponent />
          </div>
        </MDXProvider>
      </motion.div>

      <TableOfContents headings={headings} />
    </div>
  );
};

export default PatternRenderer;

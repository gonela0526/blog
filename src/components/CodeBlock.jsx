import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

const CodeBlock = ({ language, value }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightElement(codeRef.current);
  }, []);

  return (
    <pre>
      <code ref={codeRef} className={language}>
        {value}
      </code>
    </pre>
  );
};

export default CodeBlock;
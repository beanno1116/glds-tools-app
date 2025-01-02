import React from 'react';

import styles from '../weTextArea.module.css';

const TextArea = ({ children }) => {
  return (
    <div /*ref={containerRef}*/ className={styles.container} >
      {children}
    </div>
  );
}

export default TextArea;
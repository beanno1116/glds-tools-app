import React from 'react';

import styles from '../weTextArea.module.css';

const Label = ({ children, ...props }) => {
  return (
    <label
      className={styles.label}
      htmlFor={`we-fl__field-input-${props.id}`}
      aria-label={`${props?.name ? props.name : "a"} text input`}
    >
      {children}
    </label>
  );
}

export default Label;
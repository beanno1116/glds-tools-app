import React from 'react';

import styles from '../weTextArea.module.css';

const TextAreaInput = ({ ...props }) => {
  return (
    <textarea
      //ref={ref}
      id={`we-fl__field-input-${props.id}`}
      className={`${styles.text_field}`}
      style={{"--height":props.height,"--maxHeight":props.maxHeight}}
      maxLength={props.maxLen ? props.maxLen : "250"}
      value={props.value}
      onChange={props.onChange}
      // {...props}
      disabled={props.disabled}
      placeholder={props.placeholder ? props.placeholder : `Enter ${props.name}`}
      data-error="test"
      autoComplete="off"
    />
  );
}

export default TextAreaInput;
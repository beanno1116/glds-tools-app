import React from 'react';

import CloseIcon from './iconComponents/CloseIcon';

import styles from '../weTextArea.module.css';

const ClearButton = ({ onClick }) => {
  return (
    <button className={styles.close_btn} onClick={onClick}>
      <CloseIcon width={25} height={25} />
    </button>
  );
}

export default ClearButton;
import React from 'react';

// Import Icon component LoadingIcon.js
import LoadingIcon from './iconComponents/LoadingIcon';

import styles from '../weTextArea.module.css';

const StatusIndicator = () => {
  return (
    <div className={styles.status}>
      <LoadingIcon width={25} height={25} color={"#FFCF56"} />
    </div>
  );
}

export default StatusIndicator;
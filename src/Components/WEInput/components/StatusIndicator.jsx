import React from 'react';

// Import loading icon component
import LoadingIcon from './iconComponents/LoadingIcon';

// Import css module
import styles from '../weInput.module.css';

const StatusIndicator = ({ ...props }) => {
  return (
    <div className={`${styles.acc_cmp} ${styles.status}`}>
      <LoadingIcon width={25} height={25} color={"red"}  />
    </div>
  );
}

export default StatusIndicator;


import CloseIcon from './iconComponents/CloseIcon';

import styles from '../weInput.module.css';

const ClearButton = ({ onClick }) => {
  return (
    <button className={`${styles.acc_cmp} ${styles.clear_btn}`} onClick={onClick}>
      <CloseIcon width={25} height={25} />
    </button>
  );
}

export default ClearButton;

import imgBg from '../../../../images/STOREBG.jpg';
import styles from './contentGrid.module.css';

function ContentGrid({ left,mid,right }) {
  return (
    <div className={styles.mainContentGrid}>
      <img src={imgBg} className={styles.bgImage} />
      <div className={styles.bgdGradient}>
        {left}
        {mid}
        {right}
      </div>
    </div>
  );
}

export default ContentGrid;
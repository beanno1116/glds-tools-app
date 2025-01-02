import styles from '../detailListWidget.module.css';


const LowInventoryListItem = ({ id,name,model,count,...props }) => {


  const alertColor = () => {
    if ((count <= 5) && (count >= 3)){
      return styles.warning;
    }
    if (count < 3) {
      return styles.danger;
    }
    return "";
  }


  return (
    <li data-value={id} className={styles.list_item}>
      <div className={styles.detail_column}>
        <div className={styles.detail_label}>
          <h6>{name}</h6>
          <span className={styles.detail_text}>{model}</span>
        </div>

      </div>
      <div className={`${styles.detail_number} ${alertColor()}`}>
        <span>{count}</span>
      </div>
    </li>
  );
}

export default LowInventoryListItem;
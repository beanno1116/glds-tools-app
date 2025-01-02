import styles from '../detailListWidget.module.css';


const RecentlyAssignedListItem = ({ id,name,model,count,...props }) => {


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
        <label>Sonic Wall</label>
        <span>3452n-7mx</span>
      </div>
      <div className={styles.detail_user}>
        <span>Ben Klimaszewski</span>
      </div>
      <div className={styles.detail_date}>
        04/20/2024
      </div>
    </li>
  );
}

export default RecentlyAssignedListItem;
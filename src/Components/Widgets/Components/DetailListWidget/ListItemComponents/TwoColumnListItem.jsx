import styles from '../detailListWidget.module.css';

const TwoColumnListItem = ({ id,name,platform,...props }) => {
  return (
    <li data-value={id} className={styles.list_item}>
        <div className={styles.main_detail}>          
          <div>{name}</div>
        </div>
        <div className={styles.sub_detail}>
          <span>{platform}</span>
        </div>
    </li>
  );
}

export default TwoColumnListItem;
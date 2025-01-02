
import HeartFullIcon from '../../../../../assets/Icons/HeartFullIcon';
import styles from '../detailListWidget.module.css'

const FavoriteGuideListItem = ({ id,name,platform,...props }) => {
  return (
    <li data-value={id} className={styles.list_item}>
      <div className={styles.detail_column}>
        <div>{name}</div>
        <span className={styles.recently_viewed_list_item_platform}>{platform}</span>        
      </div>
      <div className={styles.list_item_icon}>
        <HeartFullIcon width={20} height={20} />
      </div>
    </li>
  );
}

export default FavoriteGuideListItem;
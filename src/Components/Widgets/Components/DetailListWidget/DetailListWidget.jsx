import styles from './detailListWidget.module.css';
import FavoriteGuideListItem from './ListItemComponents/FavoriteGuideListItem';
import LowInventoryListItem from './ListItemComponents/LowInventoryListItem';
import RecentlyAssignedListItem from './ListItemComponents/RecentlyAssignedListItem';
import TwoColumnListItem from './ListItemComponents/TwoColumnListItem';

const DetailListWidget = ({ heading,children,flex,...props }) => {
  return (
    <div className={`${styles.detail_list}`} style={props.style}>

      <div className={styles.header}> 
        <h5>{heading}</h5>
      </div>

      <div className={styles.list}>
        <div className={styles.list_wrapper}>
          <ul className={styles.list_ul}>
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
}

DetailListWidget.LowStockListItem = LowInventoryListItem;
DetailListWidget.RecentlyAssignedListItem = RecentlyAssignedListItem;
DetailListWidget.TwoColumnListItem = TwoColumnListItem;
DetailListWidget.FavoriteGuideListItem = FavoriteGuideListItem;

export default DetailListWidget;
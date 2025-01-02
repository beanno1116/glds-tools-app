import styles from '../../../manageTechGuides.module.css';
import ListItem from './ListItem';

const ListDetail = ({count}) => {
  return (
    <div className={styles.list_details}>
      <label>Results:</label>
      <span>{count}</span>
   </div>
  )
}

const List = ({ children,...props }) => {
  return (
    <div className={styles.list_container}>
    <div className={styles.list_wrapper}>
      <ul className={styles.list}>
        {children}
      </ul>
    </div>
 </div>
  );
}

List.Item = ListItem;
List.Detail = ListDetail;

export default List;
import styles from '../searchList.module.css';
import ListItem from './ListItem';
import UserListItem from './UserListItem';

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
List.UserListItem = UserListItem;
List.Detail = ListDetail;

export default List;
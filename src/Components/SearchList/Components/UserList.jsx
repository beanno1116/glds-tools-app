import styles from '../searchList.module.css';
import UserListItem from './UserListItem';


const ListDetail = ({count}) => {
  return (
    <div className={styles.list_details}>
      <label>Results:</label>
      <span>{count}</span>
   </div>
  )
}

const UserList = ({ users,...props }) => {
  return (
    <div className={styles.list_container}>
    <div className={styles.list_wrapper}>
      <ul className={styles.list}>
        {users.map(item => {
          return (
            <List.Item key={item.id} title={item.title} platform={item.platform} tags={item.tags} />
          )
        })}
      </ul>
    </div>
 </div>
  );
}

UserList.Item = UserListItem;
UserList.Detail = ListDetail;

export default UserList;
import styles from '../../../manageTechGuides.module.css';

const ListItem = ({ title,platform,tags,...props }) => {
  return (
    <li className={styles.list_item}>
    <div>
      <div className={styles.list_item_title}>{title}</div>
      <div className={styles.list_item_platform}><label>Platform:</label><span>{platform}</span></div>
      <div className={styles.list_item_tags}><label>Tags:</label><span>{tags}</span></div>
    </div>
    <div></div>
  </li>
  );
}

export default ListItem;
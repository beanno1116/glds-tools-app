import FilterSquareIcon from '../../../assets/Icons/FilterSquareIcon';
import PencilIcon from '../../../assets/Icons/PencilIcon';
import TrashIcon from '../../../assets/Icons/TrashIcon';
import WEButton from '../../WEButton/WEButton';
import styles from '../searchList.module.css';

const UserListItem = ({ id,name,title,type,onClick,...props }) => {

  const onListItemClick = (e) => {
    const items = e.currentTarget.closest("ul").querySelectorAll("li");
    items.forEach(element => {
      element.classList.remove(styles.selected);
    });

    e.currentTarget.classList.add(styles.selected);
  }

  const onListItemButtonClick = (e,eventType) => {
    onClick(e,eventType)
  }

  return (
    <li data-value={id} className={styles.list_item} onClick={onListItemClick}>

      <div className={styles.list_item_details}>
        <div className={styles.list_item_title}>{name}</div>
        <div className={styles.list_item_platform}><label>Title:</label><span>{title}</span></div>
        <div className={styles.list_item_tags}><label>Type:</label><span>{type}</span></div>
      </div>

      <div className={styles.list_item_buttons}>
        <div>
          <WEButton onClick={(e) => onListItemButtonClick(e,"edit")} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem"}} type='solid'>            
            <PencilIcon width={14} height={14} />
          </WEButton>
        </div>
        <div>
          <WEButton onClick={onListItemButtonClick} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",color:"red"}} type='solid'>            
            <TrashIcon width={14} height={14} />
          </WEButton>
        </div>
      </div>

  </li>
  );
}

export default UserListItem;
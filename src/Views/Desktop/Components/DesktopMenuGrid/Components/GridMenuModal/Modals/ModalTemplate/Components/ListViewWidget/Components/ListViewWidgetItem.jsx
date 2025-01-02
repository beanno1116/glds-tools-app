import styles from '../listViewWidget.module.css';

const ListViewWidgetItem = ({ id,name,detail,date,onClick,...props }) => {

  const onClickEvent = (e) => {
    try {
      if (onClick){        
        let currentTarget = e.currentTarget;
        let ul = currentTarget.closest("ul");
        let listItems = ul.querySelectorAll("li");
        listItems.forEach(item => {
          item.classList.remove(styles.active);
        })        
        currentTarget.classList.add(styles.active);
        onClick(e);
        return;
      }
      
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <li data-itemid={id} className={styles.plugin_modal_list_item} onClick={onClickEvent}>                    
      <div className={styles.plugin_modal_list_item_details}>
        <div className={styles.plugin_modal_list_item_name}><h6>{name}</h6></div>
        <div className={styles.plugin_modal_list_item_platform}>{detail}</div>
        <div className={styles.plugin_modal_list_item_date}>
          <span>{date}</span>
        </div>
      </div>                    
    </li>
  );
}

export default ListViewWidgetItem;
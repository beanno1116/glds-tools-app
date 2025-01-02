import styles from '../listViewWidget.module.css';

const EmployeeListViewWidgetItem = ({ id,name,jobTitle,jobType,onClick,...props }) => {

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
        let value = currentTarget.dataset.value;
        onClick(e,value);
        return;
      }
      
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <li data-value={id} className={styles.plugin_modal_list_item} onClick={onClickEvent}>                    
      <div className={styles.plugin_modal_list_item_details}>
        <div className={styles.plugin_modal_list_item_name}><h6>{name}</h6></div>
        <div className={styles.plugin_modal_list_item_platform}>{jobTitle}</div>
        <div className={styles.plugin_modal_list_item_date}>{jobType}</div>          
      </div>                    
    </li>
  );
}

export default EmployeeListViewWidgetItem;
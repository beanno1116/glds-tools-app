import styles from '../../../modalTemplate.module.css';


const statusColors = {
  sent: "yellow",
  approved: "green",
  ordered: "orange"
}

const SaleListViewWidgetItem = ({ id,storeName,estimate,salesman,status,customer,onClick,...props }) => {



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
    <li data-itemid={id} className={styles.sale_list_item} onClick={onClickEvent}>

      <div className={`${styles.sale_list_item_status} ${styles[statusColors[status]]}`}></div>

      <div className={styles.sale_list_item_details}>

        <div title='Store Name' className={styles.sale_list_item_storename}><h6>{storeName}</h6></div>

        <div title='Customer Name' className={styles.sale_list_item_customer}>{customer}</div>

        <div title='Estimate' className={styles.sale_list_item_estimate}>${estimate}</div>

      </div>

      <div className={styles.sale_list_item_badge}>
        <div className={styles.sale_list_item_salesman}>{"RG"}</div>
      </div>


    </li>
  );
}

export default SaleListViewWidgetItem;
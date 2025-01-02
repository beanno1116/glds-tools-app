import EyeIcon from '../../../assets/Icons/EyeIcon';
import LargeExclamationIcon from '../../../assets/Icons/LargeExclamationIcon';
import styles from './alertMenuPopover.module.css';

const AlertMenuPopover = ({ alerts,...props }) => {
  return (
    <div className={styles.alert_menu_po}>
       <div className={styles.alert_menu_po_heading}>
        <h4>Alerts</h4>
       </div>
       <div className={styles.alert_menu_list_containter}>
        <div className={styles.alert_menu_list_wrapper}>
          <ul className={styles.alert_menu_list}>

            {alerts && alerts.map(alert => {
              return (
                <li key={alert.id} title='Click to view' className={styles.alert_list_item}>
                <div className={styles.alert_list_item_icon}><LargeExclamationIcon width={44} height={44} /></div>
                <div className={styles.alert_list_item_content}>
                  <div className={styles.alert_list_item_title}>
                    <span>{alert.title}</span>
                  </div>
                  <div className={styles.alert_list_item_message}>
                    {alert.message}
                  </div>
                </div>
                {/* <div className={styles.alert_list_item_icon}><EyeIcon width={44} height={44} /></div> */}
              </li>
              )
            })}

            <li title='Click to view' className={styles.alert_list_item}>
              <div className={styles.alert_list_item_icon}><LargeExclamationIcon width={44} height={44} /></div>
              <div className={styles.alert_list_item_content}>
                <div className={styles.alert_list_item_title}>
                  <span>New Sale!</span>
                </div>
                <div className={styles.alert_list_item_message}>
                  New sale sent for Test Store on 11/25/2024 2:29:08 AM                
                </div>
              </div>
              {/* <div className={styles.alert_list_item_icon}><EyeIcon width={44} height={44} /></div> */}
            </li>

            <li title='Click to view'  className={styles.alert_list_item}>
              <div className={styles.alert_list_item_icon}><LargeExclamationIcon width={44} height={44} /></div>
              <div className={styles.alert_list_item_content}>
                <div className={styles.alert_list_item_title}>
                  <span>New Sale!</span>
                </div>
                <div className={styles.alert_list_item_message}>
                  New sale sent for Test Store on 11/25/2024 2:29:08 AM                
                </div>
              </div>
              {/* <div className={styles.alert_list_item_icon}><EyeIcon width={44} height={44} /></div> */}
            </li>

            <li title='Click to view'  className={styles.alert_list_item}>
              <div className={styles.alert_list_item_icon}><LargeExclamationIcon width={44} height={44} /></div>
              <div className={styles.alert_list_item_content}>
                <div className={styles.alert_list_item_title}>
                  <span>New Sale!</span>
                </div>
                <div className={styles.alert_list_item_message}>
                  New sale sent for Test Store on 11/25/2024 2:29:08 AM                
                </div>
              </div>
              {/* <div className={styles.alert_list_item_icon}><EyeIcon width={44} height={44} /></div> */}
            </li>
          </ul>
        </div>
       </div>
    </div>
  );
}

export default AlertMenuPopover;
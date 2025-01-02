import DollarIcon from '../../../../../../../../../../assets/Icons/DollarIcon';
import EmailAtIcon from '../../../../../../../../../../assets/Icons/EmailAtIcon';
import MessageIcon from '../../../../../../../../../../assets/Icons/MessageIcon';
import PersonBadgeIcon from '../../../../../../../../../../assets/Icons/PersonBadgeIcon';
import PhoneIcon from '../../../../../../../../../../assets/Icons/PhoneIcon';
import WEButton from '../../../../../../../../../../Components/WEButton/WEButton';
import styles from '../../modalTemplate.module.css';

const DetailsWidget = ({ sale,...props }) => {
  return (
    <>
      <div className={`${styles.widget} ${styles.detail_widget}`}>

        {sale && (

        <div className={styles.sale_detail_widget}>
          
          {/* STORE AND COMPANY SECTION */}
          <div className={`${styles.sale_detail_widget_row} ${styles.flex_col}`}>

            <div className={styles.sale_detail_widget_row_section}>

              <div className={styles.sale_detail_widget_row_section_containter}>
                <div className={styles.sale_detail_widget_row_container}><label>Store Name:</label><div>{sale && sale.storeName}</div></div>
                <div className={styles.sale_detail_widget_row_container}><label>City:</label><span>{sale && sale.city}</span></div>
              </div>

              <div className={styles.sale_detail_widget_row_section_containter}>
                <div className={styles.sale_detail_widget_row_container}><label>Customer:</label><span>{sale && sale.customer.companyName}</span></div>
                <div className={styles.sale_detail_widget_row_container}><label>State:</label><span>{sale && sale.state}</span></div>
              </div>

            </div>

          </div>

          {/* manager and customer section */}
          <div className={styles.sale_detail_widget_row}>   

            <div className={styles.sale_detail_user_panel}>
              <div className={styles.sale_detail_user_panel_heading}><h6>Salesman</h6></div>
              <div className={styles.sale_detail_user_panel_icon}><PersonBadgeIcon width={50} height={50} /></div>
              <div className={styles.sale_detail_user_panel_name}><span>{sale && `${sale.salesman.firstName} ${sale.salesman.lastName}`}</span></div>
              <div className={styles.sale_detail_user_panel_buttons}>
                
                <WEButton onClick={()=>{}} title={"Add user"} style={{padding:".75rem",backgroundColor:"#00A36A"}} type='solid'>
                  <PhoneIcon width={18} height={18} />
                </WEButton>              
                
                <WEButton onClick={()=>{}} title={"Add user"} style={{padding:".75rem",backgroundColor:"#00A36A"}} type='solid'>
                  <EmailAtIcon width={18} height={18} />
                </WEButton>              
                
                <WEButton onClick={()=>{}} title={"Add user"} style={{padding:".75rem",backgroundColor:"#00A36A"}} type='solid'>
                  <MessageIcon width={18} height={18} />
                </WEButton>              
                
              </div>
            </div>


            <div className={styles.sale_detail_estimate_panel}>
              <div className={styles.sale_detail_user_panel_heading}><h6>Estimate</h6></div>
              <div className={styles.sale_detail_estimate_panel_icon}><span><DollarIcon width={75} height={75} /></span></div>
              <div className={styles.sale_detail_estimate_panel_dollar}><span>${sale && sale.estimate}</span></div>
            </div>


            <div className={styles.sale_detail_user_panel}>
              <div className={styles.sale_detail_user_panel_heading}><h6>Customer</h6></div>
              <div className={styles.sale_detail_user_panel_icon}><PersonBadgeIcon width={50} height={50} /></div>
              <div className={styles.sale_detail_user_panel_name}><span>{sale && sale.customer.companyName}</span></div>
              <div className={styles.sale_detail_user_panel_buttons}>
              <WEButton onClick={()=>{}} title={"Add user"} style={{padding:".75rem",backgroundColor:"#00A36A"}} type='solid'>
                  <PhoneIcon width={18} height={18} />
                </WEButton>              
                
                <WEButton onClick={()=>{}} title={"Add user"} style={{padding:".75rem",backgroundColor:"#00A36A"}} type='solid'>
                  <EmailAtIcon width={18} height={18} />
                </WEButton>              
                
                <WEButton onClick={()=>{}} title={"Add user"} style={{padding:".75rem",backgroundColor:"#00A36A"}} type='solid'>
                  <MessageIcon width={18} height={18} />
                </WEButton>  
              </div>
            </div>

          </div>

          <div className={`${styles.sale_detail_widget_row} ${styles.flex_col}`}>
            <div className={styles.sale_detail_widget_row_section}>
              <div className={`${styles.sale_detail_widget_row_container} ${styles.flex_col}`}><label>Status:</label><span>{sale && sale.status}</span></div>
              <div className={`${styles.sale_detail_widget_row_container} ${styles.flex_col}`}><label>Created Date:</label><span title={sale && sale.creationDate}>{sale && sale.creationDate.split(" ")[0]}</span></div>
              <div className={`${styles.sale_detail_widget_row_container} ${styles.flex_col}`}><label>Last Modified:</label><span title={sale && sale.modifiedDate}>{sale && sale.modifiedDate.split(" ")[0]}</span></div>
            </div>
          </div>

          <div className={styles.sale_detail_widget_row}>
            
              <WEButton onClick={()=>{}} title={"Add user"} style={{flex:"1",padding:".75rem"}} type='solid'>
                Approved
              </WEButton> 
            
              <WEButton onClick={()=>{}} title={"Add user"} style={{flex:"1",padding:".75rem"}} type='solid'>
                Place Order
              </WEButton> 

              <WEButton onClick={()=>{}} title={"Add user"} style={{flex:"1",padding:".75rem"}} type='solid'>
                Complete
              </WEButton> 
          </div>

        </div>
        )}


        
      </div>

      <div className={styles.sale_report_widget}>

<div className={styles.sale_report_widget_view}>
  
  <div className={styles.sale_report_widget_data}>
    <div>
      <div>Monthly Sales</div>
    </div>
    <div>
      
    </div>
  </div>
</div>

<div className={styles.sale_report_widget_view}>
  
  <div className={styles.sale_report_widget_data}>
    <div>
      <div>Weekly Sales</div>
    </div>
    <div>
      
    </div>
  </div>
</div>

</div>
    </>
    
  );
}

export default DetailsWidget;
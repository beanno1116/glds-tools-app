import { useState } from 'react';
import WEInput from '../../../../../../../../../../../Components/WEInput/WEInput';
import WESelect from '../../../../../../../../../../../Components/WESelect/WESelect';
import styles from '../installModalView.module.css';
import WEButton from '../../../../../../../../../../../Components/WEButton/WEButton';

const CustomerForm = ({ stores=[],customers=[],...props }) => {
  const [formData,setFormData] = useState({
    customer: [],
    store: [],
    salesOrderId: "",
    licenseKey: ""    
  });
  const [selectedCustomer,setSelectedCustomer] = useState(undefined);

  const onCustomerSelectEvent = (e) => {
    try {      
      if (e.target.value.length === 0){
        setSelectedCustomer(undefined);
        setFormData({...formData,customer:[]});
        return;
      }
      setSelectedCustomer(e.target.value[0].id);
      setFormData({...formData,customer:e.target.value});  
    } catch (error) {
      console.error(`[ERROR] [COMP:InstallModalView] [EVT:onCustomerSelectEvent] - ${error.message}`);
    }
  }
  
  const onSubmit = () => {
    try {
      const postData = {
        ...formData,        
        customer:formData.customer[0].value.toString(),
        store:formData.store[0].value.toString()
      }
    } catch (error) {
      console.error(`[ERROR] [COMP:CustomerForm] [EVT:onSubmit] - ${error.message}`);
    }
  }


  return (
    <div className={styles.customer_form_container}>
    <form className={styles.customer_form}>

      <div className={`${styles.section} ${styles.customer_select_section}`}>
        <div className={styles.customer_select_title}>
          <label>Start by choosing a customer</label>
        </div>
        <div>
          <WESelect 
            name="customer"
            value={formData.customer}                      
            placeholder="Customer"
            options={customers.map(customer => {
              return {id:customer.cid,value:customer.cid,label:customer.companyName};
            })}
            isMulti={false}
            isSearchable={false}
            onChange={onCustomerSelectEvent} />
        </div>

        {selectedCustomer !== undefined ? 
          (
            <div>
              <div>
                <label>Customer: </label><span>Tommy Farida</span>
              </div>
              <div>
                <label>Phone: </label><span>{"(248)987-1548"}</span>
              </div>
            </div>
          ) :
          (null)
        }

      </div>

      <div className={`${styles.section} ${styles.install_details}`}>

        {
          (selectedCustomer !== undefined) && 
          (
            <>
              <div className={styles.customer_select_title}>
                <label>Enter install details</label>
              </div>
              <div>
                <WESelect 
                  name="store"
                  value={formData.store}                        
                  placeholder="Store"
                  options={stores.map(customer => {
                    return {id:customer.cid,value:customer.cid,label:customer.companyName};
                  })}
                  isMulti={false}
                  isSearchable={false}
                  onChange={e => setFormData({...formData,customer:e.target.value})} />
              </div>

              <div>
                <WEInput                       
                  id={"text_input_soid"}
                  name="salesOrderId"
                  value={formData.salesOrderId}
                  placeholder="Sales Order ID"
                  onChange={e => setFormData({...formData,salesOrderId:e.target.value})}
                  autoComplete="off"
                  style={{width:"100%"}} />                    
              </div>

              <div>
                <WEInput                         
                    id={"text_input_lnse"}
                    name="license"
                    value={formData.licenseKey}
                    placeholder="License Key"
                    onChange={e => setFormData({...formData,licenseKey:e.target.value})}
                    autoComplete="off"
                    style={{width:"100%"}} />
              </div>


            </>
          )
        }


      </div>

      <div className={`${styles.section} ${styles.button_row}`}>
        <WEButton onClick={onSubmit} disabled={selectedCustomer === undefined ? true : false} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem"}} type='solid'>
          Save
        </WEButton>
      </div>
    </form>
  </div>
  );
}

export default CustomerForm;
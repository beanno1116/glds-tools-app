import { useState } from 'react';
import WEButton from '../../Components/WEButton/WEButton';
import WEInput from '../../Components/WEInput/WEInput';
import WEForm from '../../Forms/WEForm/WEForm';
import styles from './addCustomerFormModal.module.css';
import graphic1 from '../../assets/Images/graphic1.png';
import { request } from '../../Api/api';

const AddCustomerFormModal = ({ modalAction,...props }) => {
  
  const [formData,setFormData] = useState({
    companyName: "",
    phoneNumber: "",
    altPhoneNumber: "",
    address: "",
    addressTwo: "",
    state: "",
    zipcode: "",
    city: ""    
  });

  const onCreateButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();    

    const completeCreateCustomer = (response) => {
      setFormData({
        companyName: "",
        phoneNumber: "",
        altPhoneNumber: "",
        address: "",
        addressTwo: "",
        state: "",
        zipcode: "",
        city: ""
      })
      modalAction({currentTarget:e.currentTarget},response.data);
    }
    
    request.post("customers/create",formData,{"Accept": "application/json","Content-Type": "application/json"},completeCreateCustomer);
      
  }

  const onCancelButtonClick = (e) => {
    modalAction(e);
  }

  return (
    <div className={styles.form_modal}>

      <div className={styles.form_container}>
        
        <div className={styles.form_body}>

          <div className={styles.asthetics_grid_item}>

            <div className={styles.form_heading}>
              <h1>Create A Customer</h1>
            </div>

            <img src={graphic1} className={styles.graphic} alt="cartoon graphic of man with different screens" />

          </div>
        
          <div className={styles.form_grid_item}>

            <h2>Information</h2>

            <WEForm layout={"flex"} style={{width:"100%",gap:"1rem"}}>
              
              {/* Company Name Row */}
              <WEForm.Row>

                <WEInput                   
                  id={"text_input_cn"}
                  name={"companyName"}
                  style={{width:"100%"}}
                  value={formData.companyName}
                  placeholder="Company name"
                  onChange={e => setFormData({...formData,companyName:e.target.value})}
                  autoComplete="off" />              

              </WEForm.Row>

              {/* Customer Phone numbers row */}
              <WEForm.Row>
                
                <WEInput                   
                  id={"text_input_pn"}
                  style={{width:"100%"}}
                  name={"phoneNumber"}
                  value={formData.phoneNumber}
                  placeholder="Phone Number"
                  onChange={e => setFormData({...formData,phoneNumber:e.target.value})}
                  autoComplete="off" /> 

                <WEInput                   
                  id={"text_input_an"}
                  style={{width:"100%"}}
                  name={"altPhoneNumber"}
                  value={formData.altPhoneNumber}
                  placeholder="Alt Phone Number"
                  onChange={e => setFormData({...formData,altPhoneNumber:e.target.value})}
                  autoComplete="off" /> 

              </WEForm.Row>

              {/* Customer address row */}
              <WEForm.Row>

                <WEInput                   
                  id={"text_input_ad"}
                  style={{width:"100%"}}
                  name={"address"}
                  value={formData.address}
                  placeholder="123 Any Street"
                  onChange={e => setFormData({...formData,address:e.target.value})}
                  autoComplete="off" /> 

                <WEInput                   
                  id={"text_input_adt"}
                  style={{width:"100%"}}
                  name={"addressTwo"}
                  value={formData.addressTwo}
                  placeholder="Apt #"
                  onChange={e => setFormData({...formData,addressTwo:e.target.value})}
                  autoComplete="off" /> 

              </WEForm.Row>          

            
              {/* Customer state and city row */}
              <WEForm.Row>

                <WEInput                   
                  id={"text_input_ct"}
                  style={{width:"100%"}}
                  name={"city"}
                  value={formData.city}
                  placeholder="Any city"
                  onChange={e => setFormData({...formData,city:e.target.value})}
                  autoComplete="off" /> 

                <WEInput                   
                  id={"text_input_st"}
                  style={{width:"100%"}}
                  name={"state"}
                  value={formData.state}
                  placeholder="State"
                  onChange={e => setFormData({...formData,state:e.target.value})}
                  autoComplete="off" /> 

              </WEForm.Row>

              {/* Customer zipcode row */}
              <WEForm.Row>

                <WEInput                   
                  id={"text_input_zc"}
                  style={{width:"100%"}}
                  name={"zipcode"}
                  value={formData.zipcode}
                  placeholder="Zipcode"
                  onChange={e => setFormData({...formData,zipcode:e.target.value})}
                  autoComplete="off" /> 

                
                <input type='text' style={{width:"100%",visibility:"hidden"}} />

              </WEForm.Row>


          

              {/* FORM ACTION BUTTON */}
              <WEForm.Row style={{paddingTop:"1rem"}}>

                  <WEButton onClick={onCreateButtonClick} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:"1"}} type='solid'>
                    Create
                  </WEButton>
                  
                  <WEButton onClick={onCancelButtonClick} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:".25",borderColor:"#D6224668",backgroundColor:"transparent"}} type='solid'>
                    Cancel
                  </WEButton>

              </WEForm.Row>

            </WEForm>

          </div>

        </div>

      </div>
       
    </div>
  );
}

export default AddCustomerFormModal;
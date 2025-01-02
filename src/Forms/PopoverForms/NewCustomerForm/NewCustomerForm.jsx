import { useState } from 'react';

import styles from './newCustomerForm.module.css';
import WEForm from '../../WEForm/WEForm';
import WEInput from '../../../Components/WEInput/WEInput';
import WEButton from '../../../Components/WEButton/WEButton';
import axios from 'axios';

const NewCustomerForm = ({ closeForm,...props }) => {
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

    closeForm();
    
    // axios("https://localhost:7291/customer/create", {
    //   method: "post",
    //   data: formData,
    //   headers: {
    //       "Accept": "application/json",
    //       "Content-Type": "application/json"
    //   }
    // }).then((response) => {
      
    //   if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");              
    //   const {success,data,token} = response.data;
    //   if (success){              
    //     console.log(response.data);
    //     setFormData({
    //       companyName: "",
    //       phoneNumber: "",
    //       altPhoneNumber: "",
    //       address: "",
    //       addressTwo: "",
    //       state: "",
    //       zipcode: "",
    //       city: ""
    //     })
    //     return;
    //   }
    // })
    // .catch((error) => {
    //   // toast.error("Unable to login user",{
    //   //   position: toast.position.TOP_RIGHT,
    //   //   title: "Error"
    //   // })      
    // });
  }

  const onCancelButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
    closeForm();
  }

  return (
    <div className={styles.customer_po_form}>
       <div className={styles.form_heading}><h5>Create Customer</h5></div>
       <div className={styles.form_body}>
        <WEForm layout={"flex"}>
          
          {/* Company Name Row */}
          <WEForm.Row>

            <WEInput 
              size="sm"
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
              size="sm"
              id={"text_input_pn"}
              name={"phoneNumber"}
              value={formData.phoneNumber}
              placeholder="Phone Number"
              onChange={e => setFormData({...formData,phoneNumber:e.target.value})}
              autoComplete="off" /> 

            <WEInput 
              size="sm"
              id={"text_input_an"}
              name={"altPhoneNumber"}
              value={formData.altPhoneNumber}
              placeholder="Alt Phone Number"
              onChange={e => setFormData({...formData,altPhoneNumber:e.target.value})}
              autoComplete="off" /> 

          </WEForm.Row>

          {/* Customer address row */}
          <WEForm.Row>

            <WEInput 
              size="sm"
              id={"text_input_ad"}
              name={"address"}
              value={formData.address}
              placeholder="123 Any Street"
              onChange={e => setFormData({...formData,address:e.target.value})}
              autoComplete="off" /> 

            <WEInput 
              size="sm"
              id={"text_input_adt"}
              name={"addressTwo"}
              value={formData.addressTwo}
              placeholder="Apt #"
              onChange={e => setFormData({...formData,addressTwo:e.target.value})}
              autoComplete="off" /> 

          </WEForm.Row>          

         
          {/* Customer state and city row */}
          <WEForm.Row>

            <WEInput 
              size="sm"
              id={"text_input_ct"}
              name={"city"}
              value={formData.city}
              placeholder="Any city"
              onChange={e => setFormData({...formData,city:e.target.value})}
              autoComplete="off" /> 

            <WEInput 
              size="sm"
              id={"text_input_st"}
              name={"state"}
              value={formData.state}
              placeholder="MI"
              onChange={e => setFormData({...formData,state:e.target.value})}
              autoComplete="off" /> 

          </WEForm.Row>

          {/* Customer zipcode row */}
          <WEForm.Row>

            <WEInput 
              size="sm"
              id={"text_input_zc"}
              name={"zipcode"}
              value={formData.zipcode}
              placeholder="44444"
              onChange={e => setFormData({...formData,zipcode:e.target.value})}
              autoComplete="off" /> 

          </WEForm.Row>


      

          {/* FORM ACTION BUTTON */}
          <WEForm.Row style={{paddingTop:"1rem"}}>
            
              <WEButton onClick={onCreateButtonClick} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:"1"}} type='solid'>
                Create
              </WEButton>
              
              <WEButton onClick={onCancelButtonClick} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:".25",borderColor:"#D62246"}} type='solid'>
                Cancel
              </WEButton>

          </WEForm.Row>

        </WEForm>
       </div>
    </div>
  );
}

export default NewCustomerForm;
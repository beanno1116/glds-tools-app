import styles from './addCustomerModalView.module.css';
import customerGraphic from '../../../../../../../../../../assets/Images/customerGraphic.png';
import WEForm from '../../../../../../../../../../Forms/WEForm/WEForm';
import WEInput from '../../../../../../../../../../Components/WEInput/WEInput';
import WESelect from '../../../../../../../../../../Components/WESelect/WESelect';
import { useState } from 'react';
import WEButton from '../../../../../../../../../../Components/WEButton/WEButton';
import { states } from '../../../../../../../../../../Utilities';
import { request } from '../../../../../../../../../../Api/api';

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}


const AddCustomerModalView = ({ ...props }) => {
  const [formData,setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    address: "",
    addressTwo: "",
    city: "",
    state: [],
    zipcode: "",
    phoneNumber: "",
    altPhone: "",
    email: ""
  })

  const onCreateButtonClick = (e) => {

    

    let postData = {
      ...formData,
      companyName: formData.companyName ? formData.companyName : `${formData.firstName} ${formData.lastName}`,
      state: formData.state[0].value      
    }

    
    
    const resetFormData = (response) => {
      if (response.success){
        console.log("Success");
        setFormData({
          companyName: "",
          firstName: "",
          lastName: "",
          address: "",
          addressTwo: "",
          city: "",
          state: [],
          zipcode: "",
          phoneNumber: "",
          altPhone: "",
          email: ""       
        })
      }
    }

    // resetFormData({success:true});        
    request.post("customers/create",postData,headers,resetFormData);
  }

  const onCancelButtonClick = (e) => {
    setFormData({
      companyName: "",
      firstName: "",
      lastName: "",
      address: "",
      addressTwo: "",
      city: "",
      state: [],
      zipcode: "",
      phoneNumber: "",
      altPhone: "",
      email: ""       
    })
  }

  return (
    <div className={styles.view}>
    <div className={styles.container}>
      <div className={styles.layout}>
        
        <div className={styles.asthetics_col}>

          <div className={styles.form_heading}>
            <h1>Add A Customer</h1>
          </div>

          <img src={customerGraphic} className={styles.graphic} alt="cartoon graphic of documents and folders" />

        </div>

        <div className={styles.form_col}>

          <WEForm layout={"flex"} style={{width:"100%",height:"100%",gap:"1.5rem"}}>

              {/* Company Name Row */}
              <WEForm.Row>

                <WEInput           
                  id={"text_input_cn"}
                  name={"companyName"}
                  style={{flex:"1"}}
                  value={formData.companyName}
                  placeholder="Company name"
                  onChange={e => setFormData({...formData,companyName:e.target.value})}
                  autoComplete="off" />   

              </WEForm.Row>

              {/* Name Row */}
              <WEForm.Row>

                <WEInput           
                  id={"text_input_cn"}
                  name={"firstName"}
                  style={{flex:"1"}}
                  value={formData.firstName}
                  placeholder="First name"
                  onChange={e => setFormData({...formData,firstName:e.target.value})}
                  autoComplete="off" />   

                <WEInput           
                  id={"text_input_cn"}
                  name={"lastName"}
                  style={{flex:"1"}}
                  value={formData.lastName}
                  placeholder="Last name"
                  onChange={e => setFormData({...formData,lastName:e.target.value})}
                  autoComplete="off" />            

              </WEForm.Row>

              {/* Address Row */}
              <WEForm.Row>

                <WEInput           
                  id={"text_input_cn"}
                  name={"address"}
                  style={{flex:".6"}}
                  value={formData.address}
                  placeholder="Address"
                  onChange={e => setFormData({...formData,address:e.target.value})}
                  autoComplete="off" />   

                <WEInput           
                  id={"text_input_cn"}
                  name={"addressTwo"}
                  style={{flex:".4"}}
                  value={formData.addressTwo}
                  placeholder="Ste/Apt"
                  onChange={e => setFormData({...formData,addressTwo:e.target.value})}
                  autoComplete="off" />            

              </WEForm.Row>

              {/* City State Row */}
              <WEForm.Row>

                <WEInput           
                  id={"text_input_cn"}
                  name={"city"}
                  style={{flex:".6"}}
                  value={formData.city}
                  placeholder="City"
                  onChange={e => setFormData({...formData,city:e.target.value})}
                  autoComplete="off" />

                <WESelect 
                  name="state"
                  style={{flex:".25"}}
                  value={formData.state}                      
                  placeholder="State"
                  options={Object.keys(states).map((state,index) => {
                    return {id:index,value:state,label:state};
                  })}
                  isMulti={false}
                  isSearchable={false}
                  onChange={(e) => setFormData({...formData,state:e.target.value})} />  

                {/* <WEInput           
                  id={"text_input_cn"}
                  name={"state"}
                  style={{flex:".25"}}
                  value={formData.state}
                  placeholder="State"
                  onChange={e => setFormData({...formData,state:e.target.value})}
                  autoComplete="off" />  */}

                <WEInput           
                  id={"text_input_cn"}
                  name={"zipcode"}
                  style={{flex:".3.5"}}
                  value={formData.zipcode}
                  placeholder="Zipcode"
                  onChange={e => setFormData({...formData,zipcode:e.target.value})}
                  autoComplete="off" />            

              </WEForm.Row>

              {/* Phone number Row */}
              <WEForm.Row>

                <WEInput
                  id={"text_input_cn"}
                  name={"phoneNumber"}
                  style={{flex:"1"}}
                  value={formData.phoneNumber}
                  placeholder="Phone"
                  onChange={e => setFormData({...formData,phoneNumber:e.target.value})}
                  autoComplete="off" /> 

                <WEInput           
                  id={"text_input_cn"}
                  name={"altPhone"}
                  style={{flex:"1"}}
                  value={formData.altPhone}
                  placeholder="Alt phone"
                  onChange={e => setFormData({...formData,altPhone:e.target.value})}
                  autoComplete="off" />   

              </WEForm.Row>

              {/* Email Row */}
              <WEForm.Row>

                <WEInput           
                  id={"text_input_cn"}
                  name={"email"}
                  style={{flex:"1"}}
                  value={formData.email}
                  placeholder="Email"
                  onChange={e => setFormData({...formData,email:e.target.value})}
                  autoComplete="off" />   

              </WEForm.Row>

               <WEForm.Row flex={1}></WEForm.Row>

              {/* FORM ACTION BUTTON */}
              <WEForm.Row style={{paddingTop:"1rem"}}>

                <WEButton onClick={onCreateButtonClick} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:"1"}} type='solid'>
                  Create
                </WEButton>
                
                <WEButton onClick={onCancelButtonClick} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:".25",borderColor:"#D6224668",backgroundColor:"transparent"}} type='solid'>
                  Reset
                </WEButton>

              </WEForm.Row>

          </WEForm>
          
        </div>

      </div>
    </div>
  </div>
  );
}

export default AddCustomerModalView;
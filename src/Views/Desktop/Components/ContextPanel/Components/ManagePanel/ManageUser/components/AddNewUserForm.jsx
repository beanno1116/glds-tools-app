import {useState} from 'react';
import styles from '../manageUserPanel.module.css';
import WEInput from "../../../../../../../../Components/WEInput/WEInput";
import WESelect from "../../../../../../../../Components/WESelect/WESelect";
import WEButton from '../../../../../../../../Components/WEButton/WEButton';
import axios from 'axios';
import { request } from '../../../../../../../../Api/api';

const userLevels = [
  {
    id: 0,
    value: "administrator",
    label: "Administrator"
  },
  {
    id: 1,
    value: "service",
    label: "Service"
  },
  {
    id: 2,
    value: "manager",
    label: "Manager"
  },
  {
    id: 3,
    value: "developer",
    label: "Developer"
  },
]

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

const AddNewUserForm = ({...props}) => {  
  const [formData,setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",    
    title: "",
    phone: "",
    password: "",
    authLevel: [],
    token: "12345"
  })

  const formSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    formData.userName = formData.email;    
    let postData = {...formData,authLevel:formData.authLevel[0].id.toString()}         
    // if (formData.email === "" || formData.password === "" || formData.firstName === "" || formData.lastName === "" || formData.authLevel === "") return;

    const resetFormData = (response) => {
      try {
        if (response.success){
          console.log("Added new user successfully");
          setFormData({
            userName: "",
            firstName: "",
            lastName: "",
            email: "",    
            title: "",
            phone: "",
            password: "",
            authLevel: [],
            token: ""
          })
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    request.post("users/create",postData,headers,resetFormData);

  }

  // 67529ce9-8c0d-46b7-bfc3-c1805f57b7b6
  return (
    <form className={styles.add_user_form}>

      {/* FIRST NAME INPUT */}
      <div className={styles.add_user_form_row}>
        <WEInput 
          size="sm"
          id={"text_input_fn"}
          name="firstName"
          value={formData.firstName}
          placeholder="First Name"
          onChange={e => setFormData({...formData,firstName:e.target.value})}
          autoComplete="off"
          style={{width:"100%"}} />
        
      </div>

      {/* LAST NAME INPUT */}
      <div className={styles.add_user_form_row}>

        <WEInput 
            size="sm"
            id={"text_input_ln"}
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name"
            onChange={e => setFormData({...formData,lastName:e.target.value})}
            autoComplete="off"
            style={{width:"100%"}} />

      </div>

      {/* EMAIL INPUT */}
      <div className={styles.add_user_form_row}>
        
          <WEInput 
          size="sm"
          id={"text_input_em"}
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={e => setFormData({...formData,email:e.target.value})}
          autoComplete="off"
          style={{width:"100%"}} />

      </div>

      {/* PHONE INPUT */}
      <div className={styles.add_user_form_row}>
        
        <WEInput 
            size="sm"
            id={"text_input_ph"}
            name="phone"
            value={formData.phone}
            placeholder="Phone"
            onChange={e => setFormData({...formData,phone:e.target.value})}
            autoComplete="off"
            style={{width:"100%"}} />

      </div>

      {/* JOB TITLE INPUT */}
      <div className={styles.add_user_form_row}>
          
        <WEInput 
            size="sm"
            id={"text_input_tl"}
            name="title"
            value={formData.title}
            placeholder="Job Title"
            onChange={e => setFormData({...formData,title:e.target.value})}
            autoComplete="off"
            style={{width:"100%"}} />

      </div>

      {/* TEMP PASSWORD INPUT */}
      <div className={styles.add_user_form_row}>
        <WEInput 
            size="sm"
            id={"text_input_tp"}
            name="password"
            value={formData.password}
            placeholder="Temp Password"
            onChange={e => setFormData({...formData,password:e.target.value})}
            autoComplete="off"
            style={{width:"100%"}} />
      </div>
      
      {/* USER LEVEL SELECT INPUT */}
      <div className={styles.add_user_form_row}>
        <WESelect 
          name="authLevel"
          value={formData.authLevel}
          placeholder="Choose User Level"
          options={userLevels}
          isMulti={false}
          isSearchable={false}
          onChange={e => setFormData({...formData,authLevel:e.target.value})} />

      </div>

      {/* FORM SUBMIT BUTTON INPUT */}
      <div className={styles.add_user_form_row}>
        <WEButton onClick={formSubmit} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem"}} type='solid'>
          Create
        </WEButton>
      </div>

    </form>
  )
}

export default AddNewUserForm;
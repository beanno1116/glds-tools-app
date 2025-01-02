import {useState} from 'react';
import styles from '../manageUserPanel.module.css';
import WEInput from "../../../../../../../../Components/WEInput/WEInput";
import WESelect from "../../../../../../../../Components/WESelect/WESelect";
import WEButton from '../../../../../../../../Components/WEButton/WEButton';


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





const DeleteUserForm = ({ users }) => {  
  const [formData,setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",    
    title: "",
    phone: "",
    password: "",
    authLevel: "0",
    token: "12345"
  })
  
  const [selectedUser,setSelectedUser] = useState([]);

  const filterOnChangeEvent = (e) => {
    try {      
      setSelectedUser(e.target.value);
      let selectItem = e.target.value[0];
      let userItem = users.filter(u => u.uid === selectItem.value);
      let user = userItem[0];      
      
      const formUser = {
        userName: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,    
        title: user.title,
        password: "",
        authLevel: userLevels.filter(ul => ul.id.toString() === user.authLevel.toString()),
        token: "12345"
      }
      setFormData({...formUser});      
    } catch (error) {
      console.error(error.message);
    }
  }

  const formSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    formData.userName = formData.email;    
    let tmp = selectedUser;
    
    // axios("https://localhost:7291/user/delete", {
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
    //       userName: "",
    //       firstName: "",
    //       lastName: "",
    //       email: "",    
    //       title: "",
    //       password: "",
    //       authLevel: "0",
    //       token: "12345"
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

  
  return (

    <form className={styles.add_user_form}>

      <div className={styles.add_user_form_row}>        

        <WESelect 
          name="selectedUser"
          value={selectedUser}
          placeholder="Choose User"
          options={users.map(u => {            
            return {id:u.uid,value:u.uid,label:u.username}
          })}
          isMulti={false}
          isSearchable={true}
          onChange={e => filterOnChangeEvent(e)} />

      </div>

      <div className={styles.add_user_form_row}>
        <WEInput 
          size="sm"
          disabled={true}
          id={"text_input_fn"}
          name="firstName"
          value={formData.firstName}
          placeholder="First Name"
          onChange={e => setFormData({...formData,firstName:e.target.value})}
          autoComplete="off"
          style={{width:"100%"}} />
        
      </div>

      <div className={styles.add_user_form_row}>

        <WEInput 
            size="sm"
            disabled={true}
            id={"text_input_ln"}
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name"
            onChange={e => setFormData({...formData,lastName:e.target.value})}
            autoComplete="off"
            style={{width:"100%"}} />

      </div>

      <div className={styles.add_user_form_row}>
        
          <WEInput 
          size="sm"
          disabled={true}
          id={"text_input_em"}
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={e => setFormData({...formData,email:e.target.value})}
          autoComplete="off"
          style={{width:"100%"}} />

      </div>

      <div className={styles.add_user_form_row}>
        
        <WEInput 
            size="sm"
            disabled={true}
            id={"text_input_ph"}
            name="phone"
            value={formData.phone}
            placeholder="Phone"
            onChange={e => setFormData({...formData,phone:e.target.value})}
            autoComplete="off"
            style={{width:"100%"}} />

      </div>

      <div className={styles.add_user_form_row}>
          
        <WEInput 
            size="sm"
            disabled={true}
            id={"text_input_tl"}
            name="title"
            value={formData.title}
            placeholder="Job Title"
            onChange={e => setFormData({...formData,title:e.target.value})}
            autoComplete="off"
            style={{width:"100%"}} />

      </div>

      
      <div className={styles.add_user_form_row}>
        <WESelect 
          name="authLevel"
          disabled={true}
          editable={false}
          value={formData.authLevel}
          placeholder="Choose User Level"
          options={userLevels}
          isMulti={false}
          isSearchable={false}
          onChange={e => setFormData({...formData,authLevel:e.target.value})} />

      </div>

      <div className={styles.add_user_form_row}>
        <WEButton onClick={formSubmit} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",backgroundColor:"red"}} type='solid'>
          Delete
        </WEButton>
        {/* <button type='submit' style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",backgroundColor:"red"}} onClick={formSubmit}>Delete</button> */}
      </div>

    </form>
  )
}

export default DeleteUserForm;
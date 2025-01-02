import { useState } from 'react';
import WEButton from '../../../Components/WEButton/WEButton';
import WEInput from '../../../Components/WEInput/WEInput';
import WEForm from '../../../Forms/WEForm/WEForm';
import styles from '../userModal.module.css';
import WESelect from '../../../Components/WESelect/WESelect';
import graphic1 from '../../../assets/Images/addUserGraphic.png';


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


const AddUserForm = ({ onSubmit,...props }) => {
  const [formData,setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",    
    title: "",
    phone: "",
    password: "",
    authLevel: [],
    type: []    
  })

  const onCreateButtonClick = (e) => {
    try {
      if (onSubmit) {
        onSubmit(e,formData);
      }
    } catch (error) {
      console.error(`[AddUserForm]Error: onCreateButtonClick: ${error.message}`);
    }
  }

  const onCancelButtonClick = (e) => {
    onSubmit(e)    
  }

  

  return (
    <div className={styles.add_user_form_container}>

      <div className={styles.form_body}>

        <div className={styles.asthetics_grid_item}>

          <div className={styles.form_heading}>
            <h1>Create A User</h1>
          </div>

          <img src={graphic1} className={styles.graphic} alt="cartoon graphic of man with different screens" />

        </div>

        <div className={styles.form_grid_item}>


          <h2>User Information</h2>

          <WEForm layout={"flex"} style={{width:"100%",gap:"2rem"}}>
                  
            {/* Company Name Row */}
            <WEForm.Row>

              <WEInput                   
                id={"text_input_fn"}
                name={"firstName"}
                style={{width:"100%"}}
                value={formData.firstName}
                placeholder="First name"
                onChange={e => setFormData({...formData,firstName:e.target.value})}
                autoComplete="off" />

              <WEInput
                id={"text_input_ln"}
                style={{width:"100%"}}
                name={"lastName"}
                value={formData.lastName}
                placeholder="Last name"
                onChange={e => setFormData({...formData,lastName:e.target.value})}
                autoComplete="off" /> 

            </WEForm.Row>

            {/* Customer Phone numbers row */}
            <WEForm.Row>
              
              <WEInput                   
                id={"text_input_em"}
                style={{width:"100%"}}
                name={"email"}
                value={formData.email}
                placeholder="Email"
                onChange={e => setFormData({...formData,email:e.target.value})}
                autoComplete="off" /> 

              <WEInput                   
                id={"text_input_pn"}
                style={{width:"100%"}}
                name={"phoneNunber"}
                value={formData.altPhoneNumber}
                placeholder="Phone number"
                onChange={e => setFormData({...formData,phoneNumber:e.target.value})}
                autoComplete="off" /> 

            </WEForm.Row>

            {/* Customer address row */}
            <WEForm.Row>

              <WESelect
                name="authLevel"
                value={formData.authLevel}
                placeholder="Choose User Level"
                options={userLevels}
                isMulti={false}
                isSearchable={false}
                onChange={e => setFormData({...formData,authLevel:e.target.value})} />

              <WESelect
                name="authLevel"
                value={formData.type}
                placeholder="Choose User Type"
                options={userLevels}
                isMulti={false}
                isSearchable={false}
                onChange={e => setFormData({...formData,type:e.target.value})} />

            </WEForm.Row>          

              
            {/* Temporary Password row */}
            <WEForm.Row>

              <WEInput                     
                id={"text_input_pw"}
                name="password"
                value={formData.title}
                placeholder="Title"
                onChange={e => setFormData({...formData,title:e.target.value})}
                autoComplete="off"
                style={{width:"100%"}} />

              <WEInput                     
                id={"text_input_pw"}
                name="password"
                value={formData.password}
                placeholder="Temp Password"
                onChange={e => setFormData({...formData,password:e.target.value})}
                autoComplete="off"
                style={{width:"100%"}} />

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
  );
}

export default AddUserForm;
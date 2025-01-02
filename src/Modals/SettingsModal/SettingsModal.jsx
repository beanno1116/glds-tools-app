import styles from './settingsModal.module.css';
import passwordGraphic from '../../assets/Images/passwordGraphic.png';
import WEInput from '../../Components/WEInput/WEInput';
import WEButton from '../../Components/WEButton/WEButton';
import { useState } from 'react';
import TextField from '../../Components/Inputs/TextField';
import PasswordTextField from '../../Components/Inputs/PasswordTextField';
import { useAuth } from '../../hooks/useAuth';
import { request } from '../../Api/api';

const headers = {
  
  'Content-Type': 'application/json' 
}

const SettingsModal = ({ toggle,...props }) => {
  const auth = useAuth();
  const [formData,setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword:""
  })
//asdfg
  const onSubmit = (e) => {
    let tmp = auth;    
    if ((formData.confirmPassword === formData.newPassword) && formData.currentPassword !== ""){
      const postData = {
        password: formData.newPassword,
        uid: auth.user.uid,
        currentPassword: formData.currentPassword
      }
      request.post('auth/reset',postData,headers,()=>{});
    }        
  }
  const onCancelButtonClick = (e) => {
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword:""
    });
    toggle();
  }
  return (
    <div className={styles.settings_modal}>

      <div className={styles.user_security_modal}>

        <div className={styles.modal_title}>
          <h2>Password Reset</h2>
        </div>

        <div className={styles.modal_grid}>

          <div className={styles.modal_graphic_container}>
            <img src={passwordGraphic} className={styles.graphic} alt="cartoon graphic of documents and folders" />            
          </div>

          <form className={styles.modal_form_container}>

            <div className={styles.modal_form_row}>
              <label>User:</label>
              <span>benk@glds.net</span>
            </div>

            <div className={styles.modal_form_row}>
              
              <PasswordTextField
                name={"currentPassword"}
                style={{width:"100%"}}
                value={formData.currentPassword}
                onChange={e => setFormData({...formData,currentPassword:e.target.value})}
                placeholder="Current Password"/>
            </div>

            <div className={styles.modal_form_row}>
              <PasswordTextField
                name={"newPassword"}
                style={{width:"100%"}}
                value={formData.newPassword}
                onChange={e => setFormData({...formData,newPassword:e.target.value})}
                placeholder="New Password"/>
            </div>

            <div className={styles.modal_form_row}>
              <PasswordTextField
                name={"confirmPassword"}
                style={{width:"100%"}}
                value={formData.confirmPassword}
                onChange={e => setFormData({...formData,confirmPassword:e.target.value})}
                placeholder="Confirm Password"/>
            </div>

            <div className={styles.modal_form_row}>
              <WEButton onClick={onSubmit} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:"1"}} type='solid'>
                Reset Password
              </WEButton>
              <WEButton onClick={onCancelButtonClick} style={{width:"100%",padding:".75rem .5rem",fontSize:"1.25rem",flex:"1"}} type='solid'>
                Cancel
              </WEButton>              
            </div>

          </form>
        </div>

      </div>

    </div>
  );
}

export default SettingsModal;
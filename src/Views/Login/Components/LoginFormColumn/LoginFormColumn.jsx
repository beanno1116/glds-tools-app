import { useRef,useEffect, useState } from 'react';

// import './LoginFormColumn.css';
import styles from './loginFormColumn.module.css';
import { useAuth } from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import TextField from '../../../../Components/Inputs/TextField';
import PasswordTextField from '../../../../Components/Inputs/PasswordTextField';



function LoginFormColumn() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    userName: "",
    password: ""
  })

  const navigateToView = (view) => {
    switch (view) {
      case "/":
        navigate("/");        
        break;
      case "login":
        navigate("/login");
        break;    
      default:
        navigate("/login");
        break;
    }
  }


 


    const handleOnSubmit = (e) => {
        e.preventDefault();
       
        if(formData.userName === "" || formData.password === "") return;
       
        auth.loginAction(e,formData,navigateToView);

    }

    const onInputChange = (e,name) => {
      setFormData(fd => ({...fd,[name]:e.target.value}));
    }
    
  return (
    <div className={styles.loginFormCol}>

      <form autoComplete="off" className={styles.flogin} name="fLogin" onSubmit={handleOnSubmit}>

        <div className={styles.form_row}>
          <TextField value={formData.userName} name="email" id="email-tf" onChange={e => onInputChange(e,"userName")} placeholder="Email" required />          
          {/* <label htmlFor="email-tf" className={styles.form_label}>Email:</label> */}
          {/* <input type="email" className={styles.form_textfield} name="email" value={formData.userName} onChange={e => onInputChange(e,"userName")} id="email-tf" placeholder='email@mail.com'/> */}
          <div className="error_msg hide"><span>Must enter valid user email</span></div>
        </div>

        <div className={styles.form_row}>
          <PasswordTextField value={formData.password} onChange={e => onInputChange(e,"password")} name="password" id="pwd-tf" placeholder="Password" />
          {/* <label htmlFor="pwd-tf" className={styles.form_label}>Password:</label>
          <input type="password" className={styles.form_textfield} value={formData.password} onChange={e => onInputChange(e,"password")} name="password" id="pwd-tf" /> */}
          <div className="error_msg hide"><span>Must enter a password</span></div>
        </div>

        <div className={styles.form_row}>
          <div className={styles.loginBtnRow}>                    
            <button  type="submit" className={styles.form_button} >Login</button>                    
          </div>
        </div>   

      </form>

    </div>
  );
}

export default LoginFormColumn;
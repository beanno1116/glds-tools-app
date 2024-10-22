import { useRef,useEffect, useState } from 'react';

// import './LoginFormColumn.css';
import styles from './loginFormColumn.module.css';
import { useAuth } from '../../../../hooks/useAuth';



function LoginFormColumn() {
  const auth = useAuth();
  const [formData,setFormData] = useState({
    userName: "",
    password: ""
  })


    // useEffect(() => {
    //     emailTFRef.current.focus();
    // },[]);
    
   
    // function validateField(e){
    //     console.log(e.target);
    //     if (e.target.value === "") {
    //         if (e.target.id === 'email-tf') {
    //             emailTFRef.current.classList.add('error');
    //             emailErr.current.style.display = "block";
    //             emailErr.current.classList.remove("hide");
    //             emailTFRef.current.focus();
    //             return;
    //         }
    //         passTFRef.current.classList.add('error');
    //         passErr.current.style.display = "block";
    //         passErr.current.classList.remove('hide');
    //         passTFRef.current.focus();
    //     }
    // }
    const formClearAction = () => {
        // emailTFRef.current.value = "";
        // passTFRef.current.value = "";
        // emailTFRef.current.focus();
    }

    // const setLoginState = (result) => {
    //     setSession(result.session);
    //     setUserId(result.uid);
    //     setPrivilage(result.isAdmin);
    //     return {
    //         sid: result.session,
    //         isAdmin: result.isAdmin,
    //         uid: result.uid
    //     }
    // }

    const handleOnSubmit = (e) => {
        e.preventDefault();
       
        if(formData.userName === "" || formData.password === "") return;
       
        auth.loginAction(e,formData);
   
        // let fd = createFormDataObj({
        //     action: 'login',
        //     email:emailTFRef.current.value,
        //     password:passTFRef.current.value
        // });
        // fetch(window.API_URL, {
        //                 method: 'POST',
        //                 body: fd
        //         })
        //         .then(response => response.json())
        //         .then(result => {
        //             if(result.success === true){
        //                 // dispatch({type:"user",payload:setLoginState(result)});
        //                 // if (result.isAdmin === 'Y'){
        //                 //     formAction('admin');
        //                 //     return;
        //                 // }
        //                 // formAction('app');
        //                 // return;   
        //             }
        //             formClearAction();
        //         })
        //         .catch(error => {
        //                 console.error('Error:',error);
        //         });
        
    }

    const onInputChange = (e,name) => {
      setFormData(fd => ({...fd,[name]:e.target.value}));
    }
    
  return (
    <div className={styles.loginFormCol}>

      <form autoComplete="off" className={styles.flogin} name="fLogin" onSubmit={handleOnSubmit}>

        <div className={styles.form_row}>
          <label htmlFor="email-tf" className={styles.form_label}>Email:</label>
          <input type="email" className={styles.form_textfield} name="email" value={formData.userName} onChange={e => onInputChange(e,"userName")} id="email-tf" placeholder='email@mail.com'/>
          <div className="error_msg hide"><span>Must enter valid user email</span></div>
        </div>

        <div className={styles.form_row}>
          <label htmlFor="pwd-tf" className={styles.form_label}>Password:</label>
          <input type="password" className={styles.form_textfield} value={formData.password} onChange={e => onInputChange(e,"password")} name="password" id="pwd-tf" />
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
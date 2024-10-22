import { useRef,useEffect } from 'react';


import byGLDS from '../../../../images/byglds.png';
import './BottomGridContent.css'


const BottomGridContent = ({ formAction }) => {
    
    let emailTFRef = useRef(null);
    let emailErr = useRef(null);
    let passTFRef = useRef(null);
    let passErr = useRef(null);

    useEffect(() => {
        emailTFRef.current.focus();
    },[]);
    
   
    function validateField(e){
        console.log(e.target);
        if (e.target.value === "") {
            if (e.target.id === 'email-tf') {
                emailTFRef.current.classList.add('error');
                emailErr.current.style.display = "block";
                emailErr.current.classList.remove("hide");
                emailTFRef.current.focus();
                return;
            }
            passTFRef.current.classList.add('error');
            passErr.current.style.display = "block";
            passErr.current.classList.remove('hide');
            passTFRef.current.focus();
        }
    }
    const formClearAction = () => {
        emailTFRef.current.value = "";
        passTFRef.current.value = "";
        emailTFRef.current.focus();
    }

    const setLoginState = (result) => {
        // setSession(result.session);
        // setUserId(result.uid);
        // setPrivilage(result.isAdmin);
        return {
            sid: result.session,
            isAdmin: result.isAdmin,
            uid: result.uid
        }
    }

    const formLoginAction = (e) => {
        e.preventDefault();
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
        //                 dispatch({type:"user",payload:setLoginState(result)});
        //                 if (result.isAdmin === 'Y'){
        //                     formAction('admin');
        //                     return;
        //                 }
        //                 formAction('app');
        //                 return;   
        //             }
        //             formClearAction();
        //         })
        //         .catch(error => {
        //                 console.error('Error:',error);
        //         });
    }

    return (
        <div className="bottom__grid__content">
        <form autoComplete="off" className="flogin" name="fLogin" onSubmit={formLoginAction}>
            <div className="mb-3">
                <label htmlFor="email-tf" className="form-label">Email</label>
                <input ref={emailTFRef} type="email" className="form-control" name="email" id="email-tf" />
                <div ref={emailErr} className="error_msg hide"><span>Must enter valid user email</span></div>
            </div>
            <div className="mb-3">
                <label htmlFor="pwd-tf" className="form-label">Password</label>
                <input ref={passTFRef} type="password" className="form-control" datasrc="true" name="password" id="pwd-tf" />
                <div ref={passErr} className="error_msg hide"><span>Must enter a password</span></div>
            </div>
            <div className="mb-3">
                <div className="login-btn-row">
                    <button id="submit-btn" type="submit" className="btn btn-success glds-btn" onClick={formLoginAction}>Login</button>
                    <button id="clear-btn" type="button" className="btn btn-primary glds-btn" onClick={formClearAction}>Clear</button>
                </div>
            </div>            
        </form>
        <div className='glds__logo__container'>
            <img src={byGLDS} className="glds-logo" />
        </div>
    </div>
    );
};

export default BottomGridContent;
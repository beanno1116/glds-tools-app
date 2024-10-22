import { useContext,createContext, useState, useCallback } from "react";
import axios from "axios";
import { useMutation, useQuery } from "react-query";


let debug = false;

const endpoints = ((debug) => {
  if (debug){
    return {
      login: "http://localhost:5295/dashboard/login",
      auth: "http://localhost:5295/dashboard/auth"
    }
  }
  return {
    login: "https://auth.gldstools.com/dashboard/login",
    auth: "https://auth.gldstools.com/dashboard/auth"
  }
})(debug);



const store = {
  getValue(key){
    try {
      if (key.length === 0) throw new Error("No key provided");
      let value = localStorage.getItem(key);
      if (value){
        return JSON.parse(value);
      }  
      return {}
    } catch (error) {
      console.error(error.message);
    }
  },
  setValue(key,value){
    try {
      if (key.length === 0 || !value) throw new Error("No key or value provided");
      localStorage.setItem(key,JSON.stringify(value));
    } catch (error) {
      console.error(error.message);
    }
  }
}

const headers = {
  
  'Content-Type': 'application/json' 
}


const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user,setUser] = useState({});
  const [token,setToken] = useState("");
  const [isAuthenticating,setIsAuthenticating] = useState(true);
  // const [user,setUser] = useState(store.getValue("app")?.user || {});
  // const [token,setToken] = useState(store.getValue("app")?.token || "");
  const [isAuthenticated,setIsAuthenticated] = useState(true);

  const loginAction = useCallback((e,formData) => {
    
    let url = endpoints.login;

    axios(url, {
      method: "post",
      data: formData,
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
  }).then((response) => {      
      if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");              
      const {success,data,token} = response.data;
      if (success){                
        setToken(token);        
        setUser({...data});
        setIsAuthenticated(true);
        store.setValue("auth",{token:token});
        return;
      }
      // toast.error("Unable to login user",{
      //   position: toast.position.TOP_RIGHT,
      //   title: "Error"
      // })
    })
    .catch((error) => {
      // toast.error("Unable to login user",{
      //   position: toast.position.TOP_RIGHT,
      //   title: "Error"
      // })      
    });    
  },[setToken,setUser])

  const logoutAction = useCallback((e) => {
    // setToken("");
    // setUser({})
    // store.setValue("app",{token:"",user:{}});
  },[setToken,setUser])

  const signupAction = useCallback((e,formData,isValid) => {
    // if (!isValid) return;
      
    // let fd = createFormDataObj({...formData,action:"signup"});    

    // axios.post(API_ENDPOINT,fd,{headers})
    // .then((response) => {
    //   if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");              
    //   const {success,data,message} = response.data;
    //   if (success){
    //     const {id,firstName,lastName,color} = data;
    //     setToken(id);        
    //     setUser({firstName:firstName,lastName:lastName,color:color});
    //     store.setValue("app",{token:id,user:{firstName:firstName,lastName:lastName,color:color}}); 
    //     return;               
    //   }
    //   toast.error("Unable to signup user",{
    //     position: toast.position.TOP_RIGHT,
    //     title: "Error"
    //   }) 
    // })
    // .catch((error) => {
    //   toast.error("Unable to signup user",{
    //     position: toast.position.TOP_RIGHT,
    //     title: "Error"
    //   }) 
    //   console.error(error);
    // }); 
            
  },[setToken,setUser])

  const verifyAuthentication = useCallback(() => {
    setIsAuthenticating(true);
    let token = getToken();
    console.log(token);
    

    let url = endpoints.auth;

    axios(url, {
      method: "post",
      data: {token},
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
  }).then((response) => {
      debugger;
      if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");              
      const {success,data,token} = response.data;
      if (success){                
        setToken(token);
        setIsAuthenticated(true);
        // store.setValue("app",{token:token,user:{...data}});
        setIsAuthenticating(false);
        return;
      }
      setToken("");
      setIsAuthenticated(false);
      setIsAuthenticating(false);
      // toast.error("Unable to login user",{
      //   position: toast.position.TOP_RIGHT,
      //   title: "Error"
      // })
    })
    .catch((error) => {
      // toast.error("Unable to login user",{
      //   position: toast.position.TOP_RIGHT,
      //   title: "Error"
      // })      
    }); 
  },[])


  const getToken = () => {
    try {
      if (!token) {
        let lsAuthObj = store.getValue("auth") || {};
        if ('token' in lsAuthObj) {
          return lsAuthObj.token;
        }
        return "";
      }
      return token;
    } catch (error) {
      console.error(error.message);
    }
  }
  


  return  <AuthContext.Provider value={{token,user,isAuthenticating,isAuthenticated,loginAction,logoutAction,signupAction,verifyAuthentication}}>
            {children}
          </AuthContext.Provider>
}





export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);  
}


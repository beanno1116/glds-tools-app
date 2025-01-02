import { useContext,createContext, useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import WEEncrypt from "../Utilities/WEEncrypt";
import { useNavigate } from "react-router-dom";
import { request } from "../Api/api";



let debug = false;

const endpoints = ((debug) => {
  if (debug){
    return {
      login: "https://localhost:7291/login",
      auth: "https://localhost:7291/auth"
      // auth: "https://localhost:7229/auth"
    }
  }
  return {
    login: "https://data.gldstools.com/login",
    auth: "https://data.gldstools.com/auth"
  }
})(debug);


const tokenStore = {
  setToken(token){
    try {
      if (!token) throw new Error("No value provided");
      localStorage.setItem("b",token);
    } catch (error) {
      console.error(error.message);
    }
  },
  getToken(){
    try {
      let token = localStorage.getItem("b");      
      return token;
    } catch (error) {
      console.error(error.message);
    }
  }
}

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
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  


  useEffect(() => {
    // verifyAuthentication();
  },[])

  const loginAction = useCallback((e,formData,navigate) => {
    
    // let url = endpoints(debug).login;

    const handleLoginActionResponse = (response) =>{
      try {        
        if (response.success){              
          setToken(response.token);        
          setUser({...response.data});
          setIsAuthenticated(true); 
          setIsAuthenticating(false);       
          tokenStore.setToken(response.token); 
          navigate("/");         
          return;
        }
        navigate("/login");
        return;
      } catch (error) {
        console.error(error.message);
      }
    }


    request.post("login",formData,{"Accept": "application/json","Content-Type": "application/json"},handleLoginActionResponse);
      
  },[setToken,setUser])

  const logoutAction = useCallback((uid,navigate) => {
    setIsAuthenticated(false);
    setIsAuthenticating(false);
    setToken("");
    setUser({});
    tokenStore.setToken("");
    navigate("login");
  },[])

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

  const verifyAuthentication = useCallback((navigate) => {

    let token = getToken();
    

    const handleAuthenticationResponse = (response) => {
      try {
        debugger;
        if (response.success){                
          setToken(token);
          setIsAuthenticated(true);
          setUser({...response.data})
          setIsAuthenticating(false);
          tokenStore.setToken(token);
          navigate("/");
          return;
        }
        setToken("");
        setIsAuthenticated(false);
        setIsAuthenticating(false);
        navigate("/login");
      } catch (error) {
        console.error(error.message);
      }
    }

    

    if (isAuthenticating){
      request.post("auth",{token:token},{"Accept": "application/json","Content-Type": "application/json"},handleAuthenticationResponse)
    //   // axios("https://data.gldstools.com/auth", {
    //   axios("https://localhost:7291/auth", {
    //     method: "post",
    //     data: {token},
    //     headers: {
    //         "Accept": "application/json",
    //         "Content-Type": "application/json"
    //     }
    // }).then((response) => {
    //     if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");              
    //     const {success,data,token} = response.data;
    //     if (success){                
    //       setToken(token);
    //       setIsAuthenticated(true);
    //       setUser({...data})
    //       setIsAuthenticating(false);
    //       tokenStore.setToken(token);
    //       navigate("/");
    //       return;
    //     }
    //     setToken("");
    //     setIsAuthenticated(false);
    //     setIsAuthenticating(false);
    //     navigate("/login");
    //     // toast.error("Unable to login user",{
    //     //   position: toast.position.TOP_RIGHT,
    //     //   title: "Error"
    //     // })
        
    //   })
    //   .catch((error) => {
    //     // toast.error("Unable to login user",{
    //     //   position: toast.position.TOP_RIGHT,
    //     //   title: "Error"
    //     // })      
    //   }); 
    }
    
  },[])


  

  const getToken = () => {
    try {
      if (!token) {
        let lsToken = tokenStore.getToken();        
        if (lsToken) {
          return lsToken;
        }
        return "";
      }
      return token;
    } catch (error) {
      console.error(error.message);
    }
  }
  


  return  <AuthContext.Provider value={{
                                          token,
                                          user,
                                          isAuthenticating,
                                          isAuthenticated,
                                          loginAction,
                                          logoutAction,
                                          signupAction,
                                          verifyAuthentication
                                        }}>
            {children}
          </AuthContext.Provider>
}





export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);  
}


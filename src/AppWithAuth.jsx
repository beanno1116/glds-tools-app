import React from 'react';
import { useAuth } from './hooks/useAuth';
import App from './App';



const AppWithAuth = ({ ...props }) => {
  const auth = useAuth();

  if (auth.isAuthenticating){
    return (
      <div style={{backgrounColor:"#ffffff",width:"100vw",height:"100vh",color:"#000000",zIndex:"999"}}>Loading...</div>
    )
  }
  return (
    <App />    
  );
}

export default AppWithAuth;
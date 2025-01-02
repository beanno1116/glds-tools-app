import { useEffect } from 'react';


import { useAuth } from '../hooks/useAuth';
import { Navigate, useNavigate} from 'react-router-dom';



const useAppWithAuthentication = () => {
  const auth = useAuth();
  const navigate = useNavigate();

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

  useEffect(() => {
    // auth.verifyAuthentication(navigateToView);
  },[])

  return auth;
}

const AuthView = ({ redirect,View }) => {
  const auth = useAppWithAuthentication();
  if (auth.isAuthenticated) {
    return View;
  }
  return <Navigate to={redirect} replace={true} />
}

export default AuthView;
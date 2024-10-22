


import { useAuth } from '../hooks/useAuth';
import { Navigate} from 'react-router-dom';

const AuthView = ({ path,View }) => {
  const auth = useAuth();
 
  if (auth.isAuthenticated) {
    return View;
  }
  return <Navigate to="login" replace={true} />
}

export default AuthView;
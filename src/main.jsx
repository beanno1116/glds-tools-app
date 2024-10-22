import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import LoginView from './Views/Login/LoginView.jsx'
import Desktop from './Views/Desktop/Desktop.jsx'
import AuthView from './Views/AuthView.jsx'
import AuthProvider from './hooks/useAuth.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element: <AuthView path={"login"} View={<Desktop />} />
  },
  {
    path:"login",
    element:<LoginView />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

      <RouterProvider router={router}/>
      
    </AuthProvider>
    
  </StrictMode>,
)

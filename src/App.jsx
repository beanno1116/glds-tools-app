import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import LoginView from './Views/Login/LoginView'
import AuthView from './Views/AuthView'
import Desktop from './Views/Desktop/Desktop'
import { useEffect } from 'react'
import { useAuth } from './hooks/useAuth'




function App() {  
  const auth = useAuth();
  
  const router = createBrowserRouter([
    {
      path:"/",
      element: <AuthView redirect={"login"} View={<Desktop />} />
    },
    {
      path:"login",
      element:<LoginView />
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import AuthProvider, { useAuth } from './hooks/useAuth.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();
// 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>      
        <App />
      </QueryClientProvider>
    </AuthProvider>   
  </StrictMode>,
)

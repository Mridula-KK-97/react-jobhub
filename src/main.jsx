import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from './context/UserContext.jsx'
import { JobProvider } from './context/JobContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <JobProvider>
    <UserProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </UserProvider>
    </JobProvider>
  </BrowserRouter>
  
)

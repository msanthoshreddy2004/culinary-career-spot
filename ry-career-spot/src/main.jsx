import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Landing from './pages/Landing.jsx'
import Login from './pages/auth/Login.jsx'
import Signup from './pages/auth/Signup.jsx'
import Forgot from './pages/auth/Forgot.jsx'
import ChefDashboard from './pages/chef/Dashboard.jsx'
import OwnerDashboard from './pages/owner/Dashboard.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/forgot', element: <Forgot /> },
  { path: '/chef', element: <ChefDashboard /> },
  { path: '/owner', element: <OwnerDashboard /> },
  { path: '/app', element: <App /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

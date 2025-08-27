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
import Jobs from './pages/Jobs.jsx'
import Admin from './pages/Admin.jsx'
import Profile from './pages/Profile.jsx'
import Chat from './pages/Chat.jsx'
import RootLayout from './layouts/RootLayout.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout><div /></RootLayout>,
    children: [],
  },
  { path: '/', element: <RootLayout><Landing /></RootLayout> },
  { path: '/jobs', element: <RootLayout><Jobs /></RootLayout> },
  { path: '/login', element: <RootLayout><Login /></RootLayout> },
  { path: '/signup', element: <RootLayout><Signup /></RootLayout> },
  { path: '/forgot', element: <RootLayout><Forgot /></RootLayout> },
  { path: '/chef', element: <RootLayout><ChefDashboard /></RootLayout> },
  { path: '/owner', element: <RootLayout><OwnerDashboard /></RootLayout> },
  { path: '/admin', element: <RootLayout><Admin /></RootLayout> },
  { path: '/profile', element: <RootLayout><Profile /></RootLayout> },
  { path: '/chat', element: <RootLayout><Chat /></RootLayout> },
  { path: '/app', element: <RootLayout><App /></RootLayout> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

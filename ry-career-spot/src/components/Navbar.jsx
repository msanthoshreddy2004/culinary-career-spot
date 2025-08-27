import { Link, NavLink } from 'react-router-dom'
import { ChefHat, Briefcase, PlusSquare, LayoutDashboard, User, MessageSquareMore } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ChefHat className="h-5 w-5" />
          <span className="font-semibold">ChefJobs</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/jobs" className={({isActive}) => `flex items-center gap-2 hover:text-gray-900 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
            <Briefcase className="h-4 w-4" /> Jobs
          </NavLink>
          <NavLink to="/owner" className={({isActive}) => `flex items-center gap-2 hover:text-gray-900 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
            <PlusSquare className="h-4 w-4" /> Post Job
          </NavLink>
          <NavLink to="/chef" className={({isActive}) => `flex items-center gap-2 hover:text-gray-900 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </NavLink>
          <NavLink to="/chat" className={({isActive}) => `flex items-center gap-2 hover:text-gray-900 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
            <MessageSquareMore className="h-4 w-4" /> Chat
          </NavLink>
        </div>
        <div className="flex items-center gap-3">
          <NavLink to="/profile" className={({isActive}) => `hidden md:flex items-center gap-2 px-3 py-2 rounded-md border text-sm ${isActive ? 'border-gray-900 text-gray-900' : ''}`}>
            <User className="h-4 w-4" /> Profile
          </NavLink>
          <Link to="/login" className="px-3 py-2 text-sm font-medium rounded-md bg-gray-900 text-white hover:bg-gray-800">Login</Link>
        </div>
      </div>
    </nav>
  )
}

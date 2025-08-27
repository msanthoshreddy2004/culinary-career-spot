import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white border rounded-xl p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Welcome back</h1>
        <p className="text-sm text-gray-600 mt-1">Login to continue</p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input type="password" className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <Link to="/forgot" className="text-gray-600 hover:underline">Forgot password?</Link>
          </div>
          <button type="button" className="w-full rounded-md bg-gray-900 text-white py-2 text-sm font-medium">Login</button>
        </form>
        <p className="text-xs text-gray-600 mt-4">New here? <Link to="/signup" className="underline">Create an account</Link></p>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white border rounded-xl p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Create account</h1>
        <p className="text-sm text-gray-600 mt-1">Choose your role</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button className="border rounded-lg py-2 text-sm">Chef</button>
          <button className="border rounded-lg py-2 text-sm">PG Owner</button>
        </div>
        <form className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input type="password" className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <button type="button" className="w-full rounded-md bg-gray-900 text-white py-2 text-sm font-medium">Sign up</button>
        </form>
        <p className="text-xs text-gray-600 mt-4">Have an account? <Link to="/login" className="underline">Login</Link></p>
      </div>
    </div>
  )
}

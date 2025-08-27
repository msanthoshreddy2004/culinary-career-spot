import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg">ChefJobs</Link>
          <div className="flex items-center gap-3">
            <Link to="/login" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100">Login</Link>
            <Link to="/signup" className="px-3 py-2 text-sm font-medium rounded-md bg-gray-900 text-white hover:bg-gray-800">Sign up</Link>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Connecting Chefs with PG Owners & Restaurants</h1>
            <p className="mt-4 text-gray-600">Find chef jobs tailored to your skills and preferences, or post openings to hire the right talent.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/chef" className="px-5 py-3 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800">Find Jobs</Link>
              <Link to="/owner" className="px-5 py-3 rounded-md border text-sm font-medium hover:bg-gray-50">Post a Job</Link>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="font-medium">Featured Jobs</h3>
            <ul className="mt-4 space-y-3">
              {[
                { title: 'North Indian Chef', salary: '₹25–35k', location: 'Bengaluru', cuisine: 'North Indian' },
                { title: 'Tandoor Specialist', salary: '₹20–28k', location: 'Hyderabad', cuisine: 'Tandoor' },
                { title: 'South Indian Breakfast Chef', salary: '₹18–25k', location: 'Chennai', cuisine: 'South Indian' },
              ].map((job, idx) => (
                <li key={idx} className="p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{job.title}</p>
                      <p className="text-xs text-gray-600 mt-1">{job.cuisine} • {job.location}</p>
                    </div>
                    <span className="text-sm font-medium">{job.salary}</span>
                  </div>
                  <div className="mt-3">
                    <button className="px-3 py-1.5 text-sm rounded-md bg-gray-900 text-white">Apply</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <section className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-lg font-medium">What Chefs say</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              'Got a job in 3 days – super smooth!',
              'Easy to filter by cuisine and salary.',
              'Clean UI and fast application process.'
            ].map((t, i) => (
              <div key={i} className="p-5 border rounded-xl bg-white shadow-sm text-sm text-gray-700">{t}</div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-auto border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} ChefJobs</p>
          <div className="flex gap-4">
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

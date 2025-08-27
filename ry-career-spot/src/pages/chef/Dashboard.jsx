export default function ChefDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="font-semibold">Chef Dashboard</h1>
          <nav className="text-sm text-gray-600 flex gap-4">
            <a href="#">Saved Jobs</a>
            <a href="#">Notifications</a>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 space-y-4">
          <div className="bg-white border rounded-xl p-4">
            <h2 className="font-medium">Filters</h2>
            <div className="mt-3 space-y-3 text-sm">
              <input placeholder="Location" className="w-full border rounded-md px-3 py-2" />
              <input placeholder="Cuisine" className="w-full border rounded-md px-3 py-2" />
              <input placeholder="Min Salary" className="w-full border rounded-md px-3 py-2" />
              <button className="w-full bg-gray-900 text-white rounded-md py-2 text-sm">Search</button>
            </div>
          </div>
          <div className="bg-white border rounded-xl p-4">
            <h2 className="font-medium">Profile</h2>
            <p className="text-sm text-gray-600 mt-2">Add skills, cuisines, experience, and resume.</p>
            <button className="mt-3 border rounded-md px-3 py-2 text-sm">Edit Profile</button>
          </div>
        </aside>
        <section className="md:col-span-3 space-y-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="bg-white border rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">Commis Chef #{i}</p>
                <p className="text-xs text-gray-600 mt-1">Bengaluru • North Indian • ₹20–30k</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="border rounded-md px-3 py-1.5 text-sm">Save</button>
                <button className="bg-gray-900 text-white rounded-md px-3 py-1.5 text-sm">Apply</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

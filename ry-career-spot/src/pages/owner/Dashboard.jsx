export default function OwnerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="font-semibold">Owner Dashboard</h1>
          <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm">Post a Job</button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2 space-y-4">
          <div className="bg-white border rounded-xl p-4">
            <h2 className="font-medium">Post a Job</h2>
            <div className="grid md:grid-cols-2 gap-3 mt-3 text-sm">
              <input placeholder="Title" className="border rounded-md px-3 py-2" />
              <input placeholder="Cuisine required" className="border rounded-md px-3 py-2" />
              <input placeholder="Salary" className="border rounded-md px-3 py-2" />
              <input placeholder="Timings" className="border rounded-md px-3 py-2" />
              <input placeholder="Experience" className="border rounded-md px-3 py-2" />
              <input placeholder="Location" className="border rounded-md px-3 py-2" />
              <textarea placeholder="Description" className="md:col-span-2 border rounded-md px-3 py-2 min-h-[100px]"></textarea>
              <div className="md:col-span-2">
                <button className="bg-gray-900 text-white rounded-md px-4 py-2">Publish</button>
              </div>
            </div>
          </div>
          <div className="bg-white border rounded-xl p-4">
            <h2 className="font-medium">Posted Jobs</h2>
            <div className="mt-3 space-y-3">
              {[1,2].map((i) => (
                <div key={i} className="border rounded-lg p-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium">Head Chef #{i}</p>
                    <p className="text-xs text-gray-600 mt-1">Applicants: 5</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="border rounded-md px-3 py-1.5 text-sm">View</button>
                    <button className="border rounded-md px-3 py-1.5 text-sm">Shortlist</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <aside className="space-y-4">
          <div className="bg-white border rounded-xl p-4">
            <h2 className="font-medium">Company/PG Profile</h2>
            <p className="text-sm text-gray-600 mt-2">Add details like name, location, facilities, and contact.</p>
            <button className="mt-3 border rounded-md px-3 py-2 text-sm">Edit Profile</button>
          </div>
        </aside>
      </main>
    </div>
  )
}

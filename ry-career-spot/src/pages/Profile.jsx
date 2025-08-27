export default function Profile() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold">Profile</h1>
      <div className="bg-white border rounded-xl p-4 mt-4">
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <input placeholder="Full name" className="border rounded-md px-3 py-2" />
          <input placeholder="Location" className="border rounded-md px-3 py-2" />
          <input placeholder="Cuisines (comma separated)" className="md:col-span-2 border rounded-md px-3 py-2" />
          <input placeholder="Experience (years)" className="border rounded-md px-3 py-2" />
          <input placeholder="Salary expectation" className="border rounded-md px-3 py-2" />
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Resume</label>
            <input type="file" className="mt-1 block w-full text-sm" />
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-gray-900 text-white rounded-md px-4 py-2">Save</button>
        </div>
      </div>
    </div>
  )
}

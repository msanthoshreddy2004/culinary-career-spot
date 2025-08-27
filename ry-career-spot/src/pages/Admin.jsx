export default function Admin() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white border rounded-xl p-4">
          <h2 className="font-medium">Users</h2>
          <p className="text-sm text-gray-600 mt-1">Approve or reject users</p>
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-center justify-between border rounded-md p-2"><span>Chef #123</span><button className="border rounded px-2 py-1">Approve</button></div>
            <div className="flex items-center justify-between border rounded-md p-2"><span>Owner #98</span><button className="border rounded px-2 py-1">Reject</button></div>
          </div>
        </div>
        <div className="bg-white border rounded-xl p-4">
          <h2 className="font-medium">Jobs</h2>
          <p className="text-sm text-gray-600 mt-1">Moderate job posts</p>
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-center justify-between border rounded-md p-2"><span>Head Chef - BLR</span><button className="border rounded px-2 py-1">Hide</button></div>
          </div>
        </div>
        <div className="bg-white border rounded-xl p-4">
          <h2 className="font-medium">Analytics</h2>
          <div className="grid grid-cols-3 gap-3 mt-3 text-center">
            <div className="border rounded-lg p-3">
              <p className="text-xs text-gray-600">Chefs</p>
              <p className="text-lg font-semibold">120</p>
            </div>
            <div className="border rounded-lg p-3">
              <p className="text-xs text-gray-600">Jobs</p>
              <p className="text-lg font-semibold">45</p>
            </div>
            <div className="border rounded-lg p-3">
              <p className="text-xs text-gray-600">Applications</p>
              <p className="text-lg font-semibold">380</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

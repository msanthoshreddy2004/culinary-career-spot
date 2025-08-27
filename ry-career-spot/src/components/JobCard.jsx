export default function JobCard({ title, salary, cuisine, location, onApply, onSave }) {
  return (
    <div className="bg-white border rounded-xl p-4 flex items-center justify-between">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-gray-600 mt-1">{cuisine} • {location}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={onSave} className="border rounded-md px-3 py-1.5 text-sm">Save</button>
        <button onClick={onApply} className="bg-gray-900 text-white rounded-md px-3 py-1.5 text-sm">Apply</button>
      </div>
    </div>
  )
}

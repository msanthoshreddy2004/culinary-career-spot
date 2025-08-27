import { useState } from 'react'
import JobCard from '../components/JobCard.jsx'
import { toast } from 'sonner'

export default function Jobs() {
  const [query, setQuery] = useState('')
  const jobs = [
    { title: 'North Indian Chef', salary: '₹25–35k', location: 'Bengaluru', cuisine: 'North Indian' },
    { title: 'Chinese Chef', salary: '₹20–30k', location: 'Pune', cuisine: 'Chinese' },
    { title: 'Tandoor Specialist', salary: '₹22–32k', location: 'Hyderabad', cuisine: 'Tandoor' },
  ].filter(j => j.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <h1 className="text-xl font-semibold">Browse Jobs</h1>
        <div className="flex gap-2">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by title" className="border rounded-md px-3 py-2 text-sm" />
          <input placeholder="Location" className="border rounded-md px-3 py-2 text-sm" />
          <input placeholder="Cuisine" className="border rounded-md px-3 py-2 text-sm" />
        </div>
      </div>
      <div className="mt-6 grid gap-4">
        {jobs.map((j, i) => (
          <JobCard key={i} {...j} onSave={() => toast('Saved job')} onApply={() => toast.success('Applied successfully')} />
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-sm text-gray-600">
        <p>© {new Date().getFullYear()} ChefJobs</p>
        <div className="flex gap-4">
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

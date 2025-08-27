import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Toaster from '../components/Toaster.jsx'

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster />
    </div>
  )
}

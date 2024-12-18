import { useState } from 'react'
import Resume from './components/Resume'
import CoverLetter from './components/CoverLetter'
import PrintButton from './components/PrintButton'
import PageFrame from './components/PageFrame'
import './App.css'

function App() {
  const [showResume, setShowResume] = useState(true)

  return (
    <main className="min-h-screen bg-gray-100 py-8 print:bg-white print:p-0 print:m-0">
      <PrintButton />
      <button
        onClick={() => setShowResume(!showResume)}
        className="fixed top-16 right-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded shadow print:hidden"
      >
        Switch
      </button>
      <PageFrame />
      {showResume ? <Resume /> : <CoverLetter />}
    </main>
  )
}

export default App

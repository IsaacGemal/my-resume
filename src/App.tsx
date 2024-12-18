import { useState } from 'react'
import Resume from './components/Resume'
import CoverLetter from './components/CoverLetter'
import CoverLetterSelector from './components/CoverLetterSelector'
import PrintButton from './components/PrintButton'
import PageFrame from './components/PageFrame'
import { coverLetters } from './data/coverLetters'
import './App.css'

function App() {
  const [showResume, setShowResume] = useState(true)
  const [selectedLetter, setSelectedLetter] = useState<string>('')

  const currentLetter = coverLetters.find(letter => letter.id === selectedLetter)

  return (
    <main className="min-h-screen bg-gray-100 py-8 print:bg-white print:p-0 print:m-0">
      <PrintButton />
      <button
        onClick={() => setShowResume(!showResume)}
        className="fixed top-16 right-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded shadow print:hidden"
      >
        Switch
      </button>
      {!showResume && (
        <CoverLetterSelector
          selectedLetter={selectedLetter}
          onSelect={setSelectedLetter}
          letters={coverLetters}
        />
      )}
      <PageFrame />
      {showResume ? (
        <Resume />
      ) : currentLetter ? (
        <CoverLetter data={currentLetter} />
      ) : (
        <div className="max-w-[8.5in] mx-auto p-6 text-center text-gray-500">
          Please select a cover letter
        </div>
      )}
    </main>
  )
}

export default App

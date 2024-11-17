import Resume from './components/Resume'
import PrintButton from './components/PrintButton'
import PageFrame from './components/PageFrame'
import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-gray-100 py-8 print:bg-white print:p-0 print:m-0">
      <PrintButton />
      <PageFrame />
      <Resume />
    </main>
  )
}

export default App

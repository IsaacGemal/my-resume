import { type ReactElement } from 'react'

export default function PrintButton(): ReactElement {
    const handlePrint = () => {
        window.print()
    }

    return (
        <button
            onClick={handlePrint}
            className="fixed top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow print:hidden"
        >
            Print
        </button>
    )
} 
import { type ReactElement } from 'react'

type Props = {
    onBeforePrint?: () => void;
}

export default function PrintButton({ onBeforePrint }: Props): ReactElement {
    const handlePrint = () => {
        if (onBeforePrint) {
            onBeforePrint()
        }
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
import { type ReactElement } from 'react'
import { type CoverLetterData } from '../types/coverLetter'

type Props = {
    selectedLetter?: string;
    onSelect: (id: string) => void;
    letters: CoverLetterData[];
}

export default function CoverLetterSelector({ selectedLetter, onSelect, letters }: Props): ReactElement {
    return (
        <div className="fixed top-28 right-4 w-48 bg-white rounded shadow-lg p-2 print:hidden">
            <select
                value={selectedLetter}
                onChange={(e) => onSelect(e.target.value)}
                className="w-full p-2 border rounded"
            >
                <option value="">Select a cover letter</option>
                {letters.map(letter => (
                    <option key={letter.id} value={letter.id}>
                        {letter.company} - {letter.position}
                    </option>
                ))}
            </select>
        </div>
    )
} 
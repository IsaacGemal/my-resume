import { type ReactElement } from 'react'
import { Github, Mail, Globe, MapPin } from 'lucide-react'
import { type CoverLetterData } from '../types/coverLetter'

type Props = {
    data: CoverLetterData;
}

export default function CoverLetter({ data }: Props): ReactElement {
    return (
        <div className="max-w-[8.5in] mx-auto p-6 bg-white min-h-[11in] text-[#333]">
            {/* Header */}
            <header className="text-center mb-8 border-b border-gray-300 pb-4">
                <h1 className="text-2xl font-bold">Isaac Gemal</h1>
                <p className="text-sm mt-1 flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1">
                        <MapPin size={16} />
                        NYC
                    </span> |
                    <a href="mailto:isaacgemal@gmail.com" className="hover:underline inline-flex items-center gap-1">
                        <Mail size={16} />
                        isaacgemal@gmail.com
                    </a> |
                    <a href="https://github.com/isaacgemal" className="hover:underline inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        github.com/isaacgemal
                    </a> |
                    <a href="https://aizk.sh" className="hover:underline inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                        <Globe size={16} />
                        Aizk.sh
                    </a>
                </p>
            </header>

            {/* Date */}
            <div className="mb-8">
                <p>{data.date.toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                })}</p>
            </div>

            {/* Recipient */}
            <div className="mb-8">
                {data.recipientTitle && <p>{data.recipientTitle}</p>}
                <p>{data.company}</p>
                {data.companyAddress && <p>{data.companyAddress}</p>}
            </div>

            {/* Greeting */}
            <div className="mb-6">
                <p>Dear {data.recipientTitle || "Hiring Manager"},</p>
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-4 mb-8">
                <p>{data.content.opening}</p>
                {data.content.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
                <p>{data.content.closing}</p>
            </div>

            {/* Closing */}
            <div>
                <p className="mb-8">Sincerely,</p>
                <p>Isaac Gemal</p>
            </div>
        </div>
    )
} 
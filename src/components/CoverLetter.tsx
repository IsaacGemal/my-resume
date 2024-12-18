import { type ReactElement } from 'react'
import { Github, Mail, Globe, MapPin } from 'lucide-react'

export default function CoverLetter(): ReactElement {
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
                <p>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>

            {/* Recipient */}
            <div className="mb-8">
                <p>Hiring Manager</p>
                <p>Company Name</p>
                <p>Company Address</p>
                <p>City, State ZIP</p>
            </div>

            {/* Greeting */}
            <div className="mb-6">
                <p>Dear Hiring Manager,</p>
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-4 mb-8">
                <p>
                    I am writing to express my strong interest in the [Position] role at [Company].
                    With my background in software engineering and civil engineering, I bring a unique
                    perspective that combines technical expertise with practical problem-solving skills.
                </p>

                <p>
                    [Second paragraph about specific qualifications and achievements]
                </p>

                <p>
                    [Third paragraph about why you're interested in this specific company]
                </p>

                <p>
                    Thank you for considering my application. I look forward to discussing how I can
                    contribute to [Company]'s continued success.
                </p>
            </div>

            {/* Closing */}
            <div>
                <p className="mb-8">Sincerely,</p>
                <p>Isaac Gemal</p>
            </div>
        </div>
    )
} 
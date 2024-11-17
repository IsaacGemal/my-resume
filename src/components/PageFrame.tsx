import { type ReactElement, useState } from 'react'

export default function PageFrame(): ReactElement {
    const [margin, setMargin] = useState(0.2) // Default margin of 0.2 inches

    return (
        <div className="absolute inset-0 pointer-events-none print:hidden">
            {/* First page guide */}
            <div className="absolute top-16 left-0 right-0 mx-auto max-w-[8.5in] h-[11in] border-2 border-blue-300 border-dashed opacity-50">
                {/* Margin guide */}
                <div
                    className="absolute border-2 border-red-300 border-dashed opacity-50"
                    style={{
                        top: `${margin}in`,
                        right: `${margin}in`,
                        bottom: `${margin}in`,
                        left: `${margin}in`,
                    }}
                />
            </div>

            {/* Margin control slider */}
            <div className="pointer-events-auto absolute top-4 left-4 flex items-center gap-2">
                <label htmlFor="margin-slider" className="text-sm text-gray-600">
                    Margin: {margin}in
                </label>
                <input
                    id="margin-slider"
                    type="range"
                    min="0.1"
                    max="2"
                    step="0.1"
                    value={margin}
                    onChange={(e) => setMargin(Number(e.target.value))}
                    className="w-32"
                />
            </div>
        </div>
    )
} 
import { type ReactElement } from 'react'
import { Github, Mail, Globe, MapPin } from 'lucide-react'

export default function Resume(): ReactElement {
    return (
        <div className="max-w-[8.5in] mx-auto p-6 bg-white min-h-[11in] text-[#333]">
            {/* Header */}
            <header className="text-center mb-4">
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

            {/* Technical Skills */}
            <section className="mb-4">
                <h2 className="text-lg font-bold border-b border-gray-300 mb-2">TECHNICAL SKILLS</h2>
                <ul className="list-disc pl-6 text-sm">
                    <li>Software: TypeScript/JavaScript, React, Node, Python, SQL, AWS, Docker, Git, Linux, AutoCAD, AutoLISP, VBA</li>
                </ul>
            </section>

            {/* Work Experience */}
            <section className="mb-4">
                <h2 className="text-lg font-bold border-b border-gray-300 mb-2">WORK EXPERIENCE</h2>

                <div className="mb-3">
                    <div className="flex justify-between text-sm">
                        <strong><a href="https://fractalnyc.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">Fractal Tech</a> | Software Engineer</strong>
                        <span>10/24-12/24</span>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Dedicated 60+ hours weekly to software engineering, with notable achievements including:</li>
                        <li><strong><a href="https://www.anthropic.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">Anthropic</a> | Contractor</strong> - Participated in Anthropic's Model Safety Bug Bounty Program, identifying and exploiting vulnerabilities in state of the art large language models to further research and safety measures</li>
                        <li><strong><a href="https://citymeetings.nyc" className="hover:underline" target="_blank" rel="noopener noreferrer">citymeetings.nyc</a> | Contractor</strong> - Used AI to help transcribe, summarize, and analyze NYC Council meetings, analyzing both meeting content and public sentiment to improve government accessibility and transparency</li>
                        <li><strong><a href="https://mcbench.ai" className="hover:underline" target="_blank" rel="noopener noreferrer">mcbench.ai</a> | Team Member</strong> - Created an open-source platform for evaluating AI models' Minecraft building generation capabilities through competitive ranking and human feedback, advancing research in AI benchmarks</li>
                    </ul>
                </div>

                <div className="mb-3">
                    <div className="flex justify-between text-sm">
                        <strong><a href="https://www.partneresi.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">Partner Engineering & Science, Inc.</a> | Design Engineer</strong>
                        <span>11/22-3/24</span>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Managed AutoCAD revisions for numerous projects, including the one of largest residential home development plan in New Jersey (549 units in Jackson, New Jersey)</li>
                        <li>Projects included: zoning, layout, grading, drainage/utilities, stormwater calculations, soil erosion/sediment control, landscape/lighting and detail drawings</li>
                        <li>Performed daily geotechnical site inspection services for residential construction sites, monitoring soil conditions, retaining wall constructions, and stormwater utility installations</li>
                    </ul>
                </div>

                <div className="mb-3">
                    <div className="flex justify-between text-sm">
                        <strong><a href="https://www.abinbev.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">Anheuser-Busch InBev</a> | QA Intern</strong>
                        <span>6/20-8/20</span>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Wrote software to automate the monitoring of microbiological sample tracking of 200+ pieces of equipment throughout the brewery</li>
                        <li>Shadowed shift managers, assisting them with daily responsibilities</li>
                    </ul>
                    <div className="flex justify-between text-sm mt-1">
                        <strong><a href="https://www.abinbev.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">Anheuser-Busch InBev</a> | Logistics Intern</strong>
                        <span>7/19-12/19</span>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Wrote custom scripts with VBA and SQL to gather inventory warehouse data for upper management</li>
                        <li>Found and fixed a nationwide software bug to increase end of shift reporting accuracy by 4%</li>
                    </ul>
                </div>

            </section>

            {/* Design Experience */}
            <section className="mb-4">
                <h2 className="text-lg font-bold border-b border-gray-300 mb-2">DESIGN EXPERIENCE</h2>

                <div className="mb-3">
                    <div className="flex justify-between text-sm">
                        <strong><a href="https://wikitok.vercel.app" className="hover:underline" target="_blank" rel="noopener noreferrer">WikiTok</a></strong>
                        <span>2/25</span>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Wikipedia with TikTok scrolling. Built in 3 hours, went viral and reached over half a million people in 36 hours</li>
                    </ul>
                </div>

                <div className="mb-3">
                    <div className="flex justify-between text-sm">
                        <strong><a href="https://www.stevens.edu/" className="hover:underline" target="_blank" rel="noopener noreferrer">Stevens Institute of Technology</a> | Project Team Member</strong>
                        <span>5/22</span>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Secured and managed $250,000 in grants to revitalize a historically significant fountain</li>
                        <li>Conducted site surveys, ran flow test simulations, and created scale models in collaboration with the Lake Hopatcong Historical Museum and Morris County Government</li>
                    </ul>
                </div>
            </section>

            {/* Education */}
            <section>
                <h2 className="text-lg font-bold border-b border-gray-300 mb-2">EDUCATION</h2>
                <div className="text-sm">
                    <div className="flex justify-between">
                        <strong>Stevens Institute of Technology</strong>
                        <span>5/22</span>
                    </div>
                    <div>Bachelor of Engineering in Civil Engineering</div>
                    <div><strong>Honors:</strong> Edwin A. Stevens Scholarship, Passed Fundamentals of Engineering (FE) Exam</div>
                    <div><strong>Coursework:</strong> Geotechnical Engineering, Water Resources Engineering, Modeling and Simulation, Steel Design, Concrete Design, Engineering Economics, Structural Analysis, Intro to ArcGIS, Fluid Mechanics</div>
                </div>
            </section>
        </div>
    )
} 
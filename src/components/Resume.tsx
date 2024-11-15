import { type ReactElement } from 'react'

export default function Resume(): ReactElement {
    return (
        <div className="max-w-[8.5in] mx-auto p-6 bg-white min-h-[11in] text-[#333]">
            {/* Header */}
            <header className="text-center mb-4">
                <h1 className="text-2xl font-bold">Isaac Gemal</h1>
                <p className="text-sm mt-1">
                    NYC | <a href="mailto:isaacgemal@gmail.com" className="hover:underline">isaacgemal@gmail.com</a> | <a href="https://github.com/isaacgemal" className="hover:underline" target="_blank" rel="noopener noreferrer">github.com/isaacgemal</a> | <a href="https://aizk.sh" className="hover:underline" target="_blank" rel="noopener noreferrer">Aizk.sh</a>
                </p>
            </header>

            {/* Technical Skills */}
            <section className="mb-4">
                <h2 className="text-lg font-bold border-b border-gray-300 mb-2">TECHNICAL SKILLS</h2>
                <ul className="list-disc pl-6 text-sm space-y-1">
                    <li>Software: AutoCAD, AutoCAD Civil 3D, Excel, ArcGIS</li>
                    <li>Programming: Python, SQL, VBA, AutoLISP</li>
                    <li>Certifications: Engineer in Training (EIT), OSHA 10, ACI Concrete Field Testing Technician Grade 1, ACI Concrete Strength Testing Technician, Nuclear Gauge Safety Certification</li>
                </ul>
            </section>

            {/* Work Experience */}
            <section className="mb-4">
                <h2 className="text-lg font-bold border-b border-gray-300 mb-2">WORK EXPERIENCE</h2>

                <div className="mb-3">
                    <div className="flex justify-between text-sm">
                        <strong>Hammer Land Engineering | Design Engineer</strong>
                        <span>3/24-5/24</span>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Aided in the design and drafting of concept plans for clients, focusing on land development projects</li>
                    </ul>
                </div>

                <div className="mb-3">
                    <div className="flex justify-between text-sm">
                        <strong>Partner Engineering & Science, Inc. | Design Engineer</strong>
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
                        <strong>Anheuser-Busch InBev | QA Intern</strong>
                        <span>6/20-8/20</span>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Wrote software to automate the monitoring of microbiological sample tracking of 200+ pieces of equipment throughout the brewery</li>
                        <li>Worked with the Quality Assurance team to ensure beverages met production standards</li>
                    </ul>
                    <div className="flex justify-between text-sm mt-1">
                        <strong>Anheuser-Busch InBev | Logistics Intern</strong>
                        <span>7/19-12/19</span>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Shadowed shift managers, assisting them with daily responsibilities</li>
                        <li>Wrote custom scripts with VBA and SQL to gather inventory warehouse data for upper management</li>
                        <li>Found and fixed a nationwide software bug to increase end of shift reporting accuracy by 4%</li>
                    </ul>
                </div>

                <div className="mb-3">
                    <div className="flex justify-between text-sm">
                        <strong>Hudson Valley Engineering Associates | Engineering Intern</strong>
                        <span>8/18-12/18</span>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Performed daily concrete field tests to meet DOT specifications</li>
                        <li>Drilled concrete cores to analyze the strength of aging infrastructures</li>
                    </ul>
                </div>
            </section>

            {/* Design Experience */}
            <section className="mb-4">
                <h2 className="text-lg font-bold border-b border-gray-300 mb-2">DESIGN EXPERIENCE</h2>

                <div className="mb-3">
                    <div className="flex justify-between text-sm">
                        <strong>NYC Hackathon | Participant</strong>
                        <span>1/24</span>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Leveraged GPT-4, Python, and open source chess data to find connections between two players from a database of tens of thousands of games, earning 3rd place in an NYC GPT-themed hackathon</li>
                    </ul>
                </div>

                <div className="mb-3">
                    <div className="flex justify-between text-sm">
                        <strong>Stevens Institute of Technology | Project Team Member</strong>
                        <span>5/22</span>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Worked with a team to investigate and test the capabilities of a historically significant fountain</li>
                        <li>Conducted site surveys, ran flow test simulations, and created scale models in collaboration with the Lake Hopatcong Historical Museum and Morris County Government, raised $250,000 in grants</li>
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
                    <div><strong>Honors:</strong> Edwin A. Stevens Scholarship</div>
                    <div><strong>Coursework:</strong> Geotechnical Engineering, Water Resources Engineering, Modeling and Simulation, Steel Design, Concrete Design, Engineering Economics, Structural Analysis, Intro to ArcGIS, Fluid Mechanics</div>
                </div>
            </section>
        </div>
    )
} 
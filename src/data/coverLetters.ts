import { type CoverLetterData } from "../types/coverLetter";

export const coverLetters: CoverLetterData[] = [
  {
    id: "1",
    company: "Example Corp",
    position: "Software Engineer",
    recipientTitle: "Engineering Manager",
    date: new Date("2024-03-20T12:00:00-04:00"),
    content: {
      opening:
        "I am writing to express my strong interest in the Software Engineer position at Example Corp. Having followed your company's innovative work in cloud computing solutions, I am excited about the possibility of contributing to your team.",
      body: [
        "With my background in software engineering and three years of experience building scalable web applications, I believe I would be a valuable addition to Example Corp. I've worked extensively with React, Node.js, and TypeScript, which I understand are key technologies in your stack.",
        "At my previous role at Tech Solutions Inc., I led the development of a microservices architecture that reduced system latency by 40% and improved overall application reliability. I also mentored junior developers and contributed to our open-source initiatives.",
        "I am particularly drawn to Example Corp's mission of making cloud technology more accessible to small businesses. Your recent launch of the CloudBridge platform demonstrates the kind of innovative thinking I hope to contribute to. The opportunity to work on products that directly impact thousands of businesses aligns perfectly with my career goals.",
      ],
      closing:
        "Thank you for considering my application. I would welcome the opportunity to discuss how my skills and experience align with Example Corp's needs. I look forward to speaking with you about this exciting opportunity.",
    },
    createdAt: new Date("2024-03-20T10:00:00-04:00"),
    updatedAt: new Date("2024-03-20T10:00:00-04:00"),
  },
  {
    id: "2",
    company: "Perplexity AI",
    position: "Frontend & Fullstack Resident",
    recipientTitle: "Hiring Manager",
    date: new Date("2024-12-17T12:00:00-04:00"),
    content: {
      opening:
        "My name is Isaac Gemal, and I'm writing to express my interest in the Perplexity residency program. My degree is in civil engineering, but my heart is in software engineering. Several months ago, I dropped everything and moved to Brooklyn to spend 3 months at Fractal, a developer collective where I learned full stack engineering at roughly 60-70 hours a week.",
      body: [
        "A detail about this cover letter - you may notice that my resume and cover letter have the exact same header. I built both of them with React, which gives me nice details like Lucide for the icons, but more importantly - they look the exact same every time, and I have version control with git. This way I can create different branches for different companies, see how my resume has changed over time, track every single cover letter, and so on. If you're looking for someone on your team who has a real attention to detail, I would be a great asset.",
        "At my core, I am a problem solver and a builder. I signed up for civil engineering because I have a genuine love to literally build things in this world, but I left when I realized I could far, far faster in software, and impact far more people too. It was a painful and difficult transition, but I'm grateful I figured that out now, and I'm prepared to work as hard as I can to make a real impact on the world.",
      ],
      closing:
        "In conclusion, I truly think I'm a great fit for this opportunity. I have already dropped everything in my life for 3 months to surround myself in tech, and it was the best decision I ever made. I'm more than willing to take it a step further, but this time, I want to measure my impact in years, not months.",
    },
    createdAt: new Date("2024-12-17T10:00:00-04:00"),
    updatedAt: new Date("2024-12-17T10:00:00-04:00"),
  },
];

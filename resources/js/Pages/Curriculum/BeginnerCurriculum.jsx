import MainNav from "@/Components/MainNav";
import CTASection from "@/Components/CTASection";
import CurriculumAccordion from "@/Components/CurriculumAccordion";

const beginnerCurriculum = [
    {
        title: "Week 1 — Digital Literacy",
        points: [
            "How computers work",
            "Internet basics",
            "Email, cloud, and Google Workspace",
            "Introduction to AI"
        ]
    },
    {
        title: "Week 2 — Introduction to AI",
        points: [
            "What is AI?",
            "ChatGPT, Gemini, Claude",
            "How to write good prompts"
        ]
    },
    {
        title: "Week 3 — No-Code Tools",
        points: [
            "Canva",
            "Google Sheets",
            "Notion",
            "Simple websites"
        ]
    },
    {
        title: "Week 4 — AI for Productivity",
        points: [
            "AI for writing",
            "AI for research",
            "AI for business"
        ]
    },
    {
        title: "Week 5 — Digital Careers Overview",
        points: ["Data", "Software", "AI", "Freelancing"]
    },
    {
        title: "Week 6 — Mini Project",
        points: [
            "Build a simple website",
            "AI-assisted document",
            "Basic automation"
        ]
    },
    {
        title: "Week 7 — Career Readiness",
        points: [
            "Portfolio building",
            "LinkedIn setup",
            "Resume basics"
        ]
    },
    {
        title: "Week 8 — Final Project",
        points: ["Presentation of digital portfolio"]
    }
];

export default function BeginnerCurriculum() {
    return (
        <>
            <MainNav />

            <section className="pt-32 pb-20 bg-[#FFF8ED]">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-bold">
                        Beginner Tech & AI Foundations — Curriculum
                    </h1>

                    <CurriculumAccordion data={beginnerCurriculum} />
                </div>
            </section>

            <CTASection />
        </>
    );
}

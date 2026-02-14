

import MainNav from "../Navigation/MainNav";
import CTASection from "../Home/CTASection";
import CurriculumAccordion from "./CurriculumAccordion";

const automationCurriculum = [
    { title: "Week 1 — AI Fundamentals", points: ["What is AI", "Prompts", "Business AI use"] },
    { title: "Week 2 — Prompt Engineering", points: ["Advanced prompts", "AI assistants"] },
    { title: "Week 3 — No-Code Automation", points: ["Make", "Zapier basics"] },
    { title: "Week 4 — APIs & AI Tools", points: ["OpenAI basics", "How APIs work"] },
    { title: "Week 5 — Build Chatbot 1", points: ["WhatsApp business chatbot"] },
    { title: "Week 6 — Build Chatbot 2", points: ["Website chatbot"] },
    { title: "Week 7 — Business Automation", points: ["Bookings automation", "AI replies"] },
    { title: "Week 8 — Team Project", points: ["Build tool for real SME"] },
    { title: "Week 9 — Foundry Selection", points: ["Top students invited"] },
    { title: "Week 10 — Final Demo Day", points: ["Present AI tools"] }
];

export default function AutomationCurriculum() {
    return (
        <>
            <MainNav />

            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-bold">
                        AI Automation & Prompt Engineering — Curriculum
                    </h1>

                    <CurriculumAccordion data={automationCurriculum} />
                </div>
            </section>

            <CTASection />
        </>
    );
}

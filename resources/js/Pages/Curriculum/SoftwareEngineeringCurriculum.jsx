import MainNav from "../Navigation/MainNav";
import CTASection from "../Home/CTASection";
import CurriculumAccordion from "./CurriculumAccordion";
import FooterSection from "../Footer/FooterSection";

const softwareEngineeringCurriculum = [
    {
        title: "Week 1 — HTML Fundamentals",
        points: [
            "Structure of web pages",
            "HTML tags and elements",
            "Creating simple web pages"
        ]
    },
    {
        title: "Week 2 — CSS Basics",
        points: [
            "Styling web pages",
            "Layout systems",
            "Responsive design principles"
        ]
    },
    {
        title: "Week 3 — JavaScript Fundamentals",
        points: [
            "Variables and data types",
            "Functions and logic",
            "Basic DOM manipulation"
        ]
    },
    {
        title: "Week 4 — Git & Version Control",
        points: [
            "Introduction to Git",
            "GitHub workflow",
            "Collaborating on projects"
        ]
    },
    {
        title: "Week 5 — Advanced JavaScript",
        points: [
            "Asynchronous JavaScript",
            "Working with APIs",
            "Modern JavaScript features"
        ]
    },
    {
        title: "Week 6 — React Fundamentals",
        points: [
            "Components and props",
            "State management",
            "Building UI components"
        ]
    },
    {
        title: "Week 7 — Frontend API Integration",
        points: [
            "Fetching data from APIs",
            "Displaying dynamic content",
            "Handling user input"
        ]
    },
    {
        title: "Week 8 — Node.js Introduction",
        points: [
            "JavaScript on the server",
            "Setting up Node projects",
            "Understanding backend development"
        ]
    },
    {
        title: "Week 9 — Express & REST APIs",
        points: [
            "Creating RESTful APIs",
            "Routing and controllers",
            "Handling requests and responses"
        ]
    },
    {
        title: "Week 10 — Databases",
        points: [
            "Working with MongoDB or SQL",
            "CRUD operations",
            "Database design basics"
        ]
    },
    {
        title: "Week 11 — Authentication",
        points: [
            "User login systems",
            "Authentication flows",
            "Security basics"
        ]
    },
    {
        title: "Week 12 — Deployment",
        points: [
            "Preparing apps for production",
            "Hosting web applications",
            "Cloud basics"
        ]
    },
    {
        title: "Week 13 — Testing",
        points: [
            "Unit testing basics",
            "Testing APIs",
            "Debugging applications"
        ]
    },
    {
        title: "Week 14 — Advanced Concepts",
        points: [
            "Performance optimization",
            "Project architecture",
            "Code best practices"
        ]
    },
    {
        title: "Week 15 — Capstone Build",
        points: [
            "Design a full-stack project",
            "Build frontend and backend"
        ]
    },
    {
        title: "Week 16 — Final Project & Demo Day",
        points: [
            "Deploy full-stack application",
            "Present project portfolio"
        ]
    }
];

export default function SoftwareEngineeringCurriculum() {
    return (
        <>
            <MainNav />

            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-bold">
                        Full-Stack Software Engineering — Curriculum
                    </h1>

                    <CurriculumAccordion data={softwareEngineeringCurriculum} />
                </div>
            </section>

            <CTASection />
            <FooterSection />
        </>
    );
}
import MainNav from "../Navigation/MainNav";
import CTASection from "../Home/CTASection";
import CurriculumAccordion from "./CurriculumAccordion";
import FooterSection from "../Footer/FooterSection";

const dataAnalyticsCurriculum = [
    {
        title: "Week 1 — Introduction to Data & Analytics",
        points: [
            "What is data analytics",
            "Types of data analysis",
            "How businesses use data",
            "Overview of analytics tools"
        ]
    },
    {
        title: "Week 2 — Excel for Data Analysis",
        points: [
            "Excel fundamentals",
            "Working with datasets",
            "Sorting and filtering data",
            "Basic formulas and functions"
        ]
    },
    {
        title: "Week 3 — Data Cleaning & Formatting",
        points: [
            "Handling missing data",
            "Removing duplicates",
            "Data formatting best practices",
            "Preparing datasets for analysis"
        ]
    },
    {
        title: "Week 4 — Basic Statistics for Business",
        points: [
            "Mean, median, and mode",
            "Understanding distributions",
            "Data interpretation",
            "Business decision making with statistics"
        ]
    },
    {
        title: "Week 5 — Advanced Excel",
        points: [
            "Pivot tables",
            "Advanced formulas",
            "Data analysis techniques",
            "Excel dashboards"
        ]
    },
    {
        title: "Week 6 — Data Visualization",
        points: [
            "Visualization principles",
            "Charts and graphs",
            "Communicating insights visually"
        ]
    },
    {
        title: "Week 7 — Power BI / Tableau",
        points: [
            "Introduction to BI tools",
            "Connecting datasets",
            "Building interactive dashboards"
        ]
    },
    {
        title: "Week 8 — Dashboard Building",
        points: [
            "Designing business dashboards",
            "Data storytelling",
            "Presenting insights"
        ]
    },
    {
        title: "Week 9 — Introduction to Databases",
        points: [
            "What databases are",
            "Structured data",
            "Relational database concepts"
        ]
    },
    {
        title: "Week 10 — SQL Fundamentals",
        points: [
            "Writing SQL queries",
            "Filtering and joining tables",
            "Working with real datasets"
        ]
    },
    {
        title: "Week 11 — Python for Analytics",
        points: [
            "Python basics",
            "Pandas for data manipulation",
            "Automating simple data tasks"
        ]
    },
    {
        title: "Week 12 — Capstone Project",
        points: [
            "Analyze real-world dataset",
            "Build a complete dashboard",
            "Present insights and recommendations"
        ]
    }
];

export default function DataAnalyticsCurriculum() {
    return (
        <>
            <MainNav />

            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-bold">
                        Data Analytics & Business Intelligence — Curriculum
                    </h1>

                    <CurriculumAccordion data={dataAnalyticsCurriculum} />
                </div>
            </section>

            <CTASection />
            <FooterSection />
        </>
    );
}
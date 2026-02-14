import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

const programs = [
    {
        title: "Beginner Tech & AI Foundations",
        duration: "8 Weeks",
        desc: "For complete beginners who want to enter tech fast.",
        link: "/programs/beginner"
    },
    {
        title: "AI Automation & Prompt Engineering",
        duration: "10 Weeks",
        desc: "For people who want to build AI tools and automate businesses.",
        link: "/programs/automation"
    }
];

export default function ProgramsSection() {
    return (
        <section className="py-24 bg-[#FFF8ED]">
            <div className="max-w-7xl mx-auto px-6 text-center">
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Our Programs — Cohort 1
                </h2>

                <div className="mt-16 grid md:grid-cols-2 gap-10">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 text-left"
                        >
                            <span className="inline-block bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full mb-4">
                                {program.duration}
                            </span>

                            <h3 className="text-2xl font-semibold text-slate-900">
                                {program.title}
                            </h3>

                            <p className="mt-4 text-gray-600">
                                {program.desc}
                            </p>

                            <Link
                                href={program.link}
                                className="inline-block mt-6 text-orange-500 font-medium hover:underline"
                            >
                                See Curriculum →
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

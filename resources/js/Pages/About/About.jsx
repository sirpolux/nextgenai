
import { Head, Link } from "@inertiajs/react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import MainNav from "../Navigation/MainNav";
import FooterSection from "../Footer/FooterSection";

export default function About() {
    const ref = useRef(null);
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div>
            <Head title="About Us - NextGen Starters" />
            <MainNav />

            {/* Scroll Progress Bar */}
            {/* <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"
            /> */}

            <div ref={ref} className="relative overflow-hidden bg-[#FFF8ED] text-gray-800">

                {/* ================= Animated Background Blobs ================= */}
                {/* <motion.div
                    animate={{ y: [0, 40, 0] }}
                    transition={{ repeat: Infinity, duration: 12 }}
                    className="absolute -top-32 -left-32 w-96 h-96 bg-orange-300 opacity-20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, -40, 0] }}
                    transition={{ repeat: Infinity, duration: 15 }}
                    className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-orange-400 opacity-20 rounded-full blur-3xl"
                /> */}

                {/* ================= HERO ================= */}
                <section className="relative py-24 px-6 md:px-16 text-center mt-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                            About <span className="text-orange-500">NextGen Starters</span>
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-gray-600">
                            A Nigerian-based tech education and AI production company
                            building industry-ready digital talent and scalable AI solutions.
                        </p>
                    </motion.div>
                </section>

                {/* ================= WHO WE ARE ================= */}
                <section className="py-12 px-6 md:px-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold mb-8">
                            A Tech Education & AI Production Company
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            NextGen Starters operates a dual model that connects learning directly to value creation.
                            Through our Academy, we deliver high-impact, cohort-based programs in AI, data, and automation.
                            Through our Foundry, selected graduates build AI-powered tools and automation systems
                            that serve SMEs and corporate clients locally and globally.
                        </p>
                    </motion.div>
                </section>

                {/* ================= GLASS DUAL MODEL ================= */}
                <section className="py-20 px-6 md:px-16 mt-2">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                        {[
                            {
                                title: "The Academy",
                                points: [
                                    "Cohort-based live programs",
                                    "AI, Data & Automation focus",
                                    "Hands-on practical projects",
                                    "Market-ready skill development"
                                ]
                            },
                            {
                                title: "The Foundry",
                                points: [
                                    "Real AI tool development",
                                    "Automation systems for SMEs",
                                    "API + infrastructure support",
                                    "Revenue-sharing opportunities"
                                ]
                            }
                        ].map((section, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-xl rounded-3xl p-8 hover:scale-[1.02] transition"
                            >
                                <h3 className="text-xl font-bold mb-4 text-orange-500">
                                    {section.title}
                                </h3>
                                <ul className="space-y-3 text-gray-700">
                                    {section.points.map((point, i) => (
                                        <li key={i}>• {point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ================= DIFFERENTIATORS (Glass Cards) ================= */}
                <section className="py-8 px-6 md:px-16 mt-2 mb-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="max-w-6xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-center mb-14">
                            Where Education Fuels Enterprise
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                            {[
                                "Develop job-ready & product-ready talent",
                                "Deliver affordable AI solutions",
                                "Create recurring revenue via infrastructure",
                                "Build a sustainable tech ecosystem"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="backdrop-blur-xl bg-white/30 border border-white/20 shadow-lg p-6 rounded-2xl hover:scale-105 transition"
                                >
                                    <p className="text-gray-800 font-medium">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ================= VISION ================= */}
                <section className="py-12 px-6 bg-orange-500 w-full md:px-16 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-center mt-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="mt-8 max-w-4xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold mb-8">
                            Vision 2030
                        </h2>

                        <p className="text-lg leading-relaxed">
                            By 2030, we aim to train over 10,000 Nigerians and position Nigeria
                            as a competitive hub for AI-enabled business growth.
                            We are building scalable digital infrastructure that powers SMEs
                            locally and globally.
                        </p>
                    </motion.div>
                </section>

                {/* ================= CTA ================= */}
                <section className="py-24 px-6 md:px-16 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            NextGen Starters, <span className="">where talent meets technology production.</span> 
                        </h2>

                        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
                            <Link
                                href={route("apply")}
                                target="_blank"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition shadow-lg"
                            >
                                Apply Now
                            </Link>

                            {/* <Link
                                href="/for-businesses"
                                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition"
                            >
                                Partner With Us
                            </Link> */}
                        </div>
                    </motion.div>
                </section>

            </div>

            <FooterSection />
        </div>
    );
}

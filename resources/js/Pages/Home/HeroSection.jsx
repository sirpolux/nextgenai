import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function HeroSection() {
    return (
        <section className="pt-32 pb-24 bg-[#FFF8ED]">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                
                {/* Text */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
                        Tech Skills That Pay in 
                        <span className="text-orange-500"> Dollars.</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600">
                        NextGen Starters trains Nigerians to build real AI tools 
                        for real businesses, and earn recurring income through 
                        our AI Foundry.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href={route("apply")}
                            target="_blank"
                            className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
                        >
                            Apply for Cohort 1
                        </Link>

                        <a
                            href="#business"
                            className="border border-slate-900 px-6 py-3 rounded-full hover:bg-slate-900 hover:text-white transition"
                        >
                            Learn for Businesses
                        </a>
                    </div>
                </div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/img/nextgenai4.jpeg"
                        alt="AI student"
                        className="rounded-2xl shadow-xl"
                    />
                </motion.div>
            </div>
        </section>
    );
}

import { motion } from "framer-motion";
import { BookOpen, Wrench, DollarSign } from "lucide-react";

const items = [
    {
        icon: BookOpen,
        title: "Learn (The Academy)",
        desc: "Cohort-based live programs in AI, Data, and Automation."
    },
    {
        icon: Wrench,
        title: "Build (The Foundry)",
        desc: "Top students create AI agents and tools for real businesses."
    },
    {
        icon: DollarSign,
        title: "Earn (Marketplace)",
        desc: "Students receive revenue share from products they build."
    }
];

export default function WhatWeDo() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Not Just a School. 
                    <span className="text-orange-500"> A Tech Production System.</span>
                </h2>

                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl shadow-md border border-gray-100"
                        >
                            <item.icon size={40} className="text-orange-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="mt-4 text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

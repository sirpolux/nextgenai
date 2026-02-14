import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Chioma Okafor",
        cohort: "Cohort 1",
        program: "AI Automation & Prompt Engineering",
        image: "/images/passport1.jpg",
        message:
            "Before joining NextGen, I had no idea how AI worked. Now I build chatbots for small businesses and earn monthly income."
    },
    {
        name: "David Adeyemi",
        cohort: "Cohort 1",
        program: "Beginner Tech & AI Foundations",
        image: "/images/passport2.jpg",
        message:
            "The structure was powerful. I moved from zero tech knowledge to building real digital workflows in just weeks."
    },
    {
        name: "Fatima Bello",
        cohort: "Cohort 1",
        program: "AI Automation & Prompt Engineering",
        image: "/images/passport3.jpg",
        message:
            "The Foundry model is different. We don’t just learn — we build tools that real businesses actually use."
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-[#FFF8ED]">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Built by Students. Used by Businesses.
                </h2>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Real people. Real skills. Real income potential.
                </p>

                <div className="mt-16 grid md:grid-cols-3 gap-10">

                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left"
                        >
                            <p className="text-gray-600 italic">
                                “{item.message}”
                            </p>

                            <div className="mt-6 flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
                                />
                                <div>
                                    <p className="font-semibold text-slate-900">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {item.cohort}
                                    </p>
                                    <p className="text-sm text-orange-500">
                                        {item.program}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

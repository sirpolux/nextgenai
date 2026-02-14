import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CurriculumAccordion({ data }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-10 space-y-4">
            {data.map((week, index) => (
                <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-orange-50 transition"
                    >
                        <span className="font-semibold text-left">
                            {week.title}
                        </span>
                        <ChevronDown
                            className={`transition-transform ${
                                openIndex === index ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-6 pb-6 text-gray-600"
                            >
                                <ul className="mt-4 space-y-2 list-disc list-inside">
                                    {week.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

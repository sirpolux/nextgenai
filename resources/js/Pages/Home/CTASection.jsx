import { Link } from "@inertiajs/react";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="relative py-28 bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">
            
            {/* Subtle Glow Background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_white,_transparent_60%)]"></div>

            <div className="relative max-w-5xl mx-auto px-6 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold leading-tight"
                >
                    Start Your Tech Journey Today.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-6 text-lg md:text-xl text-orange-100"
                >
                    Join Cohort 1 and begin building AI tools that generate real income.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-12 flex flex-col md:flex-row justify-center gap-6"
                >
                    <a
                        href="https://forms.gle/MZHLiEvi124m2BCA8"
                        target="_blank"
                        className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
                    >
                        Apply for Cohort 1
                    </a>

                    <a
                        href="tel:+2347045130608"
                        className="border border-white px-8 py-4 rounded-full flex items-center justify-center gap-3 text-lg hover:bg-white hover:text-orange-600 transition"
                    >
                        <Phone size={20} />
                        Contact Us
                    </a>
                </motion.div>

                {/* Social / Contact Info */}
                <div className="mt-10 text-orange-100 text-sm">
                    +234 704 5130 608  
                    <br className="md:hidden" />
                    <span className="mx-2 hidden md:inline">|</span>
                    @nextgenstarters on all social platforms
                </div>
            </div>
        </section>
    );
}

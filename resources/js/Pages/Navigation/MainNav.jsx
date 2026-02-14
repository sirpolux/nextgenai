import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MainNav() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [programsOpen, setProgramsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-slate-900">
                    NextGen <span className="text-orange-500">Starters</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                    <Link href="/">Home</Link>

                    <div className="relative">
                        <button
                            onClick={() => setProgramsOpen(!programsOpen)}
                            className="flex items-center gap-1"
                        >
                            Programs <ChevronDown size={16} />
                        </button>

                        <AnimatePresence>
                            {programsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-8 left-0 bg-white shadow-lg rounded-xl p-4 w-64"
                                >
                                    <Link href="/programs/beginner" className="block py-2 hover:text-orange-500">
                                        Beginner Tech & AI Foundations
                                    </Link>
                                    <Link href="/programs/automation" className="block py-2 hover:text-orange-500">
                                        AI Automation & Prompt Engineering
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/foundry">Foundry</Link>
                    <Link href="/business">For Businesses</Link>
                    <Link href="/about">About Us</Link>

                    <Link
                        href="/apply"
                        className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition"
                    >
                        Apply Now
                    </Link>
                </div>

                {/* Mobile Icon */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden"
                >
                    {mobileOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 p-6 space-y-4"
                    >
                        <Link href="/">Home</Link>
                        <Link href="/programs">Programs</Link>
                        <Link href="/foundry">Foundry</Link>
                        <Link href="/business">For Businesses</Link>
                        <Link href="/about">About</Link>
                        <Link href="/apply" className="block bg-orange-500 text-white text-center py-2 rounded-full">
                            Apply Now
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

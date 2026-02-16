import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MainNav() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
    const [desktopProgramsOpen, setDesktopProgramsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    }, [mobileOpen]);

    const closeMenu = () => {
        setMobileOpen(false);
        setMobileProgramsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-slate-900">
                    NextGen <span className="text-orange-500">Starters</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 relative">
                    
                    <Link href="/">Home</Link>

                    {/* Desktop Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setDesktopProgramsOpen(true)}
                        onMouseLeave={() => setDesktopProgramsOpen(false)}
                    >
                        <button className="flex items-center gap-1">
                            Programs <ChevronDown size={16} />
                        </button>

                        <AnimatePresence>
                            {desktopProgramsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-8 left-0 bg-white shadow-xl rounded-xl p-5 w-72 border border-gray-100"
                                >
                                    <Link
                                        href="/programs/beginner"
                                        className="block py-2 hover:text-orange-500"
                                    >
                                        Beginner Tech & AI Foundations
                                    </Link>
                                    <Link
                                        href="/programs/automation"
                                        className="block py-2 hover:text-orange-500"
                                    >
                                        AI Automation & Prompt Engineering
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="#foundary">Foundry</Link>
                    <Link href="#business">For Businesses</Link>
                    <Link href="/about">About Us</Link>

                    <a
                        href="https://forms.gle/MZHLiEvi124m2BCA8"
                        target="_blank"
                        className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition"
                    >
                        Apply Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(true)}
                    className="md:hidden"
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-white z-50 p-8 flex flex-col "
                    >
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-lg font-bold">
                                NextGen <span className="text-orange-500">Starters</span>
                            </h2>
                            <button onClick={closeMenu}>
                                <X size={28} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 text-lg font-medium">

                            <Link onClick={closeMenu} href="/">Home</Link>

                            {/* Mobile Dropdown */}
                            <button
                                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                                className="flex justify-between items-center"
                            >
                                Programs <ChevronDown size={20} />
                            </button>

                            {mobileProgramsOpen && (
                                <div className="pl-4 flex flex-col gap-4 text-base text-gray-600">
                                    <Link onClick={closeMenu} href="/programs/beginner">
                                        Beginner Tech & AI Foundations
                                    </Link>
                                    <Link onClick={closeMenu} href="/programs/automation">
                                        AI Automation & Prompt Engineering
                                    </Link>
                                </div>
                            )}

                            <Link onClick={closeMenu} href="/foundry">Foundry</Link>
                            <a onClick={closeMenu} href="#business">For Businesses</a>
                            <Link onClick={closeMenu} href="/about">About Us</Link>

                            <a
                                onClick={closeMenu}
                                target="_blank"
                                href="https://forms.gle/MZHLiEvi124m2BCA8"
                                className="mt-6 bg-orange-500 text-white text-center py-3 rounded-full"
                            >
                                Apply Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

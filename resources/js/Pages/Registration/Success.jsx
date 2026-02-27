import { Link, usePage } from "@inertiajs/react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Base from "../Base";
import MainNav from "../Navigation/MainNav";
import FooterSection from "../Footer/FooterSection";


export default function Success() {
    const { flash } = usePage().props;

    return (
        <>
            <MainNav/>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white shadow-xl rounded-3xl max-w-2xl w-full p-10 text-center"
                >
                    <div className="flex justify-center mb-6">
                        <div className="bg-green-100 p-4 rounded-full">
                            <CheckCircle className="w-14 h-14 text-green-600" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-800">
                        Application Submitted Successfully 🎉
                    </h1>

                    <p className="text-gray-600 mt-4">
                        Thank you for applying to NextGen Starters.
                        We’ve received your application and our team
                        will review it carefully.
                    </p>

                    <div className="mt-6 text-gray-600 space-y-2">
                        <p>📧 A confirmation email has been sent to you.</p>
                        <p>📞 If shortlisted, we’ll contact you shortly.</p>
                        <p>⏳ Please monitor your inbox</p>
                    </div>

                    <div className="mt-10 flex justify-center gap-4">
                        <Link
                            href="/"
                            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition"
                        >
                            Back to Home
                        </Link>

                        {/* <Link
                            href="/application"
                            className="px-6 py-3 border border-gray-300 hover:bg-gray-100 rounded-xl font-semibold transition"
                        >
                            Submit Another Application
                        </Link> */}
                    </div>
                </motion.div>
                
            </div>
            <FooterSection />
        </>
    );
}
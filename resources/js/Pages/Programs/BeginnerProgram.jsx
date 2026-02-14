
import { Link } from "@inertiajs/react";
import MainNav from "../Navigation/MainNav";
import CTASection from "../Home/CTASection";

export default function BeginnerProgram() {
    return (
        <>
            <MainNav />

            <section className="pt-32 pb-20 bg-[#FFF8ED]">
                <div className="max-w-4xl mx-auto px-6">

                    <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm">
                        8 Weeks
                    </span>

                    <h1 className="mt-6 text-4xl font-bold text-slate-900">
                        Beginner Tech & AI Foundations
                    </h1>

                    <p className="mt-6 text-lg text-gray-600">
                        This program is designed for complete beginners with little or no tech experience.
                        Students will learn essential digital skills, AI tools, and foundational tech concepts
                        needed to thrive in the modern digital economy.
                    </p>

                    <h2 className="mt-12 text-2xl font-semibold">By the end of this program, you will:</h2>

                    <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
                        <li>Understand AI and how to use it professionally</li>
                        <li>Build digital workflows</li>
                        <li>Use no-code tools</li>
                        <li>Create personal tech portfolios</li>
                        <li>Be ready for advanced AI or data courses</li>
                    </ul>

                    <h2 className="mt-12 text-2xl font-semibold">Who is this for?</h2>

                    <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
                        <li>Students</li>
                        <li>Job seekers</li>
                        <li>Entrepreneurs</li>
                        <li>Career switchers</li>
                    </ul>

                    <section className="mt-20">
                        <h2 className="text-3xl font-bold">Pricing</h2>

                        <div className="mt-10 grid md:grid-cols-2 gap-8">

                            {/* Full Payment */}
                            <div className="p-8 border rounded-2xl shadow-sm">
                                <h3 className="text-xl font-semibold">Full Payment</h3>
                                <p className="mt-4 text-3xl font-bold text-orange-500">₦180,000</p>
                                <p className="text-sm text-gray-500 line-through">₦200,000</p>
                                <p className="mt-2 text-green-600 text-sm">Save 10%</p>
                            </div>

                            {/* Installment */}
                            <div className="p-8 border rounded-2xl shadow-sm">
                                <h3 className="text-xl font-semibold">Installment Plan</h3>
                                <ul className="mt-4 text-gray-600 space-y-2">
                                    <li>₦100,000 to start</li>
                                    <li>₦100,000 in Week 4</li>
                                </ul>
                            </div>
                        </div>

                        {/* Scholarship */}
                        <div className="mt-10 p-8 bg-orange-50 border border-orange-200 rounded-2xl">
                            <h3 className="text-xl font-semibold text-orange-600">
                                Scholarship Option
                            </h3>
                            <ul className="mt-4 text-gray-700 space-y-2">
                                <li>5 partial scholarships per cohort</li>
                                <li>Up to 40% discount</li>
                                <li>Based on need + motivation</li>
                            </ul>
                        </div>
                    </section>

                    <Link
                        href="/curriculum/beginner"
                        className="inline-block mt-10 text-orange-500 font-semibold hover:underline"
                    >
                        View Full Curriculum →
                    </Link>
                    <br />

                    <Link
                        href="/apply"
                        className="inline-block mt-12 bg-orange-500 text-white px-8 py-4 rounded-full"
                    >
                        Apply Now
                    </Link>


                </div>
            </section>

            <CTASection />
        </>
    );
}

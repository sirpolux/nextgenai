import MainNav from "@/Components/MainNav";
import CTASection from "@/Components/CTASection";
import { Link } from "@inertiajs/react";

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

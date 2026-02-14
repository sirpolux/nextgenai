import MainNav from "@/Components/MainNav";
import CTASection from "@/Components/CTASection";
import { Link } from "@inertiajs/react";

export default function AutomationProgram() {
    return (
        <>
            <MainNav />

            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">

                    <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm">
                        10 Weeks
                    </span>

                    <h1 className="mt-6 text-4xl font-bold text-slate-900">
                        AI Automation & Prompt Engineering
                    </h1>

                    <p className="mt-6 text-lg text-gray-600">
                        This is a hands-on program where students learn to build AI-powered business tools
                        such as chatbots, automated customer systems, and intelligent assistants.
                    </p>

                    <h2 className="mt-12 text-2xl font-semibold">By the end, you will:</h2>

                    <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
                        <li>Build AI chatbots</li>
                        <li>Automate business processes</li>
                        <li>Use APIs</li>
                        <li>Work on real business projects</li>
                        <li>Be eligible for NextGen Foundry</li>
                    </ul>

                    <h2 className="mt-12 text-2xl font-semibold">Who is this for?</h2>

                    <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
                        <li>Tech beginners with some computer knowledge</li>
                        <li>Freelancers</li>
                        <li>Digital marketers</li>
                        <li>Business owners</li>
                        <li>Graduates</li>
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

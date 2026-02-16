

import { Link } from "@inertiajs/react";
import MainNav from "../Navigation/MainNav";
import CTASection from "../Home/CTASection";
import FooterSection from "../Footer/FooterSection";

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

                    <section className="mt-20">
                        <h2 className="text-3xl font-bold">Pricing</h2>

                        <div className="mt-10 grid md:grid-cols-2 gap-8">

                            <div className="p-8 border rounded-2xl shadow-sm">
                                <h3 className="text-xl font-semibold">Full Payment</h3>
                                <p className="mt-4 text-3xl font-bold text-orange-500">₦300,000</p>
                                <p className="text-sm text-gray-500 line-through">₦450,000</p>
                            </div>

                            <div className="p-8 border rounded-2xl shadow-sm">
                                <h3 className="text-xl font-semibold">Installment Plan</h3>
                                <ul className="mt-4 text-gray-600 space-y-2">
                                    <li>₦150,000 to start</li>
                                    <li>₦100,000 in Week 4</li>
                                    <li>₦50,000 in Week 7</li>
                                </ul>
                            </div>
                        </div>

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
                        href="/curriculum/automation"
                        className="inline-block mt-10 text-orange-500 font-semibold hover:underline"
                    >
                        View Full Curriculum →
                    </Link>
                    <br />
                    <a
                        target="_blank"
                        href="https://forms.gle/MZHLiEvi124m2BCA8"
                        className="inline-block mt-10 bg-orange-500 text-white px-8 py-4 rounded-full"
                    >
                        Apply Now
                    </a>
                </div>
            </section>

            {/* <CTASection /> */}
            <FooterSection />
        </>
    );
}

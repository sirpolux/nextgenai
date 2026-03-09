import { Link } from "@inertiajs/react";
import MainNav from "../Navigation/MainNav";
import FooterSection from "../Footer/FooterSection";

export default function DataAnalyticsProgram() {
    return (
        <>
            <MainNav />

            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">

                    <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm">
                        12 Weeks
                    </span>

                    <h1 className="mt-6 text-4xl font-bold text-slate-900">
                        Data Analytics & Business Intelligence <span className="text-sm text-gray-500"> (Coming Soon)</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600">
                        The Data Analytics program is designed to equip students with in-demand
                        analytical and problem-solving skills used by companies worldwide.
                        Students will learn how to collect, analyze, and visualize data to support
                        business decisions using real datasets and practical industry tools.
                    </p>

                    <h2 className="mt-12 text-2xl font-semibold">By the end, you will:</h2>

                    <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
                        <li>Analyze and interpret real-world datasets</li>
                        <li>Create professional dashboards using Power BI or Tableau</li>
                        <li>Write SQL queries to retrieve and manage data</li>
                        <li>Use Excel for advanced business analysis</li>
                        <li>Use Python for data manipulation and automation</li>
                        <li>Present insights that support business decisions</li>
                    </ul>

                    <h2 className="mt-12 text-2xl font-semibold">Who is this for?</h2>

                    <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
                        <li>Beginners interested in data careers</li>
                        <li>Business professionals who work with reports</li>
                        <li>Entrepreneurs who want to make data-driven decisions</li>
                        <li>Graduates seeking entry-level data roles</li>
                        <li>Freelancers who want to offer analytics services</li>
                    </ul>

                    <section className="mt-20">
                        <h2 className="text-3xl font-bold">Pricing</h2>

                        <div className="mt-10 grid md:grid-cols-2 gap-8">

                            <div className="p-8 border rounded-2xl shadow-sm">
                                <h3 className="text-xl font-semibold">Full Payment</h3>
                                <p className="mt-4 text-3xl font-bold text-orange-500">₦300,000</p>
                                <p className="text-sm text-gray-500">Early Bird Discount Available</p>
                            </div>

                            <div className="p-8 border rounded-2xl shadow-sm">
                                <h3 className="text-xl font-semibold">Installment Plan</h3>
                                <ul className="mt-4 text-gray-600 space-y-2">
                                    <li>₦150,000 to start</li>
                                    <li>₦150,000 at Week 6</li>
                                </ul>
                            </div>

                        </div>

                        <div className="mt-10 p-8 bg-orange-50 border border-orange-200 rounded-2xl">
                            <h3 className="text-xl font-semibold text-orange-600">
                                Corporate Sponsored Option
                            </h3>
                            <ul className="mt-4 text-gray-700 space-y-2">
                                <li>Discount available for organizations</li>
                                <li>Applies when enrolling 5+ participants</li>
                                <li>Ideal for teams and staff training</li>
                            </ul>
                        </div>

                    </section>

                    <Link
                        href="/curriculum/data-analytics"
                        className="inline-block mt-10 text-orange-500 font-semibold hover:underline"
                    >
                        View Full Curriculum →
                    </Link>

                    <br />

                    <Link
                        target="_blank"
                        href="/apply"
                        className="inline-block mt-10 bg-orange-500 text-white px-8 py-4 rounded-full"
                    >
                        Join Waitlist
                    </Link>

                </div>
            </section>

            <FooterSection />
        </>
    );
}
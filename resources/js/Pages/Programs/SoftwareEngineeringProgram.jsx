import { Link } from "@inertiajs/react";
import MainNav from "../Navigation/MainNav";
import FooterSection from "../Footer/FooterSection";

export default function SoftwareEngineeringProgram() {
    return (
        <>
            <MainNav />

            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">

                    <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm">
                        16 Weeks
                    </span>

                    <h1 className="mt-6 text-4xl font-bold text-slate-900">
                        Full-Stack Software Engineering <span className="text-sm text-gray-500"> (Coming Soon)</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600">
                        The Software Engineering program prepares students to become professional
                        developers capable of building scalable web applications. This intensive,
                        hands-on program focuses on real-world coding experience, teamwork, and
                        production-ready systems.
                    </p>

                    <h2 className="mt-12 text-2xl font-semibold">By the end, you will:</h2>

                    <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
                        <li>Build full-stack web applications</li>
                        <li>Develop modern front-end interfaces using React</li>
                        <li>Create REST APIs and backend systems</li>
                        <li>Work with databases such as MongoDB or SQL</li>
                        <li>Deploy applications to cloud environments</li>
                        <li>Collaborate using Git and version control</li>
                    </ul>

                    <h2 className="mt-12 text-2xl font-semibold">Who is this for?</h2>

                    <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
                        <li>Beginners who want to start a career in software development</li>
                        <li>Students interested in building real applications</li>
                        <li>Graduates seeking high-paying tech jobs</li>
                        <li>Entrepreneurs building tech products</li>
                        <li>Freelancers who want to offer development services</li>
                    </ul>

                    <section className="mt-20">
                        <h2 className="text-3xl font-bold">Pricing</h2>

                        <div className="mt-10 grid md:grid-cols-2 gap-8">

                            <div className="p-8 border rounded-2xl shadow-sm">
                                <h3 className="text-xl font-semibold">Full Payment</h3>
                                <p className="mt-4 text-3xl font-bold text-orange-500">₦550,000</p>
                            </div>

                            <div className="p-8 border rounded-2xl shadow-sm">
                                <h3 className="text-xl font-semibold">Installment Plan</h3>
                                <ul className="mt-4 text-gray-600 space-y-2">
                                    <li>₦200,000 to start</li>
                                    <li>₦200,000 at Week 4</li>
                                    <li>₦150,000 at Week 8</li>
                                </ul>
                            </div>

                        </div>

                        <div className="mt-10 p-8 bg-orange-50 border border-orange-200 rounded-2xl">
                            <h3 className="text-xl font-semibold text-orange-600">
                                Early Waitlist Bonus
                            </h3>
                            <ul className="mt-4 text-gray-700 space-y-2">
                                <li>₦50,000 discount for early applicants</li>
                                <li>Priority admission into the program</li>
                                <li>Access to a free preparation workshop</li>
                            </ul>
                        </div>

                    </section>

                    <Link
                        href="/curriculum/software-engineering"
                        className="inline-block mt-10 text-orange-500 font-semibold hover:underline"
                    >
                        View Full Curriculum →
                    </Link>

                    <br />

                    <Link
                        target="_blank"
                        href="/join-waitlist"
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
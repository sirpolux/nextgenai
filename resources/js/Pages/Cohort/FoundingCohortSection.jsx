import { Link } from "@inertiajs/react";
import MainNav from "../Navigation/MainNav";
import FooterSection from "../Footer/FooterSection";

export default function FoundingCohortSection() {
    return (
        <div>
            <MainNav />
        <section className="pt-32 pb-20 bg-orange-50">
            <div className="max-w-5xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-slate-900">
                    Join the Founding Cohort
                </h2>

                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                    We are opening limited seats for our first cohort. Join the waitlist
                    to receive priority admission, early discounts, and access to
                    exclusive preparation sessions before the program begins.
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">

                    <div className="flex items-start gap-3">
                        <span className="text-orange-500">✓</span>
                        <p>Priority admission before public launch</p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="text-orange-500">✓</span>
                        <p>Early-bird tuition discount</p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="text-orange-500">✓</span>
                        <p>Free preparation workshop</p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="text-orange-500">✓</span>
                        <p>Direct access to instructors</p>
                    </div>

                </div>

                <p className="mt-10 text-sm text-gray-500">
                    Limited to the first 50 students.
                </p>

                <Link
                    href="/join-waitlist/form"
                    className="inline-block mt-8 bg-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
                >
                    Join the Waitlist
                </Link>

            </div>
        </section>
        <FooterSection />
        </div>
    );
}
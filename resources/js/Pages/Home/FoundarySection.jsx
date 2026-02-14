import { Link } from "@inertiajs/react";
import { CheckCircle } from "lucide-react";

export default function FoundrySection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                
                {/* Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        The NextGen Foundry —
                        <span className="text-orange-500"> Where Learning Becomes Income</span>
                    </h2>

                    <ul className="mt-8 space-y-4">
                        {[
                            "Students build real AI tools",
                            "NextGen provides API + infrastructure",
                            "Tools are sold to SMEs",
                            "Students earn monthly revenue share"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="text-orange-500 mt-1" size={20} />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/foundry"
                        className="inline-block mt-8 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
                    >
                        Learn More
                    </Link>
                </div>

                {/* Image */}
                <div>
                    <img
                        src="/images/sample2.png"
                        alt="NextGen Foundry"
                        className="rounded-2xl shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}

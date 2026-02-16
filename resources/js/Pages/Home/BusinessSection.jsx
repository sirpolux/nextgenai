import { Link } from "@inertiajs/react";
import { CheckCircle } from "lucide-react";

export default function BusinessSection() {
    return (
        <section id="business" className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                
                <h2 className="text-3xl md:text-4xl font-bold">
                    Get Affordable AI for Your Business
                </h2>

                <p className="mt-4 text-gray-300">
                    We help Nigerian SMEs deploy real AI solutions that drive growth.
                </p>

                <div className="mt-12 grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
                    {[
                        "Automate customer service",
                        "Deploy AI chatbots",
                        "Automate marketing",
                        "Build dashboards"
                    ].map((item, index) => (
                        <div key={index} className="flex gap-3">
                            <CheckCircle className="text-orange-500 mt-1" size={20} />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

                {/* <Link
                    href="/business/book-demo"
                    className="inline-block mt-12 bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition"
                >
                    Book a Demo
                </Link> */}
            </div>
        </section>
    );
}

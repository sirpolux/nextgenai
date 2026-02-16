export default function ContactUs() {
    return (
        <>
            {/* ================= CONTACT SECTION ================= */}
            <section className="py-28 px-6 md:px-16 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

                    {/* Left - Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Contact <span className="text-orange-500">NextGen Starters</span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            We collaborate with businesses, government agencies,
                            development partners, and aspiring tech professionals.
                            Reach out to us, let’s build the future of AI together.
                        </p>

                        <div className="space-y-6 text-gray-700">

                            <div>
                                <h4 className="font-semibold text-gray-900">Address</h4>
                                <p>Victoria Island, Lagos, Nigeria</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900">Phone</h4>
                                <a href="tel:07045130608" className="hover:text-orange-500 transition">
                                    07045130608
                                </a>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900">Email</h4>
                                <div className="flex flex-col space-y-1">
                                    <a href="mailto:nextgenstartersltd@gmail.com" className="hover:text-orange-500 transition">
                                        nextgenstartersltd@gmail.com
                                    </a>
                                    <a href="mailto:info@nextgenstarters.com" className="hover:text-orange-500 transition">
                                        info@nextgenstarters.com
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900">Website</h4>
                                <a href="https://nextgenstarters.com/" target="_blank"
                                    className="hover:text-orange-500 transition">
                                    https://nextgenstarters.com/
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Right - Glass Contact Card */}
                    <div className="backdrop-blur-lg bg-[#FFF6E9]/70 border border-white/40 shadow-xl rounded-3xl p-10">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                            Connect With Us
                        </h3>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Have questions about our Academy, Foundry, or AI solutions?
                            Send us a message directly or connect via WhatsApp and Instagram.
                        </p>

                        <div className="flex flex-col gap-4">

                            <a
                                href="https://wa.me/2347045130608"
                                target="_blank"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-center transition shadow-md"
                            >
                                Chat on WhatsApp
                            </a>

                            <a
                                href="https://www.instagram.com/nextgenstarters"
                                target="_blank"
                                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-xl font-semibold text-center transition"
                            >
                                Follow on Instagram
                            </a>

                        </div>
                    </div>

                </div>
            </section>

        </>

    );
}
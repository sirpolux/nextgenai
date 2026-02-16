export default function FooterSection() {
    return (
        <div>
            {/* ================= FOOTER ================= */}
            <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-300 py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            NextGen <span className="text-orange-500">Starters</span>
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            Building industry-ready digital talent and scalable AI
                            solutions for businesses across Nigeria and globally.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="/" className="hover:text-orange-500 transition">Home</a></li>
                            <li><a href="/programs" className="hover:text-orange-500 transition">Programs</a></li>
                            <li><a href="/foundry" className="hover:text-orange-500 transition">Foundry</a></li>
                            <li><a href="/#business" className="hover:text-orange-500 transition">For Businesses</a></li>
                            <li><a href="/about" className="hover:text-orange-500 transition">About Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Summary */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>

                        <div className="space-y-3 text-gray-400">
                            <p>Victoria Island, Lagos, Nigeria</p>
                            <p>07045130608</p>
                            <p>info@nextgenstarters.com</p>

                            <div className="flex gap-4 mt-4">
                                <a href="https://wa.me/2347045130608" target="_blank"
                                    className="hover:text-orange-500 transition">
                                    WhatsApp
                                </a>
                                <a href="https://www.instagram.com/nextgenstarters" target="_blank"
                                    className="hover:text-orange-500 transition">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Line */}
                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} NextGen Starters Limited. All rights reserved.
                </div>
            </footer>

        </div>
    );
}
import MainNav from "../Navigation/MainNav";
import FooterSection from "../Footer/FooterSection";

export default function SuccessPage() {

    return (
        <>
            <MainNav />

            <section className="pt-32 pb-20 bg-white text-center">

                <h1 className="text-4xl font-bold">
                    You're on the Waitlist 🎉
                </h1>

                <p className="mt-6 text-gray-600 max-w-xl mx-auto">
                    You’ll be the first to know when enrollment opens.
                    Waitlist members receive priority admission,
                    discounts, and exclusive updates.
                </p>

                <a
                    href="https://chat.whatsapp.com/YOUR_LINK"
                    className="inline-block mt-10 bg-green-500 text-white px-8 py-4 rounded-full"
                >
                    Join WhatsApp Community
                </a>

            </section>

            <FooterSection />
        </>
    );
}
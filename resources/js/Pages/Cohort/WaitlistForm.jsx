import { useForm } from "@inertiajs/react";
import MainNav from "../Navigation/MainNav";
import FooterSection from "../Footer/FooterSection";

export default function WaitlistForm({ program }) {

    const { data, setData, post, processing } = useForm({
        name: "",
        email: "",
        phone: "",
        program: program,
        experience_level: "",
        message: ""
    });

    function submit(e) {
        e.preventDefault();
        post("/waitlist");
    }

    return (
        <>
            <MainNav />

            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-xl mx-auto px-6">

                    <h1 className="text-4xl font-bold text-center">
                        Join the Waitlist
                    </h1>

                    <p className="text-center mt-4 text-gray-600">
                        Be the first to know when the program opens.
                    </p>

                    <form onSubmit={submit} className="mt-10 space-y-6">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border p-4 rounded-lg"
                            onChange={e => setData('name', e.target.value)}
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border p-4 rounded-lg"
                            onChange={e => setData('email', e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full border p-4 rounded-lg"
                            onChange={e => setData('phone', e.target.value)}
                        />

                        <select
                            className="w-full border p-4 rounded-lg"
                            onChange={e => setData('experience_level', e.target.value)}
                        >
                            <option value="">Experience Level</option>
                            <option>Beginner</option>
                            <option>Some Experience</option>
                            <option>Intermediate</option>
                        </select>

                        <textarea
                            placeholder="Why are you interested?"
                            className="w-full border p-4 rounded-lg"
                            onChange={e => setData('message', e.target.value)}
                        />

                        <button
                            disabled={processing}
                            className="w-full bg-orange-500 text-white py-4 rounded-full"
                        >
                            Join Waitlist
                        </button>

                    </form>

                </div>
            </section>

            <FooterSection />
        </>
    );
}
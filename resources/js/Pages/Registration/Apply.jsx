// import MainNav from "@/Components/MainNav";
// import CTASection from "@/Components/CTASection";
import { useForm } from "@inertiajs/react";
import { Loader2 } from "lucide-react";
import MainNav from "../Navigation/MainNav";
import InputField from "../Form/InputField";
import RadioGroup from "../Form/RadioGroup";
import CTASection from "../Home/CTASection";
import FooterSection from "../Footer/FooterSection";
import Base from "../Base";
import toast from "react-hot-toast";
import InputArea from "../Form/InputArea";

export default function Apply() {

    const { data, setData, post, processing, errors } = useForm({
        email: "",
        name: "",
        location: "",
        phone: "",
        reason_for_applying: "",
        program: "",
        tech_level: "",
        has_laptop: "",
        can_commit: "",
        tuition_ready: "",
        referral_source: ""

    });

    const submit = (e) => {
        e.preventDefault();
        post("/application", 
            { 
                onSuccess: () => 
                    {
                        // reset();
                        // toast.success("Application submitted successfully");
                    }
            });
    };

    return (
        <>
        <Base>
            <MainNav />

            <section className="pt-32 pb-20 bg-[#FFF8ED]">
                <div className="max-w-3xl mx-auto px-6">

                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-slate-900">
                            Apply for Cohort 1
                        </h1>

                        <p className="mt-4 text-gray-600">
                            This is a selective cohort-based program focused on building real AI tools for real businesses.
                        </p>

                        <p className="mt-2 text-gray-600">
                            Please complete this application carefully. Shortlisted applicants will be contacted for the next stage.
                        </p>
                    </div>

                    {/* FORM */}
                    <form onSubmit={submit} className="mt-12 space-y-8 bg-white p-8 rounded-2xl shadow-lg">

                        {/* Basic Info */}
                        <InputField
                            label="Email"
                            required
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            error={errors.email}
                        />

                        <InputField
                            label="Name"
                            required
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            error={errors.name}
                        />

                        <InputField
                            label="Location"
                            required
                            value={data.location}
                            onChange={(e) => setData("location", e.target.value)}
                            error={errors.location}
                        />

                        <InputField
                            label="Phone number (WhatsApp)"
                            required
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            error={errors.phone}
                        />

                        <InputArea 
                            label="Why are you interested in this program and what do you hope to achieve?"
                            required
                            name="reason_for_applying"
                            value={data.reason_for_applying}
                            onChange={(e)=>setData('reason_for_applying', e.target.value)}
                            error={errors.reason_for_applying}
                        />

                        {/* Interested Program */}
                        <RadioGroup
                            label="Interested Program"
                            required
                            name="program"
                            options={[
                                "Beginner Tech & AI Foundations (8 Weeks)",
                                "AI Automation & Prompt Engineering (10 Weeks)"
                            ]}
                            value={data.program}
                            onChange={(e)=>setData('program', e.target.value)}
                            error={errors.program} />

                        {/* Tech Level */}
                        <RadioGroup
                            label="What is your current level of tech knowledge?"
                            required
                            name="tech_level"
                            options={[
                                "Complete beginner",
                                "Basic computer skills",
                                "Some tech experience",
                                "Intermediate",
                                "Advanced"
                            ]}
                            value={data.tech_level}
                            onChange={(e)=>setData('tech_level', e.target.value)}
                            error={errors.tech_level}
                        />

                        {/* Laptop Access */}
                        <RadioGroup
                            label="Do you have access to a laptop and stable internet?"
                            required
                            name="has_laptop"
                            options={["Yes", "No"]}
                            value={data.has_laptop}
                           onChange={(e)=>setData('has_laptop', e.target.value)}
                           error={errors.has_laptop}
                        />

                        {/* Weekly Commitment */}
                        <RadioGroup
                            label="Are you able to commit 6–10 hours weekly to live sessions and projects?"
                            required
                            name="can_commit"
                            options={["Yes", "No"]}
                            value={data.can_commit}
                            onChange = {(e)=>setData('can_commit', e.target.value)}
                            error={errors.can_commit}
                        />

                        {/* Payment Readiness */}
                        <RadioGroup
                            label="This is a paid program. Are you prepared to meet the tuition requirements?"
                            required
                            name="tuition_ready"
                            options={[
                                "Yes (Full payment)",
                                "Yes (Installment plan)"
                            ]}
                            value={data.tuition_ready}
                            onChange = {(e)=>setData('tuition_ready', e.target.value)}
                            error={errors.tuition_ready}
                        />

                        {/* Referral */}
                        <RadioGroup
                            label="How did you hear about NextGen Starters?"
                            required
                            name="referral_source"
                            options={[
                                "Instagram",
                                "LinkedIn",
                                "WhatsApp",
                                "Referral",
                                "Event",
                                "Other"
                            ]}
                            value={data.referral_source}
                            onChange={(e)=>setData('referral_source', e.target.value)}
                            error={errors.referral_source}
                        />

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-orange-500 text-white py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
                        >
                            {processing && <Loader2 className="animate-spin" size={18} />}
                            Submit Application
                        </button>

                    </form>
                </div>
            </section>

            <FooterSection />
            </Base>
        </>
    );
}
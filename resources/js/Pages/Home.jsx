
import ContactUs from "./Contact/ContactUs";
import BusinessSection from "./Home/BusinessSection";
import CTASection from "./Home/CTASection";
import FoundrySection from "./Home/FoundarySection";
import HeroSection from "./Home/HeroSection";
import ProgramsSection from "./Home/ProgramSection";
import TestimonialsSection from "./Home/TestimonialsSection";
import WhatWeDo from "./Home/WhatWeDo";
import MainNav from "./Navigation/MainNav";

export default function Home() {
    return (
        <div>
            <MainNav />
            <HeroSection />
            <WhatWeDo />
            <ProgramsSection />
            <FoundrySection />
            <BusinessSection />
            <TestimonialsSection />
            <CTASection />
            <ContactUs />

        </div>
    );
}
import React from "react";
import { AboutSection, CallToAction, FeaturesSection, HeroSection, TestimonialsSection } from "./starter-components/index.js";
import { Header, Footer } from "../components/common/index.js";

class StarterPage extends React.Component {
    
    render() {
        return (
            <div>
                <Header />
                <HeroSection />
                <AboutSection />
                <FeaturesSection />
                <TestimonialsSection />
                <CallToAction />
                <Footer />
            </div>
        )
    }
}

export default StarterPage;

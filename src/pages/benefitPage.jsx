import React, { useEffect } from 'react';
import BenefitTestimonial from "../components/benefitTestimonial";
import BenefitsBanner from "../components/benefitsBanner";
import BenefitsSection from "../components/benefitsSection";

const BenefitPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <BenefitsBanner />
            <BenefitsSection />
            <BenefitTestimonial />
        </>
    );
};

export default BenefitPage;

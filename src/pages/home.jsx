import Hero from "../components/hero"
import Benefits from "../components/benefits"
import ContactInformation from "../components/contactInformation"
import InsuranceForm from "../components/insuranceForm"
import InsurancePartners from "../components/insurancePartners"
import InsuranceRenewal from "../components/insuranceRenewal"
import PerksTestimonial from "../components/perksTestimonial"
import PowerAndSynergy from "../components/powerAndSynergy"


const Home = () => {
    return (
        < >
            <Hero />
            <Benefits />
            <PowerAndSynergy />
            <InsuranceRenewal />
            <PerksTestimonial />
            <InsurancePartners />
            <InsuranceForm />
            <ContactInformation />
        </>

    )
}

export default Home
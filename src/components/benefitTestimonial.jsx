import BtnGetQuote from "./btnGetQuote"
import img from "../assets/CoPilot _Flyer.jpg"
import { HashLink } from 'react-router-hash-link';
const BenefitTestimonial = () => {
    return (
        <div className="w-full h-full md:p-16 p-4 bg-slate-50 flex justify-start items-start ">
            <div className="flex-1 self-stretch p-2 py-8 md:p-12 bg-gradient-to-b from-brown-800 to-orange-500 rounded-lg flex justify-center items-center gap-10">
                <div className="flex-1 flex flex-col justify-start items-center gap-8">
                    <div className="self-stretch text-center text-white text-3xl font-semibold leading-9">
                        Get CoPilot for FREE when you renew your motor insurance and takaful with Perks today
                    </div>
                    <div className="flex justify-center items-start gap-4">
                        <a href={img} download className="px-4 py-2 rounded-full border border-green-600 overflow-hidden flex justify-center items-center ">
                            <div className="text-white text-base font-semibold leading-6 whitespace-nowrap">Download Flyer</div>
                        </a>
                        <HashLink smooth to="/#getQuote">
                            <BtnGetQuote />
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitTestimonial
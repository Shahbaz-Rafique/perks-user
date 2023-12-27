
import quote from "../assets/quote.svg"
import avatar from "../assets/avatar.svg"
const PerksTestimonial = () => {
    return (
        <div className="w-full h-full p-16 bg-gray-100 flex flex-col justify-start items-center">
            <div className=" flex flex-col justify-start items-center gap-8">
                <div className="w-4 h-4">

                    <img src={quote} alt="" />

                </div>
                <div className="self-stretch  flex flex-col justify-start items-center gap-8">
                    <div className="md:w-1/2 text-center text-gray-900  font-inter font-semibold leading-6 ">
                        &ldquo; Perks is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next Insurance application.&rdquo;
                    </div>
                </div>
                <div className="self-stretch justify-center items-center gap-2 flex">
                    <img className="w-8 h-8 rounded-full" src={avatar} alt="User Avatar" />
                    <div className="flex justify-start items-center gap-2">
                        <div className="text-gray-900 text-sm font-inter font-semibold ">Micheal Gough </div>
                        <div className="text-gray-900 text-xs font-inter font-semibold ">/</div>
                        <div className="text-gray-600 text-xs font-inter font-normal ">CEO at Google</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerksTestimonial;

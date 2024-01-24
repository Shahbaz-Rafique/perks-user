import tick from '../assets/tick.svg'
import p7 from '../assets/p7.svg'
const BenefitsSection = () => {


    const benefits = [
        {
            title: "Accidental Death or Permanent Disablement",
            amount: "RM10,000",
            subTitle:""
        
        }
        ,
        {
            title: "Hotel Accommodation due to Vehicle Breakdown",
            amount: "RM150/day",
            subTitle:"* Subject to breakdown occurring more than 70km from place of residence"

        }
        ,
        {
            title: "Double Indemnity on Public Conveyance",
            amount: "RM20,000",
            subTitle:""
        }
        ,
        {
            title: "Accidental Hospital Income",
            amount: "RM50/day",
            subTitle:""
        }
        ,{
            title: "Vehicle Break-in with loss of Valuables",
            amount: "RM1,000",
            subTitle:"*Subject to vehicle parked in a secured parking lot"
        },
        {
            title: "Accidental Medical Reimbursement",
            amount: "RM500",
            subTitle:""
       }
    ]


    return (
        <div className="w-full h-full md:p-16 p-4 bg-[#F9FAFB] flex flex-col justify-start items-start gap-8 ">
            <div className="self-stretch  flex flex-col justify-start items-center gap-4">
                <div className="px-2 py-1 bg-white border border-[#28AA73] rounded-full justify-center items-start ">
                    <div className="text-[#28AA73] text-xs">The Perks Advantage</div>
                </div>
                <div className="self-stretch  flex flex-col justify-center items-center gap-4">
                    <div className="self-stretch text-center text-black text-3xl">Perks That Go Beyond: Unveiling CoPilot</div>

                    <div className="flex-1 text-center text-[#6B7280] text-xs ">Learn About CoPilot Unique Benefits and Rewards That Come with Choosing Perks for Your Ride</div>
                </div>

            </div>
            <div className="justify-start items-start gap-24 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        benefits.map((item, index) => {
                            return (
                                <div key={index} className=" p-8 bg-white rounded-lg flex justify-start items-center gap-8 ">
                                    <div className="flex-1  justify-start items-center flex">
                                        <div className="w-8 h-8  bg-green-100 rounded-full justify-center items-center flex">
                                            <img src={tick} alt="" />
                                        </div>
                                        <div className="flex-1 flex flex-col text-black ">
                                            <h1 className='font-bold'>{item.title}</h1>
                                            <h2 className="text-xs">
                                                {item.subTitle}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="w-125 flex flex-col justify-center items-start gap-2 ">
                                        <div className="text-gray-500 ">Up to</div>
                                        <div className="self-stretch text-[#27A46F] ">{item.amount}</div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                    <div className="flex-1 flex flex-col justify-start items-start gap-4 mt-8">
                        <div className="self-stretch text-center text-gray-700 font-medium ">Terms & conditions apply :</div>
                        <div className="self-stretch text-center text-[#6B7280] text-14 font-Inter font-400">For Malaysian and non-Malaysian residents up to the age of 70 years</div>
                    </div>
                    <div className="flex-1 flex flex-col justify-start items-start gap-4 mt-8">
                        <div className="self-stretch text-center text-gray-700 font-medium">Click the links below for more information :</div>
                        <div className="self-stretch justify-center  flex items-start gap-4 ">
                            <div className="text-center text-[#6B7280] text-xs  underline">Policy Wording</div>
                            <div className="text-center text-[#6B7280] text-xs  underline">Product Disclosure Sheet</div>
                            <div className="text-center text-[#6B7280] text-xs  underline">Terms & Conditions</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="self-stretch p-8 flex flex-col justify-start items-start ">
                <div className="self-stretch h-140 flex flex-col justify-center md:justify-start items-center gap-4">
                    <div className='w-full flex flex-col md:flex-row gap-2 justify-center items-center'>
                        <span className="text-black whitespace-nowrap">Underwritten by</span>
                        <span className="text-black font-bold whitespace-nowrap">Berjaya Sompo Insurance Berhad</span>
                    </div>
                    <img className="w-[278px] h-[94px]" src={p7} alt="Berjaya Sompo Insurance Berhad" />
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;

import c1 from "../assets/c1.svg"
import c2 from "../assets/c2.svg"
import c3 from "../assets/c3.svg"
const ContactInformation = () => {
    return (
        <div className="w-full h-full md:p-16 p-4 bg-[#D88302] justify-start items-start gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex-1 self-stretch p-4 bg-[rgba(255,255,255,0.10)] rounded-lg overflow-hidden flex flex-col justify-start items-center gap-4">
                <div className="w-14 h-14 bg-[rgba(255,255,255,0.10)] rounded-full flex justify-center items-center">
                    <img src={c1} className="w-12 h-12" alt="" />
                </div>
                <div className="flex flex-col justify-start items-center gap-4">
                    <div className="text-center text-white text-20 font-Inter font-bold line-30">Company information:</div>
                    <div className="w-328 text-center text-white font-light text-xs">Perks Holdings Sdn Bhd [201601012548 / 1183479 – K]<br />Monday to Friday 9am to 6pm</div>
                </div>
            </div>
            <div className="flex-1 self-stretch p-4 bg-[rgba(255,255,255,0.10)] rounded-lg overflow-hidden flex flex-col justify-start items-center gap-4">
                
                <div className="w-14 h-14 bg-[rgba(255,255,255,0.10)] rounded-full flex justify-center items-center">
                    <img src={c2} className="w-12 h-12" alt="" />
                </div>
                <div className="flex flex-col justify-start items-center gap-4">
                    <div className="text-center text-white text-20 font-Inter font-bold line-30">Address:</div>
                    <div className="w-328 text-center text-white font-light text-xs">A-15-1, Block A, JayaONE,<br />72A Jalan Prof. Diraja Ungku Aziz,<br />46200 Petaling Jaya,<br />Selangor Darul Ehsan, Malaysia </div>
                </div>
            </div>
            <div className="flex-1 self-stretch p-4 bg-[rgba(255,255,255,0.10)] rounded-lg overflow-hidden flex flex-col justify-start items-center gap-4">
            <div className="w-14 h-14 bg-[rgba(255,255,255,0.10)] rounded-full flex justify-center items-center">
                    <img src={c3} className="w-12 h-12" alt="" />
                </div>
                <div className="flex flex-col justify-start items-center gap-4">
                    <div className="text-center text-white text-20 font-Inter font-bold line-30">Contact us:</div>
                    <div className="w-328 h-54 text-center">
                        <span className="text-white font-light text-xs">Email : </span>
                        <span className="text-white font-light text-xs underline">enquiry@perks.com.my<br /></span>
                        <span className="text-white font-light text-xs">Tel : +603 2779 2419</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInformation;

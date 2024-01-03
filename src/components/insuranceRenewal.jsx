import { MdArrowForward } from "react-icons/md"
import img4 from "../assets/image4.svg"
import img5 from "../assets/image5.svg"
import img6 from "../assets/image6.svg"

const InsuranceRenewal = () => {
    return (
        <div className="w-full h-full md:p-16 p-4  bg-white flex flex-col justify-start items-start gap-8">
        <div className="h-186 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch h-143 flex flex-col justify-start items-start gap-6">
            <div className="px-8 py-2 bg-white rounded-full border-2 border-[#28AA73] flex justify-center items-start ">
              <div className="text-[#28AA73]  font-inter font-normal  break-words">Beyond Insurance</div>
            </div>
            <div className="self-stretch  flex flex-col justify-center items-start">
              <div className="self-stretch text-black text-3xl md:w-[30ch] font-inter font-semibold leading-45 break-words">Comprehensive Coverage Tailored Just for You</div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start ">
            <div className="flex-1 text-[#6B7280] text-16 font-inter font-normal break-words">Explore Our Range of Motor Insurance and Takaful Services</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex-1 p-6 bg-[#D883021A] border-1 border-solid rounded-lg flex flex-col justify-start items-start gap-4">
            <img className="w-16 h-16 object-cover" src={img4} alt="Motor Insurance Renewals" />
            <div className="self-stretch text-black text-lg font-inter font-semibold break-words">Motor Insurance Renewals</div>
            <div className="self-stretch text-[#6B7280] text-sm font-inter font-normal break-words">Renewing your motor insurance is now a breeze with Perks. Enjoy comprehensive coverage and hassle-free renewal processes</div>
            
          </div>
          <div className="flex-1 p-6 bg-[#D883021A] border-1 border-solid rounded-lg flex flex-col justify-start items-start gap-4">
            <img className="w-16 h-16 object-cover" src={img5} alt="Motor Insurance Renewals" />
            <div className="self-stretch text-black text-lg font-inter font-semibold break-words">Motor Takaful Renewals</div>
            <div className="self-stretch text-[#6B7280] text-sm font-inter font-normal break-words">Secure your journey with our straightforward motor takaful renewals. We&apos;ve made it simple to protect what matters most to you.</div>
            
          </div>
          <div className="flex-1 p-6 bg-[#D883021A] border-1 border-solid rounded-lg flex flex-col justify-start items-start gap-4">
            <img className="w-16 h-16 object-cover" src={img6} alt="Motor Insurance Renewals" />
            <div className="self-stretch text-black text-lg font-inter font-semibold break-words">Road Tax Renewals</div>
            <div className="self-stretch text-[#6B7280] text-sm font-inter font-normal break-words">Say goodbye to paperwork. Renew your road tax conveniently alongside your insurance and takaful renewals at Perks.</div>
            
          </div>
         
        </div>
      </div>
      
    )
}

export default InsuranceRenewal
import img1 from "../assets/image1.svg"
import img2 from "../assets/image2.svg"
import img3 from "../assets/image3.svg"
const PowerAndSynergy = () => {
    return (
        <div className="w-full md:p-16 p-4 bg-[#933D00] flex flex-col justify-start items-center  gap-16">
            <div className=" flex flex-col justify-start items-start gap-3">
                <div className="self-stretch flex flex-col justify-start items-center gap-3">
                    <div className="px-4 py-1 bg-white rounded-full border border-green-500 flex justify-center items-start ">
                        <div className="text-green-500 text-sm font-inter font-normal leading-5">Beyond Insurance</div>
                    </div>
                    <div className=" flex flex-col justify-center items-start ">
                        <div className="self-stretch text-center text-white text-3xl font-inter font-semibold leading-10">The Power of Perks and <br />AXXESS Synergy</div>
                    </div>
                </div>
                <div className="self-stretch justify-start items-start  ">
                    <div className="flex-1 text-center md:w-[60.5ch] text-white text-base font-inter font-normal leading-6">At Perks Insurance, we believe in going the extra mile for our valued customers. That&apos;s why we&apos;re thrilled to announce our exclusive collaboration with AXXESS, a partnership that transcends traditional motor insurance experiences.</div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-start md:max-w-4xl h-full gap-6">
                <div className="flex-1  p-8 bg-opacity-10  bg-white rounded-lg flex flex-col md:flex-row items-center justify-center  gap-8">
                    <img src={img1} className="w-[30rem] h-auto object-cover" alt="img" />
                    <div className="flex flex-1 w-full flex-col justify-start items-start ">
                        <div className="self-stretch text-white text-2xl font-inter font-semibold break-words">
                            Comprehensive Coverage
                        </div>
                        <div className="self-stretch text-white text-base font-inter font-normal break-words">
                            Enjoy peace of mind with comprehensive coverage that safeguards you and your vehicle on every journey.
                        </div>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row justify-center items-start  gap-6 ">
                    <div className="flex-1 self-stretch px-8 py-8  bg-opacity-10 bg-white rounded-lg flex flex-col justify-center items-start  gap-8">
                        <img src={img2} className="w-full h-auto object-cover" alt="img" />
                        <div className="self-stretch h-188 flex flex-col justify-start items-start gap-8">
                            <div className="self-stretch text-white text-2xl font-inter font-semibold break-words">
                                Rewards Beyond Renewals
                            </div>
                            <div className="self-stretch text-white text-base font-inter font-normal break-words">
                                It&apos;s not just about insurance; it&apos;s about the perks. Our collaboration brings you exclusive rewards, discounts, and privileges that make your ownership experience even more satisfying.
                            </div>
                        </div>

                    </div>
                    <div className="flex-1 px-8 py-8  bg-opacity-10 bg-white rounded-lg flex flex-col justify-center items-start gap-8">
                        <img src={img3} className="w-full h-auto object-cover" alt="img" />
                        <div className="self-stretch h-188 flex flex-col justify-start items-start gap-8">
                            <div className="self-stretch text-white text-2xl font-inter font-semibold break-words">
                            Simplified Processes
                            </div>
                            <div className="self-stretch text-white text-base font-inter font-normal break-words">
                            Renewing your insurance and enjoying additional benefits has never been easier. We&apos;ve streamlined the process to ensure a hassle-free experience for our valued customers.
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PowerAndSynergy
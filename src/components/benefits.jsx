
import b1_img1 from "../assets/banners/b1/SVG/SVG 1.svg"
import b1_img2 from "../assets/banners/b1/SVG/SVG 2.svg"
import b1_img3 from "../assets/banners/b1/SVG/SVG 3.svg"
import b1_img4 from "../assets/banners/b1/SVG/SVG 4.svg"
import b1_img5 from "../assets/banners/b1/SVG/SVG 5.svg"
import b1_img6 from "../assets/banners/b1/SVG/SVG 6.svg"
import b2_img1 from "../assets/banners/b2/SVG/SVG 1.svg"
import b2_img2 from "../assets/banners/b2/SVG/SVG 2.svg"
import b2_img3 from "../assets/banners/b2/SVG/SVG 3.svg"
import b2_img4 from "../assets/banners/b2/SVG/SVG 4.svg"
import b2_img5 from "../assets/banners/b2/SVG/SVG 5.svg"
import b2_img6 from "../assets/banners/b2/SVG/SVG 6.svg"
import b3_img1 from "../assets/banners/b3/SVG/SVG 1.svg"
import b3_img2 from "../assets/banners/b3/SVG/SVG 2.svg"
import b3_img3 from "../assets/banners/b3/SVG/SVG 3.svg"
import b3_img4 from "../assets/banners/b3/SVG/SVG 4.svg"
import b3_img5 from "../assets/banners/b3/SVG/SVG 5.svg"
import b3_img6 from "../assets/banners/b3/SVG/SVG 6.svg"
import b4_img1 from "../assets/banners/b4/SVG/SVG 1.svg"
import b4_img2 from "../assets/banners/b4/SVG/SVG 2.svg"
import b4_img3 from "../assets/banners/b4/SVG/SVG 3.svg"
import b4_img4 from "../assets/banners/b4/SVG/SVG 4.svg"
import b4_img5 from "../assets/banners/b4/SVG/SVG 5.svg"
import b4_img6 from "../assets/banners/b4/SVG/SVG 6.svg"
import b5_img1 from "../assets/banners/b5/SVG/SVG 1.svg"
import b5_img2 from "../assets/banners/b5/SVG/SVG 2.svg"
import b5_img3 from "../assets/banners/b5/SVG/SVG 3.svg"
import b5_img4 from "../assets/banners/b5/SVG/SVG 4.svg"
import b5_img5 from "../assets/banners/b5/SVG/SVG 5.svg"
import b5_img6 from "../assets/banners/b5/SVG/SVG 6.svg"
import Carousel from './carousel';
const Benefits = () => {
    const images = [
       
        b1_img2,
        b1_img5,
        b2_img2,
        b2_img5,
        b3_img2,
        b3_img5,
        b4_img2,
        b4_img5,
        b5_img2,
        b5_img5,


    ]
    return (
        <div className="flex flex-col items-start justify-start gap-64 p-4 bg-gray-50 md:px-16">
            <div className="flex flex-col lg:flex-row w-full items-center gap-8 ">
                <div className="flex-1 flex flex-col justify-center items-start gap-8">
                    <div className="p-2 bg-white rounded-full border border-green-500 flex justify-center items-start  px-3">
                        <div className="text-green-500 text-sm font-inter font-normal leading-5">In the Heart of Perks</div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-24">
                        <div className="text-black text-3xl lg:text-2xl font-inter font-semibold md:w-[30ch] leading-10">Unwrapping the Layers of Our Motor Insurance Philosophy</div>
                    </div>
                    <div className="flex flex-col justify-start items-start ">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 text-gray-600 text-base font-inter font-normal leading-6">Perks is an independent insurance and takaful agency representing renowned insurance and takaful providers in Malaysia. Perks primary focus is motor insurance and motor takaful renewals, with the added option for customers renew their road tax. Perks aspires to provide customers a pleasant and seamless experience for their motor insurance, takaful and road tax renewals.</div>
                            <div className="flex-1 text-gray-600 text-base font-inter font-normal leading-6">Perks through an exclusive collaboration with AXXESS, enrich vehicle ownership experience, by providing customers customised and valuable insurance and takaful benefits befitting vehicle owners and their vehicles, at no additional cost.</div>
                        </div>
                    </div>
                    <div className="w-full p-2 bg-green-500 rounded-lg flex items-center justify-center">
                        <div className="flex flex-1 flex-col justify-start items-center gap-2">
                            <div className="text-white text-center text-sm font-inter font-normal leading-5">in the world of insurance</div>
                            <div className="text-white text-center text-2xl  font-inter font-semibold leading-8">7+ Years</div>
                        </div>
                        <div className="h-[3px] w-16 bg-slate-100 transform rotate-90 transform-origin-0-0"></div>
                        <div className="flex flex-1 flex-col justify-start items-center gap-2">
                            <div className="text-white text-center text-sm font-inter font-normal leading-5">Active Users</div>
                            <div className="text-white text-center text-2xl font-inter font-semibold leading-8">1.5 Million</div>
                        </div>
                    </div>
                </div>
               
                <div className="w-full flex-1">
                    <Carousel  >
                        {[...images.map((s, i) => (
                            <img key={i} src={s} className='max-w-full h-auto object-cover aspect-square rounded-lg' />
                        ))]}
                    </Carousel>

                </div>

            </div>
        </div>

    )
}

export default Benefits
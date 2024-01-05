
import { Element } from "react-scroll"
import b1_img5 from "../assets/banners/b1/SVG/SVG 5.svg"
import b2_img5 from "../assets/banners/b2/SVG/SVG 5.svg"
import b3_img5 from "../assets/banners/b3/SVG/SVG 5.svg"
import b4_img5 from "../assets/banners/b4/SVG/SVG 5.svg"
import b5_img5 from "../assets/banners/b5/SVG/SVG 5.svg"

import Carousel from './carousel';
const Benefits = () => {
    const images = [
        
        b1_img5,
        b2_img5,
        b3_img5,
        b4_img5,
        b5_img5,


    ]
    return (
        <Element className="flex flex-col items-start justify-start gap-64 p-4 bg-gray-50 md:px-16" name="aboutUs">
            <div className="flex flex-col lg:flex-row w-full items-center gap-8 ">
                <div className="flex-1 flex w-full self-stretch flex-col justify-center items-start gap-8">
                    <div className="p-2 bg-white rounded-full border border-green-500 flex justify-center items-start  px-3">
                        <div className="text-green-500 text-sm  leading-5">In the Heart of Perks</div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-24">
                        <div className="text-black text-3xl 2xl:text-4xl  font-semibold md:w-[25ch] 2xl:w-[28ch] leading-10">Unwrapping the Layers of Our Motor Insurance Philosophy</div>
                    </div>
                    <div className="flex flex-col self-stretch flex-1  h-full  justify-start items-start ">
                        <div className="flex flex-col self-stretch  gap-4">
                            <div className="flex-1 text-gray-600 lg:text-[16px] lg:leading-8 md:text-justify 2xl:text-xl tracking-wide leading-7 2xl:leading-9">Perks is an independent insurance and takaful agency representing renowned insurance and takaful providers in Malaysia. Perks primary focus is motor insurance and motor takaful renewals, with the added option for customers renew their road tax. Perks aspires to provide customers a pleasant and seamless experience for their motor insurance, takaful and road tax renewals.</div>
                            <div className="flex-1 text-gray-600 lg:text-[16px] lg:leading-8 md:text-justify 2xl:text-xl tracking-wide leading-7 2xl:leading-9">Perks through an exclusive collaboration with AXXESS, enrich vehicle ownership experience, by providing customers customised and valuable insurance and takaful benefits befitting vehicle owners and their vehicles, at no additional cost.</div>
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
        </Element>

    )
}

export default Benefits
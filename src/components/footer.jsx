import logo from "../assets/logo.svg"
import { BsFacebook, BsInstagram, BsTiktok, BsTwitterX } from "react-icons/bs";
const Footer = () => {
    return (
        <div className="w-full h-full md:p-16 p-4 flex flex-col justify-start items-center gap-4 ">
            <img className="w-123.24 h-50" src={logo} alt="Logo" />
            <div className="self-stretch h-159 flex flex-col justify-center items-center gap-8">
                <div className="w-96 text-center text-[#6B7280] text-sm">Our Gateway to Hassle-Free Motor Insurance and Takaful Renewals</div>
                <div className="flex items-center">
                    <a
                        href="https://www.facebook.com/perksholdings/"
                        target="_blank"
                        rel="noreferrer"
                        className="mr-3 flex h-6 w-6  items-center justify-center rounded-full border border-blue-500 bg-blue-500 text-white hover:border-primary hover:bg-white hover:text-blue-500 sm:mr-4 lg:mr-3 xl:mr-4"
                    >
                       <BsFacebook size={25}/>
                    </a>
                    <a
                        href="https://www.twitter.com/PerksHoldings"
                        target="_blank"
                        rel="noreferrer"
                        className="mr-3 flex h-6 w-6 p-1 items-center justify-center rounded-full border border-black text-dark hover:border-primary hover:bg-black hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                    >

                        <BsTwitterX />

                    </a>
                    <a
                        href="https://www.instagram.com/perksholdings/"
                        target="_blank"
                        rel="noreferrer"
                        className="mr-3 flex h-6 w-6 p-1 items-center justify-center rounded-full border border-pink-600 text-pink-600 hover:border-primary hover:bg-pink-600 hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                    >
                        <BsInstagram />
                    </a>
                    <a
                        href="https://www.tiktok.com/@perksholdings"
                        target="_blank"
                        rel="noreferrer"
                        className="mr-3 flex h-6 w-6 p-1 items-center justify-center rounded-full border border-black text-black hover:border-primary hover:bg-black hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                    >
                        <BsTiktok />
                    </a>
                   
                </div>
                <div className="w-962.60 h-26 text-center text-[#6B7280] text-16 font-Inter font-400 line-24">© 2023 Perks Holdings, Inc. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;

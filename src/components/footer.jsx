import logo from "../assets/logo.svg"
const Footer = () => {
    return (
        <div className="w-full h-full md:p-16 p-4 flex flex-col justify-start items-center gap-4 ">
            <img className="w-123.24 h-50" src={logo} alt="Logo" />
            <div className="self-stretch h-159 flex flex-col justify-center items-center gap-8">
                <div className="w-96 text-center text-[#6B7280] text-sm">Your Gateway to Hassle-Free Motor Insurance and Takaful Renewals</div>
                <div className="w-962.60 h-26 text-center text-[#6B7280] text-16 font-Inter font-400 line-24">© 2023 Perks Holdings, Inc. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;

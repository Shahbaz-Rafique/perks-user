import logo from "../assets/logo.svg"
const Footer = () => {
    return (
        <div className="w-full h-full md:p-16 p-4 flex flex-col justify-start items-center gap-4 ">
            <img className="w-123.24 h-50" src={logo} alt="Logo" />
            <div className="self-stretch h-159 flex flex-col justify-center items-center gap-8">
                <div className="w-96 text-center text-[#6B7280] text-sm">Our Gateway to Hassle-Free Motor Insurance and Takaful Renewals</div>
                <ul className="flex flex-wrap md:max-w-2xl justify-center items-center gap-8 ">
                    <li className="flex justify-start items-center">
                        <div className="text-[#111928] font-medium">About</div>
                    </li>
                    <li className="flex justify-start items-center">
                        <div className="text-[#111928] font-medium">Premium</div>
                    </li>
                    <li className="flex justify-start items-center">
                        <div className="text-[#111928] font-medium">Campaigns</div>
                    </li>
                    <li className="flex justify-start items-center">
                        <div className="text-[#111928] font-medium">Blog</div>
                    </li>
                    <li className="flex justify-start items-center">
                        <div className="text-[#111928] font-medium">Affiliate Program</div>
                    </li>
                    <li className="flex justify-start items-center">
                        <div className="text-[#111928] font-medium">FAQs</div>
                    </li>
                    <li className="flex justify-start items-center">
                        <div className="text-[#111928] font-medium">Contact</div>
                    </li>
                </ul>
                <div className="w-962.60 h-26 text-center text-[#6B7280] text-16 font-Inter font-400 line-24">© 2023 Perks Holdings, Inc. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;

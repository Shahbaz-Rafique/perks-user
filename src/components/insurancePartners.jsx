import p1 from "../assets/p1.svg"
import p2 from "../assets/p2.svg"
import p3 from "../assets/p3.svg"
import p4 from "../assets/p4.svg"
import p5 from "../assets/p5.svg"
import p6 from "../assets/p6.svg"
const InsurancePartners = () => {
  return (
    <div className="w-full h-full p-8 px-16 bg-white flex flex-col justify-center items-center gap-8">
      <div className="text-black text-xl font-inter font-semibold ">Insurance & Takaful Partners</div>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 w-full justify-items-center">
        <img className="w-[200px] h-[64px]" src={p1} alt="Partner Logo 1" />
        <img className="w-[128px] h-[64px]" src={p2} alt="Partner Logo 2" />
        <img className="w-[64px] h-[64px]" src={p3} alt="Partner Logo 3" />
        <img className="w-[64px] h-[64px]" src={p4} alt="Partner Logo 4" />
        <img className="w-[190px] h-[64px]" src={p5} alt="Partner Logo 5" />
        <img className="w-[64px] h-[64px]" src={p6} alt="Partner Logo 6" />
      </div>
    </div>
  );
};

export default InsurancePartners;

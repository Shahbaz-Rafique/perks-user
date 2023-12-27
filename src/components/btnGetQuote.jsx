import { FaArrowRightLong } from "react-icons/fa6"

const BtnGetQuote = () => {
    return (
        <button
            className={` px-4 py-2 text-sm w-fit flex gap-2 text-slate-50 items-center whitespace-nowrap bg-green-500 rounded-full font-medium self-center`}
        >
            Get a Quote <FaArrowRightLong size={18} />
        </button>
    )
}

export default BtnGetQuote
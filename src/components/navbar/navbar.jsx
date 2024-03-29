import { useState } from 'react'
import logo from '../../assets/logo.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import NavList from './navList'
import BtnGetQuote from '../btnGetQuote';
import { Link } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [navStyle, setNavStyle] = useState("")
    const [isScroll, setIsScroll] = useState(false)

    // set background to white when scroll
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavStyle("bg-white shadow-sm  text-primary ")
            setIsScroll(true)
        } else {
            setNavStyle("")
            setIsScroll(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    const hamburgerStyle = isScroll ? "text-primary-color-variant-400  border-primary-color-variant-200 hover:text-blue-800 hover:border-blue-300" : "text-white border-white"
    return (

        <div className={`z-50 fixed  top-0 w-full ${navStyle} transition-colors duration-200 ease-in-out`}>
            <div className={`w-full flex items-center justify-center px-4 mx-auto`} >
                <nav className="flex   w-full items-center justify-between py-2 ">
                    <a
                        href=""
                        className="text-3xl font-semibold leading-none "
                    >
                        <img src={logo} width={160} height={28} alt="logo" />
                    </a>
                    <div className="flex lg:w-full  lg:flex-1 items-center self-center justify-between lg:space-x-9 ">
                        <div className="lg:hidden flex ">
                            <button
                                className={`flex items-center px-3 py-2  rounded border navbar-burger lg:hidden ${hamburgerStyle}`}
                                onClick={() => setOpen(true)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    fill="currentColor"
                                    className="bi bi-list"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className='flex items-center justify-evenly  w-full'>
                            <NavList device="large" scroll={isScroll} />

                        </div>
                        <HashLink className='hidden cursor-pointer lg:block'
                            to="/#getQuote"
                            smooth
                            onClick={() => setOpen(false)}
                        >
                            <BtnGetQuote />
                        </HashLink>

                    </div>

                </nav>
                {/* Mobile Sidebar */}


                <div className={`fixed inset-0 w-full bg-gray-900 opacity-25 z-40 h-screen lg:hidden ${open ? "translate-x-0 ease-in-opacity-100" : "-translate-x-full ease-out opacity-0"} `}></div>
                <div className={` absolute inset-0 z-50 h-screen p-3 text-slate-200 duration-500 transform bg-secondary-color  w-80 lg:hidden lg:transform-none lg:relative ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`}>
                    <div className="flex justify-between ">
                        <a
                            className="p-2 text-2xl font-bold text-gray-700 "
                            href="#"
                        >
                            <img src={logo} width={160} height={28} alt="logo" />
                        </a>
                        <button
                            className="p-2 text-slate-200 rounded-md   lg:hidden "
                            onClick={() => setOpen(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                className="bi bi-x-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    <NavList device="mobile" handleClose={() => setOpen(false)} />
                    <HashLink smooth to="/#getQuote"
                        onClick={() => setOpen(false)}
                        className={`px-4 py-2 cursor-pointer text-sm  lg:hidden flex gap-2 text-slate-50 items-center bg-green-500 rounded-lg w-full font-medium self-center`}
                    >
                        Get a Quote <FaArrowRightLong size={18} />
                    </HashLink>
                </div>


            </div>
        </div>

    )
}

export default Navbar
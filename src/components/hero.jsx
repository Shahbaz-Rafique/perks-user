import { Link } from 'react-scroll'
import hero from '../assets/hero.png'
import wave from '../assets/wave.svg'
import BtnGetQuote from './btnGetQuote'
const Hero = () => {
    return (


        <div
            className="relative flex flex-col items-center justify-center w-full h-screen text-center "


        >

            <div className="flex flex-col md:flex-row items-center px-4 pt-16 md:pt-0 sm:px-6 lg:px-8 z-30">
                <Link className="text-left flex flex-col items-start">
                    <h2 className="mb-6 text-4xl  leading-10 tracking-tight text-white  lg:text-left  md:text-5xl">
                        Insure Your Ride <br />
                        Empower Your Journey
                    </h2>
                    <p className="mb-6 tracking-wide text-white font-medium  sm:text-md sm:max-w-xl sm:mx-auto ">
                        Tailor-Made Motor Insurance Solutions for Your Unmatched Adventures
                    </p>
                    <Link
                        to="getQuote"
                        smooth={true}
                        duration={200}
                        className="justify-center sm:flex">
                        <BtnGetQuote />
                    </Link>
                </Link>
                <div >
                    <img
                        className="relative z-20 w-full h-full"
                        src={hero}
                        alt="hero"
                    />
                </div>
            </div>
            <div
                className='absolute bottom-0 z-10 bg-center bg-cover aspect-[960/200] w-full h-auto bg-no-repeat'
                style={{ backgroundImage: `url('${wave}')` }}
            ></div>
        </div>

    )
}

export default Hero
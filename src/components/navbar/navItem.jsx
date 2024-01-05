import { PropTypes } from 'prop-types'
import { Link } from 'react-scroll'
import { Link as L1 } from 'react-router-dom'
const NavItem = ({ item, device, scroll, onClose }) => {
    return (
        <li className={`cursor-pointer ${device === "mobile" && "p-3 my-2  rounded-lg text-slate-100 hover:bg-primary-color/30 w-full"}`} >
            {
                item.link[0] === "/" ?

                    <L1 to={item.link}
                        onClick={onClose}
                        className={`text-sm ${scroll === undefined || scroll ? " text-primary-color" : "text-slate-100 "} ${device === "mobile" && "text-slate-100"} font-medium flex `}
                    >
                        {item.heading}
                    </L1>
                    :
                    <Link to={item.link} smooth={true} duration={200}
                        onClick={onClose}
                        className={`text-sm ${scroll === undefined || scroll ? " text-primary-color" : "text-slate-100 "} ${device === "mobile" && "text-slate-100"} font-medium flex `}
                    >
                        {item.heading}
                    </Link>
            }
        </li>
    )
}
NavItem.propTypes = {
    item: PropTypes.object,
    device: PropTypes.string,
    scroll: PropTypes.bool,
    onClose: PropTypes.func
};


export default NavItem
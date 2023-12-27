import {PropTypes} from 'prop-types'
import { Link } from 'react-router-dom'
const NavItem = ({item,device,scroll}) => {
    return (
        <li className={`${device === "mobile" && "p-3 my-2  rounded-lg text-slate-100 hover:bg-primary-color/30 w-full"}`}>
            <Link to={item.link}
               
                className={`text-sm ${scroll === undefined || scroll ? " text-primary-color" : "text-slate-100 "} ${device === "mobile" && "text-slate-100"} font-medium flex `}
            >
                {item.heading}
            </Link>
        </li>
    )
}
NavItem.propTypes = {
    item: PropTypes.object,
    device: PropTypes.string,
    scroll: PropTypes.bool
};


export default NavItem
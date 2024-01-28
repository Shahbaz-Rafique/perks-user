import { PropTypes } from 'prop-types';
import { useLocation } from 'react-router-dom';
import NavItem from './navItem';

const NavList = ({ device, scroll, handleClose }) => {
    const location = useLocation();

    const navItems = [
        { heading: "Home", link:location.pathname=="/benefits"? "/":"/" },
        { heading: "About Us", link: location.pathname=="/benefits"?"/":"aboutUs" },
        { heading: "Our Benefits", link: '/benefits' },
        { heading: "Our Partners", link: location.pathname=="/benefits"?'/':'partners' },
        { heading: "Contact Us", link: location.pathname=="/benefits"?'/':'contactUs' },
    ];

    const devices = {
        large: "hidden lg:w-auto lg:space-x-9 lg:items-center lg:flex",
        mobile: "px-4 text-left mt-7",
    };

    return (
        <ul className={` ${devices[device]} `}>
            {navItems.map((item, index) => (
                <NavItem
                    key={index}
                    item={item}
                    device={device}
                    scroll={scroll}
                    onClose={handleClose}
                    isCurrent={location.pathname === item.link}
                />
            ))}
        </ul>
    );
};

NavList.propTypes = {
    device: PropTypes.string,
    scroll: PropTypes.bool,
    handleClose: PropTypes.func,
};

export default NavList;

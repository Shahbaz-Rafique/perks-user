import { PropTypes } from 'prop-types'
import NavItem from './navItem'


const NavList = ({device,scroll,handleClose}) => {
    const navItems = [
        {heading:"Home",link:"/"},
        {heading:"About us",link:"aboutUs"},
        {heading:"Our Benefits",link:'/benefits'},
        {heading:"Our Partners",link:'partners'},
        {heading:"Contact Us",link:'contactUs'},

    ]
    const devices = {
        large:"hidden lg:w-auto lg:space-x-9 lg:items-center lg:flex",
        mobile:"px-4 text-left mt-7"
    }
    return (
        <ul className={` ${devices[device]} `}>
            {
                navItems.map((item, index) => {
                    return <NavItem key={index} item={item} device={device} scroll={scroll} onClose={handleClose} />
                }
                )
            }
            
        </ul>
    )
}
NavList.propTypes = {
    device: PropTypes.string,
    scroll: PropTypes.bool,
    handleClose:PropTypes.func

}
export default NavList
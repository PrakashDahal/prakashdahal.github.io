import { menuItems } from '../../helper/menuItems'
import './menu.scss'


function Menu({ menuOpen, setMenuOpen }) {
    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            {getMenuItems(closeMenu)}
        </div>
    )
}

const getMenuItems = (closeMenu) => {
    return (
        <ul>
            {Object.keys(menuItems).map(e => {
                return <li onClick={closeMenu} key={menuItems[e].id}><a href={`#${menuItems[e].id}`}>{menuItems[e].name}</a></li>
            })}
        </ul>
    )

}

export default Menu

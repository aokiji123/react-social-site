import { NavLink } from "react-router-dom"
import style from "../Nav.module.css"

const NavItem = (props) => {

    return (
        <div>
            <li><NavLink className={navData => navData.isActive ? style.active : style.item} to={props.url}>{props.name}</NavLink></li>
        </div>
    )
}

export default NavItem
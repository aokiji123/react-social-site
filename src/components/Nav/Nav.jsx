import { NavLink } from "react-router-dom"
import style from "./Nav.module.css"

const Nav = () => {

    return (

        <nav className="nav">
            <ul className={style.group}>
                <li><NavLink className={navData => navData.isActive ? style.active : style.item} to="/profile">Profile</NavLink></li>
                <li><NavLink className={navData => navData.isActive ? style.active : style.item} to="/messages">Messages</NavLink></li>
                <li><a className={style.item} href="s#">News</a></li>
                <li><a className={style.item} href="s#">Music</a></li>
            </ul>
            <ul className={style.group}>
                <li><a className={style.item} href="s#">Settings</a></li>
            </ul>
        </nav>

    )
}

export default Nav
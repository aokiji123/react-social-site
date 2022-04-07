import style from "./Nav.module.css"

const Nav = () => {

    return (

        <nav className="nav">
            <ul className={style.group}>
                <li><a className={`${style.item} ${style.active}`} href="Profile.jsx">Profile</a></li>
                <li><a className={style.item} href="s#">Messages</a></li>
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
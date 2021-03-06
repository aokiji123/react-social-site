import style from "./Nav.module.css"
import NavItem from "./NavItem/NavItem"

const Nav = (props) => {
    let links = props.state.navData.map((link, index) => <NavItem key={link.url + index} name={link.name} url={link.url}/>)
    
    return (

        <nav className="nav">
            <ul className={style.group}>
                { links }
            </ul>
        </nav>

    )
}

export default Nav
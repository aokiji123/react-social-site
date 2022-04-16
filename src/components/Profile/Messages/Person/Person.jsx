import { NavLink } from "react-router-dom"
import style from "./Person.module.css"

const Person = (props) => {

    let path = "/messages/" + props.url

    return (
        <div>
            <li><NavLink className={navData => navData.isActive ? style.active : style.name} to={path}>{props.name}</NavLink></li>
        </div>
    )
}

export default Person
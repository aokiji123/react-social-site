import style from "./Message.module.css"

const Message = (props) => {

    return (

        <div>
            {/* <img className={style.} src={props.image} alt="Avatar"/> */}
            <div className={style.message}>
                <div className={style.text}>{props.text}</div>
            </div>
        </div>
    )
}

export default Message
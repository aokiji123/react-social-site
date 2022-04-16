import style from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={`${style.item} ${props.className}`}>
            <div className={style.info}>
                <p className={style.name}>@aokijiii</p>
                <p className={style.date}>{props.date}</p>
            </div>
            <div className={style.text}>
                {props.text}
            </div>
        </div>
    )
}

export default Post
import style from "./Post.module.css"

const Post = (props) => {
    console.log(props)
    return (
        <div className={`${style.item} ${props.class}`}>
            <div className={style.info}>
                <p className={style.name}>@aokijiii</p>
                <p className={style.date}>{props.date}</p>
            </div>
            <div className={style.text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis pariatur non sunt quidem quaerat voluptatibus, ab placeat.
                {props.text}
            </div>
        </div>
    )
}

export default Post
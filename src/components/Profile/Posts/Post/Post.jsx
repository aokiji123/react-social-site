import style from "./Post.module.css"

const Post = (props) => {

    let user = () => {
        alert("aoikijiii")
    }

    return (
        <section className={style.item}>
            <div className={style.info}>
                <p onClick={ user } className={style.name}>@aokijiii</p>
                <p className={style.date}>{props.date}</p>
            </div>
            <div className={style.text}>
                {props.text}
            </div>
        </section>
    )
}

export default Post
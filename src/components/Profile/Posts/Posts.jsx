import Post from "./Post/Post";
import style from "./Posts.module.css";

const Posts = (props) => {
    
    return (

        <div className={style.posts}>
        <h2>My posts</h2>
        <p className={style.new}>new post!</p>
            <div className={style.flex}>
                <Post className={`${style.active} ${style.left}`} text={props.postData[0].text} date={props.postData[0].date}/>
                <Post text={props.postData[1].text} date={props.postData[1].date}/>
            </div>

            <div className={style.flex}>
                <Post className={`${style.left}`} text={props.postData[2].text} date={props.postData[2].date}/>
                <Post text={props.postData[3].text} date={props.postData[3].date}/>
            </div>
        </div>
    
    )
}

export default Posts
import Post from "./Post/Post";
import style from "./Posts.module.css";

const Posts = (props) => {

    let posts = props.postData.map((post) => <Post text={post.text} date={post.date}/> )

    return (

        <div className={style.posts}>
        <h2>My posts</h2>
            <div className={style.flex}>
                
                { posts }
                
            </div>
        </div>
    
    )
}

export default Posts
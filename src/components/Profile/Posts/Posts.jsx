import Post from "./Post/Post";
import style from "./Posts.module.css";

const Posts = () => {
    return (

        <div className={style.posts}>
        <h2>My posts</h2>
        <p className={style.new}>new post!</p>
            <div className={style.flex}>

            <Post 
                class={`${style.active} ${style.left}`}
                date="03.02.2022"
                text="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"
            />
            <Post 
                date="27.01.2022"
            />

            </div>

            <div className={style.flex}>
                
            <Post
                class={`${style.left}`}
                date="21.01.2022" 
                text="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"
            />
            <Post 
                date="15.01.2022"
                text="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"
            />

            </div>

        </div>
    
    )
}

export default Posts
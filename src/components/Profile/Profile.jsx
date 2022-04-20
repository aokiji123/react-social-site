import React from "react"
import Posts from "./Posts/Posts"
import ProfilePerson from "./ProfilePerson"
import style from "./Profile.module.css"

const Profile = (props) => { 
    
    let newPost = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPost.current.value
        props.updateNewPostData(text)
    }

    return (
        <div className={style.content}>
            
            <ProfilePerson/>

            <section>
                <form action="" type="submit">
                    <input className="input" type="text" placeholder="Add new post" ref={newPost} onChange={onPostChange} value={props.state.newPostData} />
                    <button onClick={addPost} className="button" type="button"> &#10003; </button>
                </form>
            </section>

            <Posts postData={props.state.postData}/>

        </div>
    )
}

export default Profile
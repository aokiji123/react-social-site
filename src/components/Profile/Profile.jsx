import React from "react"
import Posts from "./Posts/Posts"
import ProfilePerson from "./ProfilePerson"
import style from "./Profile.module.css"
import { addPostActionCreator, updateNewPostDataActionCreator } from "../../redux/store"

const Profile = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (event) => {
        let text = event.target.value
        props.dispatch(updateNewPostDataActionCreator(text))
    }

    return (
        <div className={style.content}>
            
            <ProfilePerson/>

            <section>
                <form action="" type="submit">
                    <input className="input" type="text" placeholder="Add new post" onChange={onPostChange} value={props.state.newPostData} />
                    <button onClick={addPost} className="button" type="button"> &#10003; </button>
                </form>
            </section>

            <Posts postData={props.state.postData}/>

        </div>
    )
}

export default Profile
import Posts from "./Posts/Posts"
import style from "./Profile.module.css"

const Profile = (props) => { 
    
    return (
        <div className={style.content}>
            <div>
                <img className={style.image} src="./images/header-img.jpeg" alt="Main site image"/>
            </div>
            <div className={style.info}>
                <img className={style.avatar} src="./images/avatar.png" alt="Avatar"/>
                <p className={style.text}>
                    Bogdan Tolmachev <br/>
                    <span className={style.job}>React Developer</span>
                </p>
            </div>

            <Posts postData={props.state.postData}/>

        </div>
    )
}

export default Profile
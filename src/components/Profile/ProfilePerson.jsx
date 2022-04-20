import style from './ProfilePerson.module.css'

const ProfilePerson = () => {
    return (
        <div>
            <div>
                <img className={style.image} src="./images/header-img.jpeg" alt="Avatar"/>
            </div>
            <div className={style.info}>
                <img className={style.avatar} src="./images/avatar.png" alt="Avatar"/>
                <p className={style.text}>
                    Bogdan Tolmachev <br/>
                    <span className={style.job}>React Developer</span>
                </p>
            </div>
        </div>
    )
}

export default ProfilePerson
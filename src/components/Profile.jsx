import style from "./Profile.module.css"

const Profile = () => { 
    
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

            <div className="posts">
                <h2>My posts</h2>
                <p className="posts__new">new post!</p>
                <div className="posts__flex">

                    <div className="posts__item left new">
                        <div className="posts__info">
                            <p className="posts__name">@aokijiii</p>
                            <p className="posts__date">17.02.2022</p>
                        </div>
                        <div className="posts__text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis pariatur non sunt quidem quaerat voluptatibus, ab placeat. Veritatis repellendus ullam mollitia praesentium provident quisquam quaerat earum corrupti molestiae commodi?
                        </div>
                    </div>

                    <div className="posts__item">
                        <div className="posts__info">
                            <p className="posts__name">@aokijiii</p>
                            <p className="posts__date">07.02.2022</p>
                        </div>
                        <div className="posts__text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis pariatur non sunt quidem quaerat voluptatibus, ab placeat.
                        </div>
                    </div>

                </div>

                <div className="posts__flex">
                    
                    <div className="posts__item left">
                        <div className="posts__info">
                            <p className="posts__name">@aokijiii</p>
                            <p className="posts__date">05.02.2022</p>
                        </div>
                        <div className="posts-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis pariatur non sunt quidem quaerat voluptatibus, ab placeat. Veritatis repellendus ullam mollitia praesentium provident quisquam quaerat earum corrupti molestiae commodi?
                        </div>
                    </div>

                    <div className="posts__item">
                        <div className="posts__info">
                            <p className="posts__name">@aokijiii</p>
                            <p className="posts__date">21.01.2022</p>
                        </div>
                        <div className="posts__text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis pariatur non sunt quidem quaerat voluptatibus. Veritatis repellendus ullam mollitia praesentium provident quisquam quaerat earum corrupti molestiae commodi? Maxime debitis pariatur non sunt quidem quaerat voluptatibus.
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Profile
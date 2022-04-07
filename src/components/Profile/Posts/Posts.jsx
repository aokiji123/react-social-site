import style from "./Posts.module.css";

const Posts = () => {
    return (

        <div className={style.posts}>
        <h2>My posts</h2>
        <p className={style.new}>new post!</p>
            <div className={style.flex}>

                <div className={`${style.item} ${style.active} ${style.left}`}>
                    <div className={style.info}>
                        <p className={style.name}>@aokijiii</p>
                        <p className={style.date}>17.02.2022</p>
                    </div>
                    <div className={style.text}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis pariatur non sunt quidem quaerat voluptatibus, ab placeat. Veritatis repellendus ullam mollitia praesentium provident quisquam quaerat earum corrupti molestiae commodi?
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.info}>
                        <p className={style.name}>@aokijiii</p>
                        <p className={style.date}>07.02.2022</p>
                    </div>
                    <div className={style.text}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis pariatur non sunt quidem quaerat voluptatibus, ab placeat.
                    </div>
                </div>

            </div>

            <div className={style.flex}>
                
                <div className={`${style.item} ${style.left}`}>
                    <div className={style.info}>
                        <p className={style.name}>@aokijiii</p>
                        <p className={style.date}>05.02.2022</p>
                    </div>
                    <div className={style.text}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis pariatur non sunt quidem quaerat voluptatibus, ab placeat. Veritatis repellendus ullam mollitia praesentium provident quisquam quaerat earum corrupti molestiae commodi?
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.info}>
                        <p className={style.name}>@aokijiii</p>
                        <p className={style.date}>21.01.2022</p>
                    </div>
                    <div className={style.text}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis pariatur non sunt quidem quaerat voluptatibus. Veritatis repellendus ullam mollitia praesentium provident quisquam quaerat earum corrupti molestiae commodi? Maxime debitis pariatur non sunt quidem quaerat voluptatibus.
                    </div>
                </div>

            </div>

        </div>
    
    )
}

export default Posts
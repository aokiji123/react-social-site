import style from "./Messages.module.css"

const Messages = () => {
    return (
        <div>            
            <div className={style.block}>

                <div className={style.block__people}>
                    <h3 className={style.name}>Den</h3>
                    <h3 className={`${style.name} ${style.active}`}>Mike</h3>
                    <h3 className={style.name}>Rebbeka</h3>
                    <h3 className={style.name}>Jesse</h3>
                    <h3 className={style.name}>Clam</h3>
                    <h3 className={style.name}>Kate</h3>
                    <h3 className={style.name}>Vanessa</h3>
                </div>

                <div className={style.block__text}>
                    <img className={style.friend} src="images/avatar1.png" alt="Avatar"/>
                        <div className={style.message}>
                        <div className={style.text}>hi how are you mate?</div>
                    </div>
                
                    <img className={style.me} src="images/avatar.png" alt="Avatar"/>
                    <div className={style.message}>
                        <div className={style.text}>hello</div>
                        <div className={style.date}></div>
                    </div>

                    <div className={style.message}>
                        <div className={style.text}>well i'm kinda tired, try to take some rest watching youtube</div>
                        <div className={style.date}></div>
                    </div>

                    <div className={style.message}>
                        <div className={style.text}>today was studying a lot</div>
                        <div className={style.date}></div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Messages
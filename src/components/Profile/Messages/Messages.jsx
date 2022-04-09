// import Header from "../../Header/Header"
// import Nav from "../../Nav/Nav"
import style from "./Messages.module.css"


const Messages = () => {
    return (
        <div>
            {/* <Header/>
            <Nav/> */}
            
            <div className={style.block}>

                <div className={style.block__people}>
                        <h3 className={style.name}>Masha</h3>
                        <h3 className={style.name}>Dima</h3>
                        <h3 className={style.name}>Nastya</h3>
                        <h3 className={style.name}>Tanya</h3>
                        <h3 className={style.name}>Bogdan</h3>
                        <h3 className={style.name}>Masha</h3>
                        <h3 className={style.name}>Masha</h3>
                </div>

                <div className={style.block__text}>
                    <img src="" alt="Avatar"/>
                    <div className={style.message}>
                        <div className={style.text}>hi how are you mate?</div>
                        <div className={style.date}>22:11</div>
                    </div>
                    <img src="" alt="Avatar"/>
                    <div className={style.message}>
                        <div className={style.text}>hello</div>
                        <div className={style.date}>22:11</div>
                    </div>
                    <img src="" alt="Avatar"/>
                    <div className={style.message}>
                        <div className={style.text}>well i'm kinda tired, try to take some rest watching youtube</div>
                        <div className={style.date}>22:11</div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Messages
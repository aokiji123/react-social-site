import Message from "./Message/Message"
import Person from "./Person/Person"

import style from "./Messages.module.css"

const Messages = (props) => {
    
    let people = props.state.peopleData.map((person) => <Person name={person.name} url={person.url}/> )
    let messages = props.state.messageData.map((message) => <Message text={message.text}/>)


    // <Message image="images/avatar1.png" text={messageData[0].text}/>,
    // <Message image="images/avatar.png" text={messageData[1].text}/>,
    // <Message image="images/avatar.png" text={messageData[2].text}/>,
    // <Message image="images/avatar.png" text={messageData[3].text}/>

    return (
        <div>      
            <div className={style.block}>

                <div className={style.block__people}>
                    <div className={style.title}>My friends</div> 
                    <ul>
                        { people }
                    </ul> 
                </div>

                <div className={style.block__text}>
                    
                    { messages }

                    {/* <img className={style.my__photo} src="images/avatar.png" alt="Avatar"/>
                    <div className={style.message}>
                        <div className={style.text}>hello</div>
                        <div className={style.date}></div>
                    </div>

                    <div className={style.message}>
                        <div className={style.text}>well i'm kinda tired, try to take some rest watching youtube</div>
                    </div>

                    <div className={style.message}>
                        <div className={style.text}>today was studying a lot</div>
                        <div className={style.date}></div>
                    </div> */}
                    
                </div>

            </div>
        </div>
    )
}

export default Messages
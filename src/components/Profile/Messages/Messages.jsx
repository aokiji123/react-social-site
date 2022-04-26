import React from "react"
import Message from "./Message/Message"
import Person from "./Person/Person"
import style from "./Messages.module.css"

import { addMessageActionCreator, updateNewMessageDataActionCreator } from "../../../redux/store"

const Messages = (props) => {
    
    let people = props.state.peopleData.map((person) => <Person name={person.name} url={person.url}/> )
    let messages = props.state.messageData.map((message) => <Message text={message.text}/>)

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (event) => {
        let text = event.target.value
        props.dispatch(updateNewMessageDataActionCreator(text))
    }

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
                    
                    {/* <img className={style.my__photo} src="images/avatar.png" alt="Avatar"/>*/}
                    { messages }
                    
                    <form action="" type="submit">
                        <input className="input" type="text" placeholder="type smth" value={props.state.newMessageData} onChange={onMessageChange}/>
                        <button onClick={addMessage} className="button" type="button">&#10003;</button>
                    </form>
                    
                </div>

            </div>
        </div>
    )
}

export default Messages
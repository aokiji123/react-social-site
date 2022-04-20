import { rerenderEntireTree } from "../render.js"

let state = {
    nav: {
        navData: [
            {name: "Profile", url: "/profile"},
            {name: "Messages", url: "/messages"},
            {name: "News", url: "/news"},
            {name: "Music", url: "/music"},
            {name: "Settings", url: "/settings"}
        ]
    },
    
    profile: {
        postData: [
            {id: 1, text: "Finished reading, learned better about OOP, its four main concepts, which I wrote down in my notes, and six more additional. Now it's all right", date: "03.02.2022"},
            {id: 2, text: "Positioning and decorative elements took place at the layout course, I was already familiar with them and actively worked earlier, but it will not be superfluous to listen again. Installed Xcode for C++, which I will now also be taught", date: "27.01.22"},
            {id: 3, text: "Today I learned in react about such a cool thing as routing, which allows you to switch between pages of the site without reloading every time. I set it up between the profile and message pages, which I just continued to make up today. I started doing animation under activeClassName, but as it turned out recently, this method no longer works, and there is another way to use the class I need, which I will deal with tomorrow", date: "21.01.2022"},
            {id: 4, text: "Today I hardly coded, but in general I looked at the courses a little, changed the visual of the site a little, fixed yesterday's mess. I think I’ll go read a little more about patterns, and in general the day was a success", date: "15.01.2022"}
        ],

        newPostData: ""
    },

    messages: {
        peopleData: [
            {name: "Den", url: "Den"},
            {name: "Mike", url: "Mike"},
            {name: "Rebbeka", url: "Rebbeka"},
            {name: "Jesse", url: "Jesse"},
            {name: "Clam", url: "Clam"},
            {name: "Kate", url: "Kate"},
            {name: "Vanessa", url: "Vanessa"}
        ],
    
        messageData: [
            {text: "hi mate how are you?"},
            {text: "hello"},
            {text: "well i'm kinda boring, try to take some rest watching youtube"},
            {text: "today was studying a lot"},
        ],

        newMessageData: ""
    }
}
 
window.state = state

// POSTS
export let addPost = () => {
    let newPost = {
        id: 5,
        text: state.profile.newPostData,
        date: "03.01.2022"
    }
    state.profile.postData.push(newPost)
    state.profile.newPostData = ""
    rerenderEntireTree(state)
}

export let updateNewPostData = (text) => {
    state.profile.newPostData = text
    rerenderEntireTree(state)
}

// MESSAGES
export let addMessage = () => {
    let newMessage = {
        text: state.messages.newMessageData,
    }
    state.messages.newMessageData.push(newMessage)
    state.messages.newMessageData = ""
    rerenderEntireTree(state)
}

export let updateNewMessageData = (text) => {
    state.messages.newMessageData = text
    rerenderEntireTree(state)
}

export default state
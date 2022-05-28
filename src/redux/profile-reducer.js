const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA'

let initialState = {
        postData: [
            {id: 1, text: "Finished reading, learned better about OOP, its four main concepts, which I wrote down in my notes, and six more additional. Now it's all right", date: "03.02.2022"},
            {id: 2, text: "Positioning and decorative elements took place at the layout course, I was already familiar with them and actively worked earlier, but it will not be superfluous to listen again. Installed Xcode for C++, which I will now also be taught", date: "27.01.22"},
            {id: 3, text: "Today I learned in react about such a cool thing as routing, which allows you to switch between pages of the site without reloading every time. I set it up between the profile and message pages, which I just continued to make up today. I started doing animation under activeClassName, but as it turned out recently, this method no longer works, and there is another way to use the class I need, which I will deal with tomorrow", date: "21.01.2022"},
            {id: 4, text: "Today I hardly coded, but in general I looked at the courses a little, changed the visual of the site a little, fixed yesterday's mess. I think I’ll go read a little more about patterns, and in general the day was a success", date: "15.01.2022"}
        ],

        newPostData: ""
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostData,
                date: "03.01.2022"
            }
            state.postData.push(newPost)
            state.newPostData = ""
            return state

        case UPDATE_NEW_POST_DATA:
            state.newPostData = (action.text)
            return state

        default:
            return state
    }
}   

export const addPostActionCreator = () => {
    return { type: ADD_POST }
}

export const updateNewPostDataActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_DATA, text }
}

export default profileReducer
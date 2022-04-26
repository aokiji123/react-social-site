const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_DATA = 'UPDATE-NEW-POST-DATA'

const profileReducer = (state, action) => {
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
            return state;
    }
}   

export default profileReducer
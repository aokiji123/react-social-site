let initialState = {
        navData: [
            {name: "Profile", url: "/profile"},
            {name: "Messages", url: "/messages"},
            {name: "News", url: "/news"},
            {name: "Music", url: "/music"},
            {name: "Settings", url: "/settings"}
        ]
}

const navReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }   
}

export default navReducer
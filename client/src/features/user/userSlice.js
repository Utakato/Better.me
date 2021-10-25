const initialState= {
	username: "gabi",
	id: "615ee5743723c9d784ed61f2",
	isLoggedIn: true,
}

const userReducer = (state=initialState, action) => {
	switch(action.type){
		case "user/USER_LOGGED_IN": {
			return {
				username: action.payload.username,
				id: action.payload.userid,
				isLoggedIn : !state.isLoggedIn,
			}
		}
		case "user/USER_LOGGED_OUT" : {
			return {
				username: "",
				id: "",
				isLoggedIn : !state.isLoggedIn,
			}
		}
		default: return state
	}
}

export default userReducer
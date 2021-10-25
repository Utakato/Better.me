export const userLoggedIn = (username, userid)  => {
    return ({
        type: "user/USER_LOGGED_IN",
        payload: {
            username,
            userid,
        }
    })
}

export const userLoggedOut = () => {
    return ({
        type: "user/USER_LOGGED_OUT"
    })
}

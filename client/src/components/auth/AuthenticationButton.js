import LogoutButton from "./LogoutButton"
import NavButton from "../Navigation/NavButton"
import {useSelector} from "react-redux"
const AuthenticationButton = () => {
	const userState = useSelector(state => state.user)
	return userState.isLoggedIn ? <LogoutButton /> : <NavButton to="/login" text="Login" />
}

export default AuthenticationButton

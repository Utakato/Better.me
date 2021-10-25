import {Button} from "@mui/material"
import { useSelector, useDispatch} from "react-redux"
import { userLoggedOut } from "../../actions/userActions"
import {useHistory} from "react-router-dom"

const LogoutButton = () => {
	const dispatch = useDispatch()
	const userState = useSelector(state => state.user) 
	const history = useHistory()
	const logout = () => {
		dispatch(userLoggedOut())
		history.push("/login")

	}
	return (
		<Button 
			color="inherit"
			onClick={() =>
			logout()}
		>
		Log Out
		</Button>
	)
}

export default LogoutButton

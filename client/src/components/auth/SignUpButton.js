import {useAuth0} from "@auth0/auth0-react"
import {Button} from "@mui/material"
const SignUpButton = () => {
	const { loginWithRedirect } = useAuth0();
	return <Button 
			color="inherit"
			onClick={() => loginWithRedirect({screen_hint: "signup",})}>
				Sign Up
		</Button>;
}

export default SignUpButton

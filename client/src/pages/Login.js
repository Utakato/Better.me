import { useState } from "react"
import { useDispatch } from "react-redux"
import FormControl from "@mui/material/FormControl"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import NavButton from "../components/Navigation/NavButton"
import Nav from "../components/Navigation/Nav"
import api from "../urls"
import { userLoggedIn }from "../actions/userActions"
import { useHistory } from "react-router-dom"


const Login = () => {
	const dispatch = useDispatch()
	
	const initialValues = {
		username: "",
		password: "",
	}

	const [values, setValues] = useState(initialValues)
	
	const handleInputChange = e => {
		const {name, value} = e.target

		setValues({
			...values,
			[name]: value
		})
	} 
	const history = useHistory()

	const handleLogin = () => {
		console.log(JSON.stringify(values))
		fetch(api + '/login', {
			method: "POST",
			headers: {"Content-Type": "application/json" },
			body: JSON.stringify(values)
		})
		.then(res => res.json())
		.then(data => {
			if (data.message === "Succes!") {
				dispatch(userLoggedIn(data.payload.username, data.payload.id))
				history.push("/")
			}
		})
	}

	return (
		<div>
			<Nav />
			<div className="loginPage">
				<div className="loginForm">
					<FormControl>
						<Typography variant="h5">Username</Typography>
						<TextField 
							size="small" 
							name="username"
							value={values.username}
							onChange={handleInputChange}
						/>
						<Typography variant="h5">Password</Typography>
						<TextField 
							size="small"
							name="password" 
							value={values.password}
							onChange={handleInputChange}
						/>
						<Button variant="contained" onClick={handleLogin}  sx={{marginTop:"1rem"}}>Login </Button>
					</FormControl>
					<div className="signUpButton">	
						<NavButton to="/register" text="Sign Up" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login

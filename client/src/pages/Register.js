import FormControl from "@mui/material/FormControl"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import NavButton from "../components/Navigation/NavButton"
import Nav from "../components/Navigation/Nav"
import { useState } from "react"
import api from "../urls"

const Register = () => {
	const initialValues = {
		username: "",
		email: "",
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

	const register = () => {
		console.log(JSON.stringify(values))
		console.log(api)
		fetch(api + '/register', {
			method: "POST",
			headers: {"Content-Type": "application/json" },
			body: JSON.stringify(values)
		})
		.then(res => res.json())
		.then(data => alert(data.message))
	}

	return (
		<div>
			<Nav />
			<div className="loginPage">
				<div className="loginForm">
					
				<Typography variant="h4" sx={{textAlign:"center", paddingBottom:"1rem"}}>Register</Typography>
					<FormControl>
						<div className="formcomponent">
						<Typography variant="h5">Email</Typography>
						<TextField 
							size="small" 
							name="email" 
							value={values.email}
							onChange={handleInputChange}
						/>
						</div>
						<div className="formcomponent">
						<Typography variant="h5">Username</Typography>
						<TextField 
							size="small" 
							name="username"
							value={values.username}
							onChange={handleInputChange}
						/>
						</div>
						<div className="formcomponent">
						<Typography variant="h5" >Password</Typography>
						<TextField 
							size="small"
							name="password" 
							value={values.password}
							onChange={handleInputChange}
						/>
						</div>
						<Button variant="contained" onClick={register} sx={{marginTop:"1rem"}}>Register </Button>
					</FormControl>
					<div className="signUpButton">	
						<NavButton to="/login" text="Login" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register

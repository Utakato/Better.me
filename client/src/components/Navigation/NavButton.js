import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const NavButton = ({to, text}) => {
	return (
		<Button 
            component={Link}
            to={to}
            color="inherit">{text}
			</Button>
	)
}

export default NavButton

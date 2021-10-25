import { Grid } from "@mui/material"
import Button from '@mui/material/Button';
import * as actions from "../../actions/habitAction"
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";

const Habit = ({name, current, best, id}) => {
	const [active, setActive] = useState()

	const activeHabit = useSelector(state => state.activeHabitCalendar)
	const habits = useSelector(state => state.habits)
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(actions.setActiveHabit(id))
	}

	if (activeHabit === "" && habits !== []){
		dispatch(actions.setActiveHabit(habits[0]._id))
	}

	if (activeHabit === id) {

	}

	return (
			<div className="habit">
			<Button color="inherit" sx={{textTransform: "capitalize", width:'100%',}} onClick={handleClick}>
				<Grid container spacing={2}>
					<Grid item md ={6} sx={{textAlign:"left", paddingLeft:"2rem!important",}}>{name}</Grid>
					<Grid item md={3}>Current Streak: {current}</Grid>
					<Grid item md={3}>Best Streak: {best}</Grid>
				</Grid>
			</Button>
			</div>
	)
}

export default Habit
// sx={{marginRight: '2rem', marginLeft: ".3rem"}}
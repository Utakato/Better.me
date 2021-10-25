import MyCalendar from "./MyCalendar";
import { Typography } from "@mui/material"
import { useSelector } from "react-redux";

const HabitDetails = () => {
	const selectedHabitID = useSelector(state => state.activeHabitCalendar)
	const habits = useSelector(state => state.habits)
	const selectedHabitList = habits.filter((habit)=> habit._id === selectedHabitID)
	var selectedHabit = selectedHabitList[0]
	if (selectedHabitID === "") {
		selectedHabit = {
			name: "",
			frequency: [],
			calendar: {
				done: [],
				offDay: [],
				skipDay: [],
				missDay: []
			  }
		}
	}
	const log = () => {
		console.log(selectedHabit)
	}
	
	return (
		<div>
			<div className="calendartitle">
				<Typography variant="h5" component="h2" onClick={log}>
					{selectedHabit.name} Journey
				</Typography>
			</div>
			<div className="calendar">
				<MyCalendar selectedHabit={selectedHabit} />
			</div>
		</div>
	)
}

export default HabitDetails

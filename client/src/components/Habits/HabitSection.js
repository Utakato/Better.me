import "../../style.css"
import { Typography } from "@mui/material"
import 'react-calendar/dist/Calendar.css';
import HabitsList from "./HabitsList";
import HabitsAddButton from "./HabitsAddButton";
import HabitDetails from "./HabitDetails"

const HabitSection = () => {	
	
	return (
		<div className="section">
			<Typography variant="h5" component="h2">
				Habits:
			</Typography>
			<HabitsAddButton />
			<HabitsList />
			<HabitDetails />
				
						
			
		</div>
	)
}

export default HabitSection

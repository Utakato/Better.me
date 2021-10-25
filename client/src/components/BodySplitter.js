import { Grid } from "@mui/material"
import HabitSection from "./Habits/HabitSection"
import TodoSection from "./TodoSection"


const BodySplitter = () => {
	return (
		<Grid container>
			<Grid item xs={12} md={6}>
				<TodoSection />
			</Grid>
			<Grid item xs={12} md={6}>
				{/* <HabitSection /> */}
			</Grid>
		</Grid>
	)
}

export default BodySplitter

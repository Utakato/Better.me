import "../style.css"
import TodoList from "./TodoList"
import ToDoInput from "./ToDoInput"
import { Grid } from "@mui/material"
import DoneList from "./DoneList"

const TodoSection = () => {
	return (
		<div className="section todo">
			<Grid container justifyContent="center">
				<Grid item md={6}>
					<TodoList />
				</Grid>
				<Grid item md={6} justifyContent="center">
					<ToDoInput />
				</Grid>
			</Grid>
			<DoneList />
		</div>
	)
}

export default TodoSection

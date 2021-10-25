import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { Typography } from "@mui/material"
import today from "../tools/today"
const DoneList = () => {
	const todoList = useSelector(state => state.todos)
	
	
	return (
		<div className="donelist">
			<div className="todohead">
			<Typography variant="h5">Done</Typography>
			<Typography variant="subtitle2">{today}</Typography>
			</div>
			{todoList.map((item, index) => {
					if (item.completed === true) {
						return <TodoItem content={item.text} key={item._id} completed={item.completed} id={item._id}/>
				}return
				})}
		</div>
	)
}

export default DoneList

import {Typography } from "@mui/material"
import TodoItem from "./TodoItem"
import {useSelector, useDispatch} from "react-redux"
import { useEffect} from "react"
import * as actions from "../actions/todoAction"
import today from "../tools/today"

const TodoList = () => {
	const todoList = useSelector(state => state.todos)
	const userState = useSelector(state => state.user)
	const dispatch = useDispatch()

	useEffect(() => { dispatch(actions.getTasks(userState.id))
	},[dispatch, userState.id])
	
	return (
		<div className="todolist">
			<div className="todohead">
				<Typography variant="h5">Today</Typography>
				<Typography variant="subtitle2">{today}</Typography>
			</div>
			<div className="todobody">
				{todoList.map(item => {
					if (item.completed !== true) {
						return <TodoItem content={item.text} key={item._id} completed={item.completed} id={item._id}/>
				}
				})}
			</div>
		</div>
	)
}

export default TodoList
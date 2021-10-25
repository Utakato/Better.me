import { useDispatch, useSelector } from "react-redux"
import { TextField, Typography } from "@mui/material"
import { useState } from "react"
import * as actions from "../actions/todoAction"

const ToDoInput = () => {
	const [text, setText] = useState('')
	const dispatch = useDispatch()
	const userState = useSelector(state => state.user)
	const handleChange = e => setText(e.target.value)
	
	const task = {
		text: text,
		user_id: userState.id,
		completed: false,
	}
	const handleEnter = e => {
		if (e.keyCode === 13 && text !== '') {
			dispatch(actions.addItem(task))
			setText('')
		}
	}
	return (
		<div className="todoinput">
			<div className="todotitle">
			<Typography variant="h5">Add Task</Typography>
			</div>
			<TextField 
			value={text}
			size="small"
			onKeyDown={handleEnter}
			onChange={handleChange} 
			sx={{
				margin:" 0px 10px"
			}}
			/>
		</div>
	)
}

export default ToDoInput

import { TextField, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import * as api from "../actions/todoAction"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Modal } from "@mui/material"
import { Box } from "@mui/system"
import { FormControl } from "@mui/material"
import { Button } from "@mui/material"
import { useState } from "react"


const TodoItem = ({content, completed, id}) => {
	const [openEdit, setOpenEdit] = useState(false);
	const [editText, setEditText] = useState(content)
	const handleOpen = () => setOpenEdit(true);
	const handleClose = () => setOpenEdit(false);
	const dispatch = useDispatch()
	
	const handleToggleClick = () => {
		const payload = {
			id: id,
			completed : !completed,
			text: content,
		}
		dispatch(api.updateItem(payload))
	}

	const handleDeleteClick = () => {
		dispatch(api.deleteItem(id))
	}

	const handleChange = (e) => {
		setEditText(e.target.value)
	}
	
	const handleSave = () => {
		const payload = {
			id: id,
			completed : completed,
			text: editText,
		}
		dispatch(api.updateItem(payload))
		handleClose()
	}

	const handleEnter = e => {
		if (e.keyCode === 13) handleSave()
	}
	
	return (	
		<div className="todoitem">
			<div onClick={handleToggleClick}>
			<Typography 
			variant="body2" 
			className={completed ? "todocontent done" : "todocontent"}
			>
				{content}
			</Typography>
			</div>
			{completed ? <HighlightOffIcon onClick={handleDeleteClick} sx={{cursor:"pointer"}}/> : <EditIcon onClick={handleOpen} sx={{cursor:"pointer"}}/> }
			<Modal
				open={openEdit}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className="modalBox" onKeyDown={handleEnter}>
					<div className="modalDiv">
					<Typography id="modal-modal-title" variant="h5" component="h2" sx={{textAlign:"center"}}>
						Edit Task
					</Typography>
					<FormControl sx={{paddingTop:"2rem"}}>
						<TextField 
						value={editText} 
						onChange={handleChange}
						name="editText"
						/>
				
						<Button variant="contained" onClick={handleSave} sx={{marginTop:"1rem"}}> Save</Button>
						<Button variant="outlined" onClick={handleClose} sx={{marginTop:"1rem"}}> Close</Button>
					</FormControl>
					</div>
				</Box>
			</Modal>
		</div>
	)
}

export default TodoItem

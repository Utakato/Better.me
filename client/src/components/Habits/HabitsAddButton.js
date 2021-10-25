import { Button, Box, Modal, Grid }from "@mui/material"
import { useState } from "react";
import { Typography } from "@mui/material"
import { FormControl } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import {useDispatch, useSelector} from "react-redux"
import {createHabit} from "../../actions/habitAction.js"

const HabitsAddButton = () => {
	const [open, setOpen] = useState(false);
	const [checked, setChecked] = useState({
		Monday : true, 
		Tuesday : true, 
		Wednesday : true, 
		Thursday : true,
		Friday : true,
		Saturday : true, 
		Sunday : true
	})
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	
	const userState = useSelector(state => state.user)
	const dispatch = useDispatch()
	
	const [newHabit, setNewHabit] = useState({
		user_id: userState.id, 
		name: "",
		time: "07:30",
		frequency: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	})

	const handleSubmit = (e) => {
		console.log(newHabit)
		e.preventDefault()
		dispatch(createHabit(newHabit))
		handleClose()
	}
	const handleName = (e) => {
		setNewHabit({...newHabit, name: e.target.value})
	}
	const handleTime = (e) => {
		setNewHabit({...newHabit, time: e.target.value})
	}

	const handleCheck = (e) => {
		const value = e.target.value
		setChecked({
			...checked, 
			[value] : !checked[[value]]
		})
		handleCheckbox(e)
	}

	const handleCheckbox = (e) => {
		if (e.target.checked === true) {
			setNewHabit({
				...newHabit, frequency: [...newHabit.frequency, e.target.value]
			})
		} else if (e.target.checked === false) {
			setNewHabit({
				...newHabit, frequency: newHabit.frequency.filter((day) => day !== e.target.value)
			})
		}
		
		
	}
	return (
		<div>
			<Button
				onClick={handleOpen}
				>
					Add Habit
				</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className="modalBox">
					<div className="modalDiv">
					<Typography id="modal-modal-title" variant="h5" component="h2" sx={{textAlign:"center"}}>
						Add a Habit
					</Typography>
					<FormControl sx={{paddingTop:"2rem"}}>
						<form autoComplete="off" noValidate onSubmit={handleSubmit}>
						<Grid container>
							<Grid item md={4}>
								<Typography variant="h6" sx={{paddingTop:"1rem"}}>Name</Typography>
								<Typography variant="h6" sx={{paddingTop:"2rem"}}>Time of Day</Typography>
							</Grid>
							<Grid item md={6}>
								<TextField 
									size="small" 
									sx={{ width: '25ch', paddingTop:"0.5rem" }} 
									value={newHabit.name}
									onChange={handleName}
								/>	
								<TextField
									id="time"
									type="time"
									value={newHabit.time}
									onChange={handleTime}
									InputLabelProps={{
									shrink: true,
									}}
									inputProps={{
									step: 300, // 5 min
									}}
									sx={{ width: 150, height: 50, paddingTop:"1.25rem"}}
									/>
							</Grid>
						</Grid>
						<Grid container alignItems="center" sx={{paddingTop:"1rem"}}>
				<Grid item md={4} >
				<Typography variant="h6">Frequency</Typography>
				</Grid>
				<Grid item md={7}>
				<FormControlLabel
						sx={{margin:0}}
						id="Sunday"
						value="Sunday"
						control={<Checkbox size="small"/>}
						label="S"
						labelPlacement="top"
						checked={checked.Sunday}
						onChange={handleCheck}
					/>
					<FormControlLabel
						sx={{margin:0}}
						id="Monday"
						value="Monday"
						control={<Checkbox size="small"/>}
						label="M"
						labelPlacement="top"
						checked={checked.Monday}
						onChange={handleCheck}
					/>
					<FormControlLabel
						sx={{margin:0}}
						id="Tuesday"
						value="Tuesday"
						control={<Checkbox size="small"/>}
						label="T"
						labelPlacement="top"
						checked={checked.Tuesday}
						onChange={handleCheck}
					/>
					<FormControlLabel
						sx={{margin:0}}
						id="Wednesday"
						value="Wednesday"
						control={<Checkbox size="small"/>}
						label="W"
						labelPlacement="top"
						checked={checked.Wednesday}
						onChange={handleCheck}
					/>
					<FormControlLabel
						sx={{margin:0}}
						id="Thursday"
						value="Thursday"
						control={<Checkbox size="small"/>}
						label="T"
						labelPlacement="top"
						checked={checked.Thursday}
						onChange={handleCheck}
					/>
					<FormControlLabel
						sx={{margin:0}}
						id="Friday"
						value="Friday"
						control={<Checkbox size="small"/>}
						label="F"
						labelPlacement="top"
						checked={checked.Friday}
						onChange={handleCheck}
					/>
					<FormControlLabel
						sx={{margin:0}}
						id="Saturday"
						value="Saturday"
						control={<Checkbox size="small"/>}
						label="S"
						labelPlacement="top"
						checked={checked.Saturday}
						onChange={handleCheck}
					/>
					
					</Grid>
			</Grid>
						<Button variant="contained" type="submit" > Add Habit</Button>
						</form>
					</FormControl>
					</div>
				</Box>
			</Modal>
		</div>
	)
}

export default HabitsAddButton

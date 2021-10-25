import Habit from "./Habit"
import {useSelector, useDispatch} from "react-redux"
import { useEffect} from "react"
import * as actions from "../../actions/habitAction"
const HabitsList = () => {
	const habits = useSelector(state => state.habits)
	const userState = useSelector(state => state.user)
	
	const dispatch = useDispatch()
	

	useEffect(() => { 
		dispatch(actions.getHabit(userState.id))
	},[dispatch, userState.id])
	
	
	return (
		<div className="habitlist">
			{habits.map(habit => {
				return <Habit name={habit.name} current="0" best="0" id={habit._id}/>
			})}
		</div>
	)
}

export default HabitsList

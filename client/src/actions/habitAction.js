import * as api from "../api"

export const createHabit = (newHabit) => async (dispatch) => {
	console.log("Action: ",newHabit)
	try { 
		const { data } = await api.createHabit(newHabit)
		console.log(data)
		dispatch({
			type: "habits/habitAdded",
			payload: data,
		})
	} catch (error) {
		console.log(error.message)
	}
}

export const getHabit = (user_id) => async (dispatch) => {
	try { 
		const { data } = await api.fetchHabit(user_id)
		console.log(data)
		dispatch({
			type: "habits/fetchAllHabits",
			payload: data,
		})
	} catch (error) {
		console.log(error.message)
	}
}

export const updateHabit = (payload) => async (dispatch) => {
	try { 
		const { data } = await api.updateHabit(payload)
		console.log(data)
		dispatch({
			type: "habits/habitUpdated",
			payload: data,
		})
	} catch (error) {
		console.log(error.message)
	}
}


export const setActiveHabit = (habit_id) => async (dispatch) => {
	dispatch({
		type: "habits/habitSelected",
		payload: habit_id,
	})
}
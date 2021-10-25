import * as api from "../api"

export const deleteItem = (id) => async (dispatch) => {
	try { 
		const { data } = await api.deleteTask(id)
		dispatch({
		   type: "todos/todoDeleted",
		   payload: data
		})
	} catch (error) {
		console.log(error.message)
	}
}

export const getTasks = (user_id) => async (dispatch) => {
	const { data } = await api.fetchTasks(user_id)
	dispatch({
		type: "todos/fetchAllTasks",
		payload: data,
	})
}


export const addItem = (task) => async (dispatch) => {
	try {
		const { data } = await api.createTask(task)
		dispatch({
			type: "todos/todoAdded",
			payload: data,
		 })

	} catch (error) {
		console.log(error.message)
	}
}

export const updateItem = (payload) => async (dispatch) => {
	try {
		const {data} = await api.toggleTask(payload)
		dispatch({
			type: "todos/todoUpdated",
			payload: data,
		 })
	} catch (error){
		console.log(error.message)
	}
	
}
import axios from "axios"

const url = "http://localhost:5000/api"

export const fetchTasks = (user_id) => { //will be replaced by list_id most likely
	return axios.get(url + "/task/" + user_id)
}

export const createTask = (task) => {
	return axios.post(url + "/task", task)
}

export const toggleTask = (task) => {
	return axios.post(url+ "/task/update/" + task.id, task)
	
} 

export const deleteTask = (task) => {
	return axios.get(url+ "/task/delete/" + task)
}

//  *********** habits

export const createHabit = (habit) => {
	console.log("api: ", habit)
	return axios.post(url + "/habit", habit)
}

export const fetchHabit = (id) => {
	return axios.get(url + "/habit/" + id)
}

export const updateHabit = (habit) => {
	return axios.post(url + "/habit/update/" + habit.id, habit)
}
const initialState = [
		{ _id: 0, text: 'Click to complete', completed: false },
		{ _id: 1, text: 'Click to mark it uncompleted', completed: true },
	]



const todolistReducer = (state=initialState, action) => {
	switch(action.type){
		case "todos/fetchAllTasks":{
			return action.payload.results
		}
		case "todos/todoAdded": {
			return [
				...state, action.payload.newTask ]	
		}

		case "todos/todoDeleted":{
			return state.filter((task) => task._id !== action.payload._id)
			
		}

		case "todos/todoUpdated": {
			return state.map(task => {
					if (task._id !== action.payload._id){
						return task
					}
					return {
						...task, 
						completed: action.payload.completed,
						text: action.payload.text,
					}
				})
			}

		default:
			return state
	}
}

export default todolistReducer
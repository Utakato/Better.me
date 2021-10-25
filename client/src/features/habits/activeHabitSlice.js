const activeHabitReducer = (state="", action) => {
	switch(action.type){
		case "habits/habitSelected":{
			console.log(action.payload)
			return action.payload
		}
		default: return state
		
	}
}

export default activeHabitReducer
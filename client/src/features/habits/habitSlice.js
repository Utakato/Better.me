const habitReducer = (state=[], action) => {
	switch(action.type){
		case "habits/fetchAllHabits":{
			return action.payload.results
		}
		case "habits/habitAdded" : {
			return [
				...state, action.payload.newHabit
			]
		}
		default: return state
		
	}
}

export default habitReducer
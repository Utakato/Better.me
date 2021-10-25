import todolistReducer from "../features/todos/todosSlice"
import { combineReducers } from "redux"
import userReducer from "../features/user/userSlice"
import habitReducer from "../features/habits/habitSlice"
import activeHabitReducer from "../features/habits/activeHabitSlice"

const rootReducer = combineReducers({
	user: userReducer,
	todos: todolistReducer,
	// habits: habitReducer,
	// activeHabitCalendar: activeHabitReducer,
})


export default rootReducer
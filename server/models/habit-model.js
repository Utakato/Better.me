const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const HabitSchema = new Schema({
	user_id: String,
	name: String,
	frequency: Array,
	currentStreak: Number,
	bestStreak: Number,
	calendar: {
		done: Array,
		offDay: Array,
		skipDay: Array,
		missDay: Array,
	}
})


const Habit = mongoose.model("Habit", HabitSchema)

module.exports = Habit
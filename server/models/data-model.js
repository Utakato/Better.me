const mongoose = require("mongoose")

const Schema = mongoose.Schema;


const TaskListSchema = new Schema({
	id: String, // TL + number
	name: String,
	tasks: Array, // array of obj
})

const HabitListSchema = new Schema({
	id: String, 
	name: String,
	tasks: Array, // array of ids
})


const SubTaskSchema = new Schema({
	id: String, 
	name: String,
	done: Boolean,
})

const TaskSchema = new Schema({
	user_id: String,
	id: String,
	text: String,
	sub_task_list: SubTaskSchema,
	completed: Boolean,
	date: String,
	type: String,
})

const Task = mongoose.model("Task", TaskSchema)

module.exports = Task
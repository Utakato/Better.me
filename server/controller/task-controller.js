const Task = require("../models/data-model")

exports.postTask = async (req,res) => {
	const task = req.body
	const newTask = new Task({
		user_id: task.user_id,
		text: task.text,
		completed: false
	})
	newTask.save()
	res.status(201).json({newTask})
}


exports.getTask = async (req, res) => {
	const id = req.params.user_id
	Task
	.find({"user_id": id}, function(err, results){
		if (err) {
			console.log(err)
		} else {
			res.json({results})
		}
	}).select("-user_id -__v")
}


exports.updateTask = async (req, res) => {
	const id = req.body.id
	const toggle = req.body.completed
	const text = req.body.text
	
	Task.findByIdAndUpdate(id, { $set: {completed: toggle, text: text}}, {new:true}, function (err, data) {
		if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
	})
}

exports.deleteTask = async (req,res) => {
	const id = req.params.task_id
	
	Task.findByIdAndRemove(id, function (err, data){
		if(err){
			console.log(err)
		}else {
			
			res.json(data)
		}
	})
}

// id: String,
// 	name: String,
// 	sub_task_list: SubTaskSchema,
// 	done: Boolean,
// 	date: String,
// 	type: String,
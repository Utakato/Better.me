const Habit = require("../models/habit-model")

exports.postHabit = async (req, res) => {
	const habit = req.body
	console.log(habit)
	const newHabit = new Habit({
		user_id: habit.user_id,
		name: habit.name,
		frequency: habit.frequency,
	})
	newHabit.save()
	res.status(201).json({newHabit})
}

exports.getHabit = async (req, res) => {
	const id = req.params.user_id
	Habit.find({"user_id": id}, function(err, results) {
		if (err) {
			console.log(err)
		} else {
			res.json({results})
		}
	})
}


exports.updateHabit = async (req, res) => {
	const {id, status, date} = req.body
	const payload = {
		[status]: date,
	}
	const calendar = "calendar." + status
	console.log(payload)
	Habit.findByIdAndUpdate(id, { $addToSet : { [calendar] : date }}, {new:true}, function(err, updated){
		if (err) {
			console.log(err)
		} else {
			console.log("updated: ",updated)
		}
	})

}



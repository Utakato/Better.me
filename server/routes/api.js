const router = require("express").Router()
const controller = require("../controller/user-controller")
const auth = require("../controller/auth-controller")
const task = require("../controller/task-controller")
const habit = require("../controller/habit-controller")

router.get("/", function(req, res){
	res.json({
		status: "API Working",
		message: "Welcome to better.Me API"
	})
})

// TASKS **********
router.route("/task/:user_id")
	.get(task.getTask)

router.route("/task")
	.post(task.postTask)

router.route("/task/update/:task")
	.post(task.updateTask)

router.route("/task/delete/:task_id")
	.get(task.deleteTask)



// USERS **************
router.route("/users")
	.get(controller.getAllUsers)

router.route("/getUsername")
	.get(auth.getUsername)

router.route("/register")
	.post(auth.postRegister)

router.route("/login")
	.post(auth.postLogin)

// HABITS ********
router.route("/habit")
	.post(habit.postHabit)

router.route("/habit/:user_id")
	.get(habit.getHabit)

router.route("/habit/update/:habit_id")
	.post(habit.updateHabit)

module.exports = router



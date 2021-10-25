exports.getAllUsers = (req, res) => {
	return res.json({
		message: 'These are all users',
		data: "this will be data"
	})
}
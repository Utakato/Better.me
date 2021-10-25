const User = require("../models/user-model.js")
const jwt = require("jsonwebtoken")


exports.postRegister = async (req, res) => {
	const user = req.body;

	const takenUsername = await User.findOne({username: user.username})
	const takenEmail = await User.findOne({email: user.email})

	if (takenUsername || takenEmail) {
		res.json({message: "Username or pass taken"})
	} else {
		const dbUser = new User({
			username : user.username.toLowerCase(),
			email: user.email.toLowerCase(),
			password: user.password
		})

		dbUser.save()
		res.json({message: "Succes!"})
	}
}


exports.postLogin = (req, res) => {
	const userLoggingIn = req.body;
	User.findOne({username: userLoggingIn.username})
		.then(dbUser => {
			if (!dbUser) {
				return res.json({message: "Invalid username or pass"})
			}
			if (userLoggingIn.password == dbUser.password) {
				const payload ={
					id: dbUser._id,
					username : dbUser.username,
				}
				return res.json({
					message: "Succes!",
					payload: payload
				})
				// jwt.sign(
				// 	payload,
				// 	process.env.JWT_SECRET,
				// 	{expiresIn: 86400},
				// 	(err, token) => {
				// 		if (err) return res.json({message:"err"})
				// 		return res.json({
				// 			message: "Succees!",
				// 			token: "Bearer " + token
				// 		})
				// 	}
				// )
			} else {
				return res.json({
					message: "Invalid username or pass"
				})
			}
		})
}

exports.getUsername = (verifyJWT, (req, res) => {
	res.json({
		isLoggedIn: true,
		username: req.user.username,	
	})
})




function verifyJWT(req, res, next) {
	const token = req.headers["x-acces-token"]?.split(' ')[1]

	if (token) {
		jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
			if (err) return res.json({
				isLoggedIn: false,
				message: "Failed to Authenticate"
			})
			req.user = {}
			req.user.id = decoded.id
			req.user.username = decoded.username
			next()
		})
	}else {
		res.json({
			message: "Incorrect Token Given", 
			isLoggedIn: false
			})
	}
}
const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
require("dotenv").config({path: "./config.env"})
const routes = require('./routes/api')

const port = process.env.port || 5000;
const app = express()


const user = "betterAdmin"
const pass = "Y8WL9PFH8kX8yDDl"

mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.6uqv4.mongodb.net/betterme?retryWrites=true&w=majority`)


app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use("/api", routes);


app.listen(port, () => {
	console.log(`Server listening on ${port}`)
})
const express = require("express")
const bodyParser = require("body-parser")
const User = require("./Models/user")
const App = express()
const PORT = 8080
require('./Models/index')

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended: false}))

App.get("/", (req, res) => {
    res.send("Welcome to server")
})

// If the table already exist then this will drop that table and will be creating a new one 
// User.sync({force: true})

// In this case dropping and creation of a new table will not be happening 
// It will be creating the table if the table does not exist 
// It will not be dropping the table and then creating a new one if the table exist 
User.sync()
 
App.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})
var express = require('express')
var bodyParser = require("body-parser")
var path = require("path")
var app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// app.use(express.static("./frontend"))
app.use(express.static(path.join(__dirname, "./frontend")))
app.use(bodyParser.json())


app.get("/search", (req, res) => {
    res.send(req.query)
})


app.post("/login", (req, res) => {
    res.send(req.body.username + " " + req.body.password)
})

//                           //////////rest api

var users = [{
    username: "shoaib",
    email: "rshoaib376@gmail.com"
}];
app.get("/users", (req, res) => {
    res.json(users);

})
app.post("/addusers", (req, res) => {
    var newUser = { username: req.body.username, email: req.body.email }
    users.push(newUser)
    res.send("success you have added successfully...")
})
app.delete("/users", (req, res) => {
    users = users.filter((user) => {
        return user.username != req.body.username
    })
    res.send("you have succeccfull delete that element...")
})

// app.delete("/users", (req, res) => {
//     users = users.filter((user) => {
//         return user.username != req.body.username
//     })
//     res.send("delete the user")
// })


app.listen(8080, console.log("server is running..."))






// var http = require("http");
// var port = 8080;

// http.createServer((req, res) => {
//         res.end("hello developers...")
//     })
//     .listen(port, console.log(`server is running... ${port}`))

// app.use(express.static(path.join(__dirname,"index.html")))
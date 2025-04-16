const express = require('express')
const blog = require('./routes/blog')

const app = express()
const port = 3000
const fs = require("fs");



app.use('/blog', blog)

app.use(express.static("public"));

// middleware 1
app.use((req, res, next) => {
    fs.appendFileSync("log.txt", `${Date(Date.now())} is a ${req.method}\n`)
    req.naeem = "Hi I am Naeem"
    console.log(req.headers)
    next()
})

// middleware 2
app.use((req, res, next) => {
    console.log('mid 2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!' + req.naeem)
})
app.get('/contact', (req, res) => {
    res.send('Hello World! contact')
})
app.get('/about', (req, res) => {
    res.send('Hello World! about')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
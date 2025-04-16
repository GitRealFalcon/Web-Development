const express = require('express')
const blog = require('./routes/blog')

const app = express()
const port = 3000

app.use('/blog', blog)
app.use(express.static("public"));

app.get('/', (req, res) => {
  console.log('get request');
  res.send('Hello World!')
}).post('/', (req, res) => {
  console.log('post request');
  res.send('Hello World! post')
}).put('/', (req, res) => {
  console.log('put request');
  res.send('Hello World! put')
})
app.get('/index', (req, res) => {
  console.log('index request');
  res.sendFile('templates/index.html', {root: __dirname})
})
app.get('/api', (req, res) => {
  console.log('api request');
  res.json({a:2,b:3,c:6,d:[1,2,3,4,5,6],5:"Mohd Naeem"})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3300

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World! 3')
})
app.get('/home', (req, res) => {
  res.send('Hello World! home')
})
app.get('/home/:slug', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  
  
  res.send(`Hello World! home ${req.params.slug}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
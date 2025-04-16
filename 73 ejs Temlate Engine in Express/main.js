const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
//https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName = "City Connect";
    let searchText = "Search Now";
    let arr = ["Hello",1,2,3];
  res.render('index', {siteName,searchText,arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express from "express"
import mongoose from "mongoose";
import Employee from "./models/employee.js";

mongoose.connect('mongodb://localhost:27017/company')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr)=>{
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno];
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async(req, res) => {
    //Clear The Collection
   await Employee.deleteMany({})
    //Genrate random DATA
    let randomName = ["Rohan","Sohan","Ziya","Naeem"];
    let randonCity = ["Moradabad","Delhi","Amroha","Hapur"];
    let randomLeng = ["JAVA","PYTHON","C++","JS"];
    for (let index = 0; index < 4; index++) {
        let e = await Employee.create({
            name: getRandom(randomName),
            salery: Math.floor(Math.random()* 22000),
            language: getRandom(randomLeng),
            city: getRandom(randonCity),
            isManeger: Math.random()>0.5?true:false
        })

        await e.save()
    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
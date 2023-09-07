const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

require('./userdatabase/userConnection');

app.set('view engine','ejs')

let dir = (__dirname)
console.log(dir)

app.get('/',(req,res)=>{
    res.send("hey it's a new one")
})

app.get('/profile',(req,res)=>{
    const user = {
        name:"disha",
        email:"alfjdk@gmail.com",
        city:"almora"
    }
    res.render('profile.ejs',{user})
})

app.get('/login',(req,res)=>{
    res.render('login.ejs');
})


app.get('views/login.ejs',(req,res)=>{
    res.render('login.ejs');
})

app.listen(port,()=>{
    console.log('listning to the port ',port);
})
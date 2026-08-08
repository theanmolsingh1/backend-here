const express = require('express');
const app = express();

const usersModel = require("./usermodel");
const userModel = require('./usermodel');


app.get("/" , (req , res)=>{
    res.send("hey");
});


//CRUD OPERATION

app.get("/create" , async (req , res)=>{
    const createUser = await usersModel.create({
        name : "Anmol",
        mail : "anmol@gmail.com",
        username :"mrx"
    })
    res.send(createUser);
})

app.get("/update" , async (req, res)=>{
    const upadatedUser = await userModel.findOneAndUpdate({username: "mrx"} , {name : "Anmol Singh"} , {new : true});
    res.send(upadatedUser);
})

app.get("/read" , async (req,res)=>{
    const readUser = await usersModel.find();
    res.send(readUser);
})

app.get("/delete" , async (req , res)=>{
    const deleteUser = await userModel.findOneAndDelete({name : "Anmol Singh"});
    res.send(deleteUser);
})

app.listen(3000);


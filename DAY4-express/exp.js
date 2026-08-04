// express is a package of npm;
// it's a framework which manages everything from recieving req to giving response.

const express = require('express');
const app = express();

//route create krna: for get, push, put
app.get("/" , (req,res)=>{
    res.send("hey from main.");
})

app.get("/next" , (req,res)=>{
    res.send("hey from next.");
})
app.listen(3000);


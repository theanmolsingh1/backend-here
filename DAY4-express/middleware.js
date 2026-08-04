// middleware: ye server aor route ke beech me hota hai.
// jb request accept krta hai server then uske baad ye request 
// middleware ko bhejta hai -> then after than route pe jate hai request.

//use can use multiple middlewares.

const express = require("express");
const app = express();


//middleware-> it uses "use" to init middleware.
app.use((req, res, next)=>{
    console.log("Request received");
    next();
});


//route->
app.get("/", (req, res) => {
    res.send("Home");
});

app.listen(3000);

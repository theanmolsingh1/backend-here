// middleware: ye server aor route ke beech me hota hai.
// jb request accept krta hai server then uske baad ye request 
// middleware ko bhejta hai -> then after than route pe jate hai request.

//use can use multiple middlewares.

const express = require("express");
const app = express();

function logger(req, res, next) {
    console.log("Request received");
    next();
}

//middleware->
app.use(logger);

//route->
app.get("/", (req, res) => {
    res.send("Home");
});

app.listen(3000);

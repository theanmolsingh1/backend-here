const express = require('express');
const app = express();
// const path = require('path');

// form handling: by using these 2 lines we will get data in readable form in backend side (from fronend to backend);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//for static: to keep static files in public;
// static files: images , videos , stylesheets, frontnd js;
// this below line means => jo bhi static files hai usko ejs me use kr sakte hai iske wajha se;
// see views folder -> indexedDB.ejs => yaha render huva hai.
app.use(express.static(path.join(__dirname , 'public')));

//for rendering ejs pages;
app.set('view engine' , 'ejs');

app.get("/" , (req , res)=>{
    //now index.ejs page, will be rendered if "/" route is called;
    //view ke ander walo ko direct access kr yaha pr;
    res.render("index");
});

// ----------------------------------------------------------------------------------------


//how to create a dynamic route -> jo bhi part dynamic ho uske aage : lga do.

//single dynamic route;
app.get("/user/:id" , (req,res)=>{
    res.send(`Welcome , ${req.params.id}`);
});

//multi parameter dynamic route;
app.get("/user/:country/:name", (req,res)=>{
    res.send(`haaaaa , kya bhai ${req.params.name} from ${req.params.country}.`)
});

app.listen(3000);

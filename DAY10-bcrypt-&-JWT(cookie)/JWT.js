//==========================================================
    //JWT: A JWT looks like: HEADER.PAYLOAD.SIGNATURE
    //JWT works with cookies, it gives (that string which we discussed in cookie => "HEADER.PAYLOAD.SIGNATURE") the cookie string which is very safe and random
    // JWT → token
    // Cookie → stores/sends the JWT
//==========================================================

const express = require('express');
const app = express();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get("/", function (req, res) {
    let token = jwt.sign({email: "harsh@example.com"}, "secret");
    res.cookie("token", token);
    res.send("done");
});

app.get("/read", function (req, res) {
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
});

app.listen(3000);
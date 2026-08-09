

/*
for theory check notes.
*/

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// EJS setup
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// ==========================
// LOGIN PAGE
// ==========================

app.get("/login", (req, res) => {

    res.render("login");

});


// ==========================
// LOGIN FORM SUBMISSION
// ==========================

app.get("/" , (req , res)=>{
    res.redirect("/login");
});


app.post("/login", (req, res) => {

    const { username, password } = req.body;

    // Example username and password
    if (username === "admin" && password === "1234") {

        // Send cookie to browser
        res.cookie("username", username, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        // Go to dashboard
        res.redirect("/dashboard");

    } else {

        res.send("Invalid username or password");

    }

});


// ==========================
// DASHBOARD
// ==========================

app.get("/dashboard", (req, res) => {

    // Get cookie from browser
    const username = req.cookies.username;

    // No cookie = not logged in
    if (!username) {
        return res.redirect("/login");
    }

    // Cookie exists
    res.render("dashboard", {
        username: username
    });

});


// ==========================
// LOGOUT
// ==========================

app.get("/logout", (req, res) => {

    // Delete cookie
    res.clearCookie("username");

    // Go back to login
    res.redirect("/login");

});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
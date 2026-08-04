// session and cookies:
// client <--------------> server
// client ask somthing --> server ask who you are --> then you need to login.
// after login: server gives you cookie in string form which you (client) keep 
// and whenever client ask some question it sends request along with cookie and 
// by mathching that cookie (string) from client to server's, it identifies who is that client (without logging-in each time.)
// each clients get unique cookies for connection.
// and that established connection is known as session.



const express = require('express');
const app = express();

// form handling: by using these 2 lines we will get data in readable form.
app.use(express.json());
app.use(express.urlencoded({extended: true}));


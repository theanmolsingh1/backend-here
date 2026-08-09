//==========================================================
    // Bcrypt: use to hash the senstive information.
//==========================================================


const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

let hash_storing = "";

const bcryptSalt = bcrypt.genSalt(10, async function(err, salt) {
    bcrypt.hash("anmol", salt, function(err, hash) {
        hash_storing = hash;
        //now store this hashed password into database
        //used to protect the password, even if someone hacks the database and server also.
        console.log(hash);
        bcrypt.compare("anmol", hash_storing, async function(err, result) {
            console.log(result);
        });
    });
})
app.listen(3000);


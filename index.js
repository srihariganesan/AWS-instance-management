const express = require("express");

const app = express();

const { exec }  = require("child_process")

const port = 3000;

function home(req, res) {
    res.sendFile(__dirname   + "/index.html");
    access_key = req.query.access_key_id;
    secret_key = req.query.secret_key;
    exec("serverless config credentials --provider aws --key " + access_key + " --secret " + secret_key);
    console.log("serverless config credentials --provider aws --key " + access_key + " --secret " + secret_key)
}
app.get("/", home)


app.listen(port)
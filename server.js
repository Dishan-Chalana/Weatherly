const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.get("/gg", (req, res) => {
    res.send("DD bn!");
});

app.get("/pakaya", (req, res) => {
    res.send("pakaya bn!");
});

app.get("*", (req, res) => {
    res.send("404 page not found");
});
app.listen(3000);

console.log('Starting app.js');
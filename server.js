const express = require('express')
const app = express()
const PORT = 4000

const spiderMan = require("./spiderMan.ejs");

app.get("/", (req, res) => {
    const context = {spiderMan};
    res.render("index.ejs", context);
})

app.listen(PORT, () => console.log( `Listening on ${PORT} `))
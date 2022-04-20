const express = require('express')
const app = express()
const PORT = 4000

const spiderMan = require('./spiderman')

app.set('view engine', 'ejs')
app.use(express.static("public"))

app.get('/spiderman', (req, res) => {
    const SpiderManData = {spiderMan}
    res.render('index.ejs', {SpiderManData: SpiderManData});
});

app.get('/spiderman/:id', (req,res) => {
    let spiderManId = req.params.id
    const context = {oneSpider: spiderMan[spiderManId]}
    res.render('show.ejs', context)
});



app.listen(PORT, () => console.log( `Listening on ${PORT} `))

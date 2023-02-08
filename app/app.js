const express = require('express')
const app = express()
const fs = require('node:fs/promises')
const data = require('./data.json')
const cors = require("cors");
const bodyparser = require("body-parser");
const { request } = require('node:http');
const { parse } = require('node:path');



app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors());




app.post('/deprouter', (req, res) => {
    fs.writeFile(__dirname + "/data.json", JSON.stringify({balance:req.body.deposite})).then(
        (result) => {
            console.log(result);
            res.redirect("back")
        }
    )
    // console.log(req.body);
})
app.post('/widrow', (req, res) => {
    let widrawvel=Number(req.body.widrawvel)
    let Parsedata=data.balance
    let balance=Number(Parsedata)-widrawvel

    console.log(balance);
    fs.writeFile(__dirname + "/data.json", JSON.stringify({balance:balance})).then(
        (result) => {
            console.log(result);
            res.redirect("back")
        }
    )
    // console.log(req.body);
})
app.get('/balance', (req, res) => {

    res.json(data.balance)

})


app.listen(5000, () => {
    console.log("server done");
});
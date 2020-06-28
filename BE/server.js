const express = require('express')
const app = express()

const bodyparser = require('body-parser')
const cors = require('cors')
const PROT = 4000
const config = require('./DB')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())


//conect DB
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

app.listen(PROT, function () {
    console.log('Hello Khoa', PROT)
})

//

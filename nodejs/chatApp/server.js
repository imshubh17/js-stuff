var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(express.static(__dirname))
app.use(bodyParser.json())

var messages = []

app.get('/messages',(req,res) =>{
    res.send(JSON.stringify(messages))
})

app.post('/messages',(req,res) =>{
    console.log(req.body)
    messages.push(req.body)
    res.sendStatus(200)
})


var server = app.listen(3000,()=>{
    console.log(`server in listening ${server.address().port}`)
})
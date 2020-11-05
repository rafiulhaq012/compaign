const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

require("./mongo")
require("./model/Post")

app.use(bodyParser.json())

app.use("/posts", require("./route/posts"))



app.listen(3000, function(){
    console.log("server listening at 3000")
})    
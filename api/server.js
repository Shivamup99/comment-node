const express = require('express')
const port = process.env.PORT || 4000
const connection = require('./model/db')
connection();
const user = require('./router/user')
const blog = require('./router/blog')
const comment = require('./router/comment')
const app  = express()

app.use(express.json())
app.use('/',user)
app.use('/',blog)
app.use('/',comment)
app.listen(port,()=>{
    console.log(`server is running ${port}`)
})
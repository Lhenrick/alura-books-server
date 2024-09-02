const express = require("express");
const booksRoute = require('./routes/book')

const app = express()

app.use(express.json())

app.use('/books', booksRoute)

const port = 8000



app.listen(port, () =>{
    console.log(`Listening the port ${port}`)
})
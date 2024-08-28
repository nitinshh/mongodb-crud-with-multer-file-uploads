const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const PORT = 3000

const app = express()
const EmployeeRoute = require('./routes/Employee')

mongoose.connect('mongodb://localhost:27017/practice');

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log("DB Connection Established")
})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



// -------------in case of uploading picture----------------

app.use('/uploads', express.static('uploads'))  // to access the file publicly

//-----------------------------------------------



app.use('/employee', EmployeeRoute)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

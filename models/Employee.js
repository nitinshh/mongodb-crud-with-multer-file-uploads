const mongoose = require('mongoose')
const Schema = mongoose.Schema

const emplyoyeeSchema = new Schema({
    name: {
        type: String
    },
    designation: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    age: {
        type: Number
    },

    //----------------------for uploading pictures---------------
    picture: {
        type: String
    }
    //-----------------------------------------------------------

}, {timestamps: true}) // automatically create createdAt and updatedAt


const Employee = mongoose.model('Employee', emplyoyeeSchema)
module.exports = Employee        
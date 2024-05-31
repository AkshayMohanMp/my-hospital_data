const mongoose =require("mongoose");
const { Timestamp } = require("mongodb");

const Schema = mongoose.Schema;

const CareerSchema = new Schema({
    Designation: {
        type: String,
        required : true,
    },
    Experience_Required: {
        type: String,
        required : true,
    },
    Salary: {
        type: String,
        required : true,
    },
    Last_date: {
        type: String,
        required : true,
    },
    
},{
    Timestamp:true,
})

module.exports =mongoose.model("Career",CareerSchema)
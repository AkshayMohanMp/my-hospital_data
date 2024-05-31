const { Timestamp } = require("mongodb");
const mongoose =require('mongoose');


const Schema = mongoose.Schema;

const EmergencySchema = new Schema({
    image: {
        type: String,
        required : true,
    },
    name: {
        type: String,
        required : true,
    },
    designation: {
        type: String,
        required : true, 
    },

},{
    Timestamps:true,
})




module.exports =mongoose.model("Emergency Department",EmergencySchema)
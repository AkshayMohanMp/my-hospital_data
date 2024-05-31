const { Timestamp } = require("mongodb");
const mongoose =require('mongoose');


const Schema = mongoose.Schema;

const ENTSchema = new Schema({
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
    Timestamp:true,
})




module.exports =mongoose.model("ENT Department",ENTSchema)
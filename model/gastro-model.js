const { Timestamp } = require("mongodb");
const mongoose =require('mongoose');


const Schema = mongoose.Schema;

const GastroSchema = new Schema({
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




module.exports =mongoose.model("Gastro Department",GastroSchema)

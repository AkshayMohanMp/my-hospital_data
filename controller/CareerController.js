

const CareerModel = require("../model/career-model");




exports.getAllCareer=async(req, res)=>{
    const Doctor =await CareerModel.find();


    if(Doctor.length===0)
        return res.status(400).json({
    success: false,
    message: "No Doctors Found"});

    res.status(200).json({
        success:true,
        data: Doctor
    })
}



exports.getCareerId=async (req, res)=>{
    const{id} =req.params;
    const Doctors= await CareerModel.findById(id);
    if (!Doctors){
        return res.status(404).json({
            sucess:false,
            message: "Doctors not Available for the ID Given"
            })
    }
    return res.status(200).json({
        success:true,
        data: Doctors
        })
    }


exports.AddCareer = async(req, res)=>{
    const {Designation, Experience_Required,Salary,Last_date}= req.body;

    const newDoctor = await CareerModel.create({Designation, Experience_Required,Salary,Last_date})
    return res.status(201).json({
        sucess:true,
        data: newDoctor
    })
    
}

exports.UpdateCareer= async(req, res)=>{
    const{id}= req.params;
    const{data}= req.body;
    const updateDoctor= await CareerModel.findOneAndUpdate({
        
    },{
        $set:{
            ...data,
        }
    }, {new:true})
    if (!updateDoctor){
        return res.status(404).json({
            success: false,
            message: "Doctor with the same Id Exist"
        })
    }
    return res.status(200).json({
        success:true,
        data: updateDoctor
        })
    
}




exports.DeleteCareerId = async(req,res)=>{
    const {id}= req.params;
    const Doctor =await CareerModel.deleteOne({
        _id:id
    })
    return res.status(200).json({
        success: true,
        data: CareerModel
    })
}




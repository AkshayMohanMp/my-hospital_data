

const OrthoModel = require("../model/ortho-model");




exports.getAllDoctors=async(req, res)=>{
    const Doctor =await OrthoModel.find();


    if(Doctor.length===0)
        return res.status(400).json({
    success: false,
    message: "No Doctors Found"});

    res.status(200).json({
        success:true,
        data: Doctor
    })
}



exports.getSingleDoctorbyId=async (req, res)=>{
    const{id} =req.params;
  
    const Doctors= await OrthoModel.findById(id);
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


exports.AddNewDoctor = async(req, res)=>{
    const {image, name,designation}= req.body;

    const newDoctor = await OrthoModel.create({image, name,designation})
    return res.status(201).json({
        sucess:true,
        data: newDoctor
    })
    
}

exports.UpdateDoctor= async(req, res)=>{
    const{id}= req.params;
    const{data}= req.body;
    const updateDoctor= await OrthoModel.findOneAndUpdate({
        
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




exports.DeleteDoctorById = async(req,res)=>{
    const {id}= req.params;
   
  
    const Doctor =await OrthoModel.deleteOne({
        _id:id
    })

    return res.status(200).json({
        success: true,
        data: OrthoModel
    })
}




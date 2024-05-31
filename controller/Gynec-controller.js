

const GynecModel = require("../model/gynec-model");




exports.getAllDoctors=async(req, res)=>{
    const Doctor =await GynecModel.find();


    if(Doctor.length===0)
        return res.status(400).json({
    success: false,
    message: "No Doctors Found"});

    res.status(200).json({
        success:true,
        data: Doctor
    })
}

// const getallDoctorsinGync =()=>{}
// const getallDoctorsinCardiac =()=>{}
// const getallDoctorsinNeuro =()=>{}
// const getSingleDoctorortho=()=>{}
// const getSingleDoctorGync=()=>{}
// const getSingleDoctorCardiac=()=>{}
// const getSingleDoctorNeuro=()=>{}

exports.getSingleDoctorbyId=async (req, res)=>{
    const{id} =req.params;
    // const Doctors =Doctor.find((each)=> each.id ===id);
    const Doctors= await GynecModel.findById(id);
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
    const {image, name, designation}= req.body;

    const newdoctor = await GynecModel.create({image, name, designation})
    return res.status(201).json({
        sucess:true,
        data: newdoctor
    })
    
}

exports.UpdateDoctor= async(req, res)=>{
    const{id}= req.params;
    const{data}= req.body;
    // const Doctors =Doctor.find((each)=> each.id ===id);
    const updateDoctor= await GynecModel.findOneAndUpdate({
        
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
   
    // const user = users.find((each)=> each.id ===id);
    const Doctor =await GynecModel.deleteOne({
        _id:id
    })
    // if(!Doctor){
    //     return res.status(404).json({
    //         success: false,
    //         message: "User with the sameid exist"
    //     })
    // }
    // const index = users.indexOf(user);
    // users.splice(index,1);
    return res.status(200).json({
        success: true,
        data: GynecModel
    })
}




const express =require("express");


const router = express.Router();


const{GastroModel} =require("../model");
const { getAllDoctors, getSingleDoctorbyId, AddNewDoctor, UpdateDoctor, DeleteDoctorById} = require("../controller/gastro-controller");




    /**
    * Route :  /Department
    * Method : get all doctors
    * Description : get all Doctor to the department
    * Access : private
    * Parameter : 
    */
router.get("/",getAllDoctors);
    
    
           /**
        * Route :  /Department/id
        * Method : get by id
        * Description :get a Doctor to the department
        * Access : private
        * Parameter : ID
        */
router.get("/:id",getSingleDoctorbyId)
    
    
           
                  /**
        * Route :  /Department
        * Method : create employee
        * Description :adding an employee
        * Access : private
        * Parameter : 
        */
    
router.post("/", AddNewDoctor)
    
               
                  /**
        * Route :  /Department/id
        * Method : Update by id
        * Description :Update the Doctor details to the department
        * Access : private
        * Parameter : id
        */
    
router.put("/:id",UpdateDoctor)
    
    
    
    
                      /**
        * Route :  /Department/id
        * Method : Update by id
        * Description :Update the Doctor details to the department
        * Access : private
        * Parameter : id
        */
    
        router.delete("/:id",DeleteDoctorById)
module.exports = router
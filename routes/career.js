const express =require("express");


const router = express.Router();


const{CareerModel} =require("../model");
const { getAllCareer, getCareerId, AddCareer, UpdateCareer, DeleteCareerId} = require("../controller/CareerController");




    /**
    * Route :  /Department
    * Method : get all doctors
    * Description : get all Doctor to the department
    * Access : private
    * Parameter : 
    */
router.get("/",getAllCareer);
    
    
           /**
        * Route :  /Department/id
        * Method : get by id
        * Description :get a Doctor to the department
        * Access : private
        * Parameter : ID
        */
router.get("/:id",getCareerId)
    
    
           
                  /**
        * Route :  /Department
        * Method : create employee
        * Description :adding an employee
        * Access : private
        * Parameter : 
        */
    
router.post("/", AddCareer)
    
               
                  /**
        * Route :  /Department/id
        * Method : Update by id
        * Description :Update the Doctor details to the department
        * Access : private
        * Parameter : id
        */
    
router.put("/:id",UpdateCareer)
    
    
    
    
                      /**
        * Route :  /Department/id
        * Method : Update by id
        * Description :Update the Doctor details to the department
        * Access : private
        * Parameter : id
        */
    
        router.delete("/:id",DeleteCareerId)
module.exports = router
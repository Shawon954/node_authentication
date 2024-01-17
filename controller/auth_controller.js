const UserAuth = require('../model/user_auth');
const bcrypt   = require('bcrypt');
const jwt      = require('jsonwebtoken');


const register = (req,res,next)=>{
    bcrypt.hash(req.body.password,10,function(err,hashedpass){
        if(err){
            res.json({
                error:err
            });
        }

        const user =  UserAuth({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedpass,
       });  
       user.save()
       .then(data =>{
           res.status(201);
           res.json({
               data,
               message:'User Registation Successful',
           })
       })
       .catch(error=>{
           res.status(500)
           res.json({
               message:"Internal Server Error",
           })
       })
    })





  

}


const login =(req,res,next)=>{

    var username  = req.body.username
    var password  = req.body.password

    UserAuth.findOne({$or:[{email:username},{phone:username}]})
    .then(user =>{
        if(user){
            bcrypt.compare(password,user.password,function(err,result){

               if(err){
                res.json({
                    error:err
                })
               } 
               
               if(result){

                const token = jwt.sign({name:user.name},"Asq(5)6T",{expiresIn:"24h"})
                res.json({
                    message:"Login Successful",
                    token

                })
               }else{
                res.json({
                    message:"Password don't match"
                })
               }
            


            })
        } else{
            res.json({
                message:"No User Found!"
            })
        }
    })
}




const getemployee = (req,res,next)=>{
    UserAuth.find({})
    .then(data => {
        res.status(200)
        res.json({
            data
        });
    })
    .catch(error => {
        res.status(500)
        res.json({
            message:'Internal Server Error'
        });
    });

}




module.exports = {register,login,getemployee};



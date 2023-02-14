const bookingData = require('../model/formData')
const formData = require('../model/formData')

exports.postData = async (req,res)=>{
    try{
        const {userName,email,mobileNumber} = req.body
        await formData.create({userName,email,mobileNumber,password})
        res.status(201).json({success:true,message:'successful'})
    }
    catch(err){
        res.status(500).json({success:false,message:`failed here ${err}`})
    }
    // .catch((err)=>{
    //     res.status(500).json({success:false,message:err})
    // })
}
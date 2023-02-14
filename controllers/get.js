const bookingData = require('../model/formData')
const formData = require('../model/formData')

exports.getData = async(req,res)=>{
    try{
        const users = await bookingData.findAll()
        res.status(200).json({success:true,message:'fectching',users:users})
    }
    catch(err){
        console.log(`unable to fetch details ${err}`)
    }
}
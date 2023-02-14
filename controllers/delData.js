const bookingData = require('../model/formData')
const formData = require('../model/formData')

exports.delData = async (req,res)=>{
    try{
        const uId = req.params.id
        console.log(`id here -->${uId}`)
    await bookingData.destroy({where:{id:uId}})
    res.status(200).json({message:'delete successfully'})
    }
    catch(err){
        console.log('unable to delete')
        res.status(500).json({message:err})
    }
}
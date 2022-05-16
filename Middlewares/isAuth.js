var jwt = require('jsonwebtoken') 
const User = require('../Models/User.js')


exports.isAuth = async(req,res,next) =>{
    try{
        const token = req.header('Authorization')
        var decoded = jwt.verify(token, process.env.privateKey)
        if(!decoded){res.status(400).send({errors: [{msg:'Token Not AUthorized'}]})}
        const user = await User.findById(decoded.id)
        req.user = user
        next()   }
    catch (errors){    
    res.status(500).send({errors : [{msg: 'Not authorized'}]})
    }
}
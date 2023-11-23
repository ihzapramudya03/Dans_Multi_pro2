const { User } = require('../models/index')
const { verifyToken } = require('../helpers/jwt')
// const { login } = require('../controllers/controller')

const authentication = async (req, res, next)=> {
    try{
        // console.log("masuk sini");
        const { access_token } = req.headers
        // console.log(access_token, "<<<<<<<<<<<<< acces token")

        if(!access_token) throw { name:'Unauthentication'}
        
        const payload = verifyToken(access_token)
        // console.log(payload, "<<<<<<<<<<<<<<<<<")

        if(!payload) throw {name:"JsonWebTokenError"}

        const user = await User.findOne({
            where: {
                id: payload.id
            }
        })
        // console.log(user)

        if(!user) throw { name: "NotFound"}

        req.additionalData = {
            userId: payload.id,
            email: payload.email,
            role: payload.role
        }
        next()
    }catch(err){

        next(err)
    }
}
module.exports = { authentication }
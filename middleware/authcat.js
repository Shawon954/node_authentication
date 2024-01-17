const jwt = require('jsonwebtoken');

const webtoken= (req,res,next)=>{
    try{

        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, "Asq(5)6T")

        req.user = decode
        next()

    }
    catch(error){
        res.json({
            message:"Auth Failed!",
        })
    }
}

module.exports = webtoken
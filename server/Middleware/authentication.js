const jwt = require('jsonwebtoken')

const authentication = (req,res,next) =>{
    
    if(! req.headers.authorization) {
        return res.send("Please Login Again");
    }

    const userToken = req.headers.authorization.split(" ")[1];

    jwt.verify(userToken , 'Tericsoft' , function(err,decoded) {
        if(err)
        {
            return res.send("Please Login again")
        }
        req.body.email = decoded.email
        req.body.userId = decoded.userId
        next()
    })
}

module.exports = authentication
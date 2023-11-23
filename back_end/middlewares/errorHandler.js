const errorHandler = async (err, req, res, next) =>{
    console.log(err);
    if (err.name === 'LoginError') {
        res.status(401).json({message: 'Wrong Username/Password '})
    } else if (err.name === 'Unauthenticated'){
        res.status(401).json({message: 'Please login first'})
    } else if (err.name === 'NotFound'){
        res.status(500).json({message: 'Not Found'})
    } else if (err.name === 'Unauthorized'){
        res.status(403).json({message: 'Forbidden'})
    } else if (err.name === 'ErrorData'){
        res.status(404).json({message: 'Error not found'})
    }else {
        res.status(500).json({message:'Internal Server Error'})
    }
}

module.exports = { errorHandler }
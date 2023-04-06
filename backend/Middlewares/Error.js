const ErrorHandler=require('../Utiles/ErrorHandlers')

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode||500,
    err.message=err.message||'Internal server error';

    //wrong postgresql id error
    if(err.name==="CastError"){
        const message =`resource not found. invalid: ${err.path}`;
        err = new ErrorHandler(message,400);
    }
    //postgresql duplicate key error
    if(err.name===11000){
        const message =`Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message,400);
    }
    
    res.status(err.statusCode).json({
        success:false,
        message: err.stack
    })
};
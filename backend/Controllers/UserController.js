const db = require("../Config/dbConnect");
const ErrorHandler = require("../Utiles/ErrorHandlers");
const catchAsyncError = require("../Middlewares/CatchAsyncError");

//Create Data (POST API)
exports.CreateData = catchAsyncError(async (req, res, next) => {
  if (!req.body) {
    return next(new ErrorHandler("Data not found", 404));
  }
  const {id,name,last,buy ,sell,volume,base_unit}=req.body;

   db.query(
    'INSERT INTO data (id,name,last,buy,sell,volume,base_unit) VALUES($1,$2,$3,$4,$5,$6,$7)',
    [id,name,last,buy ,sell,volume,base_unit],
    (err, data,fields) => {
      if (err) {
        return next(new ErrorHandler(err, 500));
      }
      res.status(200).json({
        status: "success",
        message: "data created",
      });
    }
  );
});

//Get all data GET API
exports.GetAllData=catchAsyncError(async(req,res,next)=>{
    await db.query('SELECT * FROM data',function(err,data){
        if(err){
            return next(new ErrorHandler(err))
        }
   
        res.status(200).json({
            status:'success',
            length: data?.length,
            data:data
        })
    });
})
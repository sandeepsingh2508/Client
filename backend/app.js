const express=require('express')
const app=express()
const cors=require('cors')
const ErrorMiddleWare=require('./Middlewares/Error')
const userRoutes=require('./Routes/UserRoutes')


app.use(cors());
app.use('/api',userRoutes)

app.use(ErrorMiddleWare)

module.exports=app;
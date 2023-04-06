const app=require('./app')
const dotenv=require('dotenv')
dotenv.config({path:'config/config.env'})
const port=process.env.PORT||5050

//unhandled prommis rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`sutting the server due to unhadled promise rejection`);
        process.exit(1);
});

app.listen(port,()=>{
    console.log(`server is working on http://localhost:${port}`)
})
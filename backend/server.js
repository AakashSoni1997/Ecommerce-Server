const app=require("./app")
const dotenv= require("dotenv")
// const EcommerceDb=require("./config/database")
// const cloudinary=require("cloudinary")

//Handling Uncaught Exception 
// process.on("uncaughtException",(err)=>{
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to Uncaught Exception`);
//   process.exit(1);
// })

//env path
dotenv.config({path:"backend/.env"})

//connecting to database
// EcommerceDb()

 
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

app.listen(process.env.PORT,()=>{
    console.log("server is working on 5000")
})  



// Unhandled Promise Rejection
// process.on("unhandledRejection", (err) => {
//     console.log(`Error: ${err.message}`);
//     console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
//     server.close(() => {
//       process.exit(1);
//     });
//   });



// https://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@github.com/AakashSoni1997/Ecommerce-Server.git


 



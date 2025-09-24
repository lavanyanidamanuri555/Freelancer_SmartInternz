const mongoose =require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Database Connected Sucessfully");
    }
    catch(err){
        console.log("❌ Database not connected",err);

    }
}
module.exports=connectDB;

const mongoose=require('mongoose');
const RegisterSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique: true},
    password:{type:String,required:true},
    role:{type:String,required:true},
    timestamp:{type:Date,default:Date.now}
});
const LoginSchema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    timestamp:{type:Date,default:Date.now},
});
const PostProject=mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    budget:{type:Number,required:true},
    clientId:{type:String,required:true}
});
const BidProject=mongoose.Schema({
    projectId:{type:String,required:true},
    freelancerId:{type:String,required:true},
    proposalText:{type:String,required:true},
    bidAmount:{type:Number,required:true},
    timestamp:{type:Date,default:Date.now}

});
const SelectFreelancer=mongoose.Schema({
    projectId:{type:String,required:true},
    selectedFreelancerId:{type:String,required:true},
    timestamp:{type:Date,default:Date.now}
});
const SubmitWork=mongoose.Schema({
    projectId:{type:String,required:true},
    freelancerId:{type:String,required:true},
    submissionText:{type:String,required:true},
    submissionLink:{type:String,required:true},
    timestamp:{type:Date,default:Date.now}
})
const Register_Query=mongoose.model('Register_Query',RegisterSchema);
const Login_Query=mongoose.model('Login_Query',LoginSchema);
const Post_Project=mongoose.model('Post_Project',PostProject);
const Bid_Project=mongoose.model('Bid_Project',BidProject);
const Select_Freelancer=mongoose.model('Select_Freelancer',SelectFreelancer);
const Submit_Work=mongoose.model('Submit_Work',SubmitWork);
module.exports={Register_Query,Login_Query,Post_Project,Bid_Project,Select_Freelancer,Submit_Work};
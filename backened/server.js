require('dotenv').config()
const express=require('express')
const cors=require('cors')
const bcrypt=require('bcrypt')
const connectDB=require('./db')
const {Register_Query}=require('./query')
const {Post_Project: Project} = require('./query')
const {Bid_Project:Bid}=require('./query')
const {Select_Freelancer:SelectFreelancer}=require('./query')
const {Submit_Work:SubmitWork}=require('./query')
const app=express()
app.use(cors())
app.use(express.json())
connectDB()
app.get('/',(req,res)=>{
    res.send("Working and connected");
})
app.post('/register',async (req,res)=>{
    const {name,email,password,role,timestamp}=req.body;
    console.log(req.body);
    try{
        const existingUser = await Register_Query.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new Register_Query({
            name,
            email,
            password:hashedPassword,
            role
        });
        await newUser.save()
        console.log("Data saved succesfully",req.body);
        res.json({message:"user Registered"});
        
    }catch(err){
        console.error(err);
        res.status(500).json({message:"Reg failed"});
    }
    
})

app.post('/login',async (req,res)=>{
    const{email,password}=req.body;
    try{
    const existingUser = await Register_Query.findOne({ email });
    if(!existingUser){
        return res.status(404).json({message:"user not found"})
    }
    const isMatch=await bcrypt.compare(password,existingUser.password);
     if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    res.json({
  message:"Login successful",
  role: existingUser.role,
  user: {
    _id: existingUser._id,
    name: existingUser.name,
    email: existingUser.email,
    role: existingUser.role
  }
});
}catch(err){
    res.status(500).json({ message: "Login failed" });
}
})
app.post('/projects',async(req,res)=>{
    const { title, description, budget, clientId } = req.body;
    try{
          const client = await Register_Query.findById(clientId);
        if(!client||client.role!=="client"){
            return res.status(403).json({ message: "Access denied. Only clients can post projects." });
        }
        const newProject=new Project({
            title,
            description,
            budget,
            clientId
    });
        await newProject.save();
        await newProject.save();
    res.json({ message: "Project posted successfully!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error posting project" });
  }
})

app.post('/bid',async(req,res)=>{
    const{projectId,freelancerId,proposalText,bidAmount}=req.body;
    try{
        const project=await Project.findById(projectId);
        const freelancer=await Register_Query.findById(freelancerId);
        if(!project||!freelancer ||freelancer.role !== "freelancer"){
            return res.status(403).json({ message: "Access denied" });
        }
        const newBid=new Bid({
            projectId,
            freelancerId,
            proposalText,
            bidAmount,
            
        });
        await newBid.save();
        res.json({ message: "Bid placed successfully!" });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: "Error posting bid"});
    }
})
app.post('/select-freelancer',async (req,res)=>{
    const{projectId,selectedFreelancerId}=req.body;
    try{
    const project = await Project.findById({_id:projectId});
    if (!project) {
  return res.status(404).json({ message: "Project not found" });
}
    const client=await Register_Query.findOne({_id:project.clientId});
    
    if(!client||client.role!=="client"){
         return res.status(403).json({ message: "Access denied" });
    }
    const newFreelancer=new SelectFreelancer({
        projectId,
        selectedFreelancerId
    });
    await newFreelancer.save();
    res.json({ message: "Assigned successfully!" });
}catch(err){
    console.error(err);
    res.status(500).json({ message: "Error assigning project"});
}

})
app.post('/submit-work',async (req,res)=>{
    const {projectId,freelancerId,submissionText,submissionLink}=req.body;
    try{
        const submitWork=new SubmitWork({
            projectId,
            freelancerId,
            submissionText,
            submissionLink
    });
     await submitWork.save();
     res.json({ message: "Submitted successfully!" });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: "Error assigning project"});
    }
});
app.get('/projects',async(req,res)=>{
    try{
    const projects=await Project.find();
    res.json(projects);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Error"})
    }
});
app.get('/bids/:projectId',async(req,res)=>{
    try{
        const {projectId}=req.params;
        const bids=await Bid.find({projectId});
        res.json(bids);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Error"})
    }
})
app.get('/submissions/:projectId', async(req,res)=>{
    try{
        const {projectId}=req.params;
        const submissions=await SubmitWork.find({projectId});
        res.json(submissions);
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Error"})
    }
})
app.listen(3000,()=>{
    console.log("🚀 Server running on http://localhost:3000");
})
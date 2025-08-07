const Task=require('../models/Task');

//post
exports.createTask=async (req,res)=>{
    try{
     const task=await Task.create(req.body);
     res.status(201).json({success:true,data:task});
    }catch(err){
     res.status(400).json({success:false,error:err.message});
    }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, data: tasks });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};
const express=require('express');
const router=express.Router();
const {createTask,getAllTasks,}=require('../controllers/TaskController');

router.post('/', createTask);
router.get('/',getAllTasks);
module.exports=router;
const express=require('express')
const app=express()
const dotenv=require('dotenv')
const connectDB=require('./config/db')
const taskRoutes=require('./routes/taskRoutes');
const PORT=8000;

dotenv.config();
//connect tp mongoDB
connectDB();
app.get('/', (req,res)=>{
res.send("Task  erkjngkjnApi is runnning!")
})

//middleware to parse JSON
app.use(express.json());
app.use('/api/tasks',taskRoutes);

app.listen(PORT,()=>{
 console.log(`Server running on http://localhost:${PORT}`);
})
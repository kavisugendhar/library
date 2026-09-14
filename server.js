const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Staff = require('./model/staff_info')
const Student = require('./model/student_info')
const app = express();



app.use(express.json())
app.use(cors());

const studentbulk = new mongoose.Schema({
    studentname : {
        type : String,
        required : [true,"names please"]
    }
})

const stubulk =  mongoose.model('studentbulk',studentbulk)

app.post('/kavi/library/staff' , async (req,res) => {
    try {
        const {staffname, staffid } = req.body;

        const newstaff = await Staff.create({staffname, staffid})
    

     res.status(201).json({
        success:true,
        message : "Staff Enter successful",
        data : newstaff
    })
}catch(error) {
    res.status(400).json({success:false, error: error.message})
}
})


app.post('/kavi/library/std' , async (req,res) => {
    try {
        const {studentname, studentid,bookname, authorname , deadline} = req.body;

        const newstd = await Student.create({studentname, studentid,bookname, authorname , deadline})
    

    res.status(201).json({
        success:true,
        message : "Student Enter successful",
        data : newstd
    })
}catch(error) {
    res.status(400).json({success:false, error: error.message})
}
})

app.get('/kavi/library/std/:studentid' , async(req,res) => {
    try{
        const view = await Student.find({studentid : req.params.studentid});

        res.status(200).json({
            success:true,
            message : "Details",
            data : view
        })
    }catch(error){
        res.status(400).json({success:false,error:error.message})
    }
})




app.put('/kavi/library/std-updatemany' , async(req,res) => {
    try{
    const {aname , name} = req.body;

    const result = await Student.updateMany(
      { authorname: aname },              // Filter
      { $set: { studentname: name } }    // Update operation
    );

    res.json({
      message: 'updateMany executed',
      result
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/kavi/librart/std-delete' ,async(res,req) => {
    try{
        const { name }  = req.body;

        const result = await Student.deleteMany({studentname : name })

        res.status(200).json({
            success : true,
            result
        })
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

    app.use('/kavi/lib/up',require('./routes/studentroute'));
    app.use('/kavi/library/std-update',require('./routes/studentroute2'));
    // 
    app.put('/kavi/lib' ,async (req,res) =>{
        try{
        const {Bname , Name} = req.body
        
        const result = await Student.deleteMany({authorname : Bname })
        res.status(200).json ({
            success : true,
            Result
        })
    } catch(err){
        res.status(500).json({error:err.message})
    }
    })

 app.post('/kavi/insert', async (req,res) => {
    try {
        const studentbulkdata = req.body
        if (!Array.isArray(studentbulkdata) || studentbulkdata.length === 0) {
            return res.status(400).json({ message: 'Please provide an array of documents to insert.' });
        }
        const result = await stubulk.insertMany(studentbulkdata)

        res.status(201).json({
            success:"the new bulk is enter"
        })

    }catch(error){
        res.status(400).json({
            error : error.message
        })
    }
 }) 

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {   
    console.log('Successfully connected to MongoDB');
    app.listen(PORT, () => {
         console.log(`Server is running on http://localhost:${PORT}`);
    });
    }).catch((err) => {
        console.error('Database connection failed', err.message);
        
    })


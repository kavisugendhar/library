const student = require('../model/student_info')


const updatestudent = async(req,res) => {
        try{
            const {Aname, name} = req.body

            const Result = await student.updateMany(
                {authorname : Aname},
                { $set: {studentname : name}}
            );
            res.json ({
                message : 'Updated Successfully',
                Result
            })

        }catch(err) {
            res.status(500).json ({error: err.message })
        }
    }


module.exports = {updatestudent}

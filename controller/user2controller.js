
const student = require('../model/student_info')

const student2 =  async(req,res) => {
    try{
    const {id , name} = req.body;

    const result = await student.updateMany(
      { studentid: id },              // Filter
      { $set: { studentname: name } }    // Update operation
    );

    res.json({
      message: 'updateOne executed',
      result
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {student2}
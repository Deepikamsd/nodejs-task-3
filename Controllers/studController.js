
import Student from '../Models/studSchema.js';
import Mentor from '../Models/mentSchema.js';

export const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const assignMentorToStudent = async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;
    const student = await Student.findById(studentId);

    if (!student) return res.status(404).json({ error: 'Student not found' });

    student.mentor = mentorId;
    await student.save();

    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPreviousMentorsForStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('mentor');
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student.mentor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};








// import Student from "../Models/studSchema.js";

// const createStudent = async(req,res)=>{
//     try {
//         const newStudent = new Student(req.body)
//         await newStudent.save()
//         res.status(200).json({message:"Student added successfully",data:[newStudent]})
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:"internal server error in studcreate method",data:[newStudent]})
        
//     }
// }
// export default createStudent
import Mentor from '../Models/mentSchema.js';
import Student from '../Models/studSchema.js';

export const createMentor = async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).json(mentor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const assignStudentsToMentor = async (req, res) => {
  try {
    const { mentorId, studentIds } = req.body;
    const mentor = await Mentor.findById(mentorId);

    if (!mentor) return res.status(404).json({ error: 'Mentor not found' });

    const students = await Student.updateMany(
      { _id: { $in: studentIds }, mentor: null },
      { mentor: mentorId }
    );

    mentor.students = [...mentor.students, ...studentIds];
    await mentor.save();

    res.json(mentor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getStudentsForMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id).populate('students');
    if (!mentor) return res.status(404).json({ error: 'Mentor not found' });
    res.json(mentor.students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};









// import Mentor from "../Models/mentSchema.js";

// export const createMentor = async(req,res)=>{
//     try {
//         const newMentor = new Mentor(req.body)
//         await newMentor.save()
//         res.status(200).json({message:"Mentor added successfully",data:[newMentor]})
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:"internal server error in mentcreate method"})
        
//     }
// }
import connectToDB from "@/utils/db";
import coursesModule from "@/modules/courses";
const mongoose = require("mongoose");
import teacherSchema from '@/modules/teacher'
// import {schema as teacherSchema} from '@/modules/teacher'

const handler = async (req, res) => {
  connectToDB();

  switch (req.method) {
    case "GET":
      if (req.query.q) {
        const q = req.query.q;
        const oneUserData = await coursesModule.find({ name: { $regex: q } });
        if (oneUserData) {
          res.json(oneUserData);
        } else {
          res.json("nothing is here");
        }
      } else {
        // const allUserData = await coursesModule.find({},"-__v").populate("teacher");
        const allUserData = await coursesModule.find({},"-__v");
        if (allUserData) {
          res.json(allUserData);
        } else {
          res.json("nothing is here");
        }
      }

      break;

    case "POST":
      const { name, price, teacher, file } =  JSON.parse(req.body);
      console.log(name ,price,teacher,file)
      if (name.length < 3 || teacher < 3 || !price || !file) {
        res.json("information is not complete");
      }

      const mainTeacher = await teacherSchema.findOne({_id:teacher}) 
     
     
     
     
      const CreatedCourses = coursesModule.create({
        name,
        price,
        teacher:mainTeacher,
        file,
      });


      if (CreatedCourses) {
        res.json("course added successfully ")
        res.status(202);
      } else {
        res.json("course not added something is wrong")
        res.status(402);
      }
      break;

    default:
      break;
  }
};
export default handler;

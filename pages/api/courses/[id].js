const mongoose= require('mongoose')
import connectToDB from '@/utils/db'
import courseModule from '@/modules/courses'
const handler = async (req,res)=>{
    connectToDB();
    const id = req.query.id
    switch (req.method) {
        case "GET":
            const course =await courseModule.findOne({ "_id": id })
                if(course){
                    res.json(course).status(200)
                }else{
                    res.json('course did not find').status(404)
                }                

            break;
        case "DELETE":
             const DeletedCourse = await courseModule.findOneAndDelete({ "_id" : id })

             if(DeletedCourse){
                res.json('Course deleted successfully!!').status(200)
             }else{
                res.json('Course not deleted and did not  find')
             }
             break;
             
        case "PUT":
             const {name,teacher,price,file}= req.body;

             const updatedCourse =await courseModule.findOneAndUpdate({"_id":id},{
                name,teacher,price,file
             }) 
             if(updatedCourse){
                res.json('Course updated successfully!!').status(202)
             }else{
                res.json('Course not updated some thing is wrong').status(502)
             }

        break;
        default:
            break;
    }
}
export default handler;
import connectToDB from "@/utils/db";
import coursesModule from '@/modules/courses'
const mongoose = require('mongoose')

const handler =(req , res)=>{
    connectToDB()
    switch (req.method) {
        case "GET":
            const allUserData = await coursesModule.find()
            if(allUserData){
                res.json(allUserData)
            }else{
                res.json('nothing is here')
            }
        break;
        case "POST":
               const {name,price,teacher,file}= JSON.parse(req.body);
               if(name.length < 3 || teacher < 3|| !price || !file ){
                res.json('information is not complete')
               }
               const CreatedCourses = coursesModule.create({name,price,teacher,file})
               
               if(CreatedCourses){
                    res.json('user added successfully ').status(202)
                }else{
                    res.json('user not added something is wrong').status(402)
               }
            break;

        default:
            break;
    }
}
export default handler
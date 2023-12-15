import connectToDB from "@/utils/db";
import mongoose from "mongoose";
import teacherModel from '@/modules/teacher';

const handler =async (req,res)=>{
    connectToDB()
    switch (req.method) {
        case "GET":
           const result = teacherModel.find()
           res.json({result})
            break;
        case "POST":
            const {name} =  JSON.parse(req.body) ? JSON.parse(req.body) : req.body ;
            const createdT = teacherModel.create({name});
            if(createdT){
                res.json("added .")
            }else{
                res.json("not created;")
            }
            break;

        default:
            break;
    }
}

export default handler;
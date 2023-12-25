const mongoose = require("mongoose")
import coursesModel from '@/modules/courses'


export const schema = mongoose.Schema({
    body:{
        type:String,
        require:true,
    },
    course:{
        type:mongoose.Types.ObjectId,
        ref:"Courses",
        require:true,
    },
})

const model = mongoose.models.Comments || mongoose.model("Comments",schema)

export default model;

const mongoose = require("mongoose")



export const schema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    }, 
})

const model = mongoose.models.Teacher || mongoose.model("Teacher",schema)

export default model;

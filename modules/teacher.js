const mongoose = require("mongoose")



const schema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    }, 
})

const model = mongoose.models.Teacher || mongoose.model("Teacher",schema)

export default model;

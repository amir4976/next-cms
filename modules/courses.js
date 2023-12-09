const mongoose = require("mongoose")



const schema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },price:{
        type:String,
        require:true,
    },teacher:{
        type:String,
        require:true,
    },file:{
        type:String,
        require:true,
    }
})

const model = mongoose.models.Courses || mongoose.model("Courses",schema)

export default model;

const mongoose = require('mongoose')
const connectToDB = async ()=>{
    try {
        if(mongoose.connections[0].readyState){
            return false
        }        

    await mongoose.connect("mongodb://127.0.0.1:27017/Next-Cms")
    console.log('connected baby')

    } catch (error) {
        console.log('its not sorry',error)
    }
}


export default connectToDB;
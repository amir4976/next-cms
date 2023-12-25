import connectToDB from "@/utils/db"
import commentModel from "@/modules/comments"

const handler = async (req ,res) =>{
    connectToDB();
    if(req.method === "GET"){
        const models = await commentModel.find({}).populate('course')
        if(models){
            return res.json(models) 
        }else{
            return res.json("no comment is here!!")
        }
    }
    else if(req.method === "POST"){
        try {
            const {body,course} =req.body;
            console.log(body,course)
            if(!body,!course) {
                return res.json('sorry something is wrong with the client side and props!!!!')
            }
            
            const CreatedModel = commentModel.create({body,course})
            console.log(CreatedModel)
             res.json('Created successfully ').status(200)
        } catch (error) {
            return res.json({e:error})
        }
    }
}

export default handler 
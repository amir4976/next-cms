import connectToDB from "@/utils/db";

const handler =(req,res)=>{
    connectToDB()
    res.json('yeh man every things is ok!!')
}

export default handler;
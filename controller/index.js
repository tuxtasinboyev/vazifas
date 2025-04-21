import fs from "fs"
import path from "path"

let data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "/vazifas/data/users.json"), "utf-8"));

const GET = (req, res) => {
   
   res.send(data);
};

const GET_ID=()=>{

}
const POST=(req,res)=>{

   let index = data.findIndex(l => l.id === req.body.id)

        if(index!=-1){
            res.end("Xato bu id bor")
        } else{

        data.push(req.body)

        fs.writeFileSync("vazifas/data/users.json",JSON.stringify(data,null,4))

        res.send("yozildi")
        }

}
const  DELETE=()=>{

}
 export default{
    GET,
    GET_ID,
    POST,
    DELETE
 }
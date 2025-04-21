


const GET = (req, res) => {
   let data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "/vazifas/data/users.json"), "utf-8"));
   
   res.send(data);
};

const GET_ID=()=>{

}
const POST=(req,res)=>{
   let data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "/vazifas/data/users.json"), "utf-8"));

   let index = data.findIndex(l => l.id === req.body.id)

        if(index!=-1){
            res.end("Xato bu id bor")
        } else{
    const users = JSON.parse(fs.readFileSync(path.join(process.cwd(), "/data/users.json"), "utf-8"));

        data.push(req.body)

        fs.writeFileSync("vazifas/data/users.json",JSON.stringify(data,null,4))

        res.send("yozildi")
        }

}
const  DELETE=()=>{

const DELETE = (req, res) => {
    let { id } = req.query
    const users = JSON.parse(fs.readFileSync(path.join(process.cwd(), "/data/users.json"), "utf-8"));
    const user = users.filter(user => user.id !== Number(id));
    fs.writeFileSync(path.join(process.cwd(), "/data/users.json"), JSON.stringify(user, null, 2))
}
 export default{
    GET,
    GET_ID,
    POST,
    DELETE
 }
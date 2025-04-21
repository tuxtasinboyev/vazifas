import fs from "fs"
import path from "path"
const GET = () => {

}

const GET_ID = (req, res) => {
    const { id } = req.params;

    const users = JSON.parse(fs.readFileSync(path.join(process.cwd(), "/data/users.json"), "utf-8"));

    const user = users.find(user => user.id === Number(id));

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
};
const POST = () => {

}
const DELETE = (req, res) => {
    let { id } = req.query
    const users = JSON.parse(fs.readFileSync(path.join(process.cwd(), "/data/users.json"), "utf-8"));
    const user = users.filter(user => user.id !== Number(id));
    fs.writeFileSync(path.join(process.cwd(), "/data/users.json"), JSON.stringify(user, null, 2))
}
export default {
    GET,
    GET_ID,
    POST,
    DELETE
}
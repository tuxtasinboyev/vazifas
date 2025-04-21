import fs from "fs"
import path from "path"
const GET = () => {

}

const GET_ID = (req, res) => {
    const { id } = req.params;

    const users = JSON.parse(fs.readFileSync(path.join(process.cwd(), "/data/users.json"), "uatf-8"));

    const user = users.find(user => user.id === Number(id));

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
};
const POST = () => {

}
const DELETE = () => {

}
export default {
    GET,
    GET_ID,
    POST,
    DELETE
}
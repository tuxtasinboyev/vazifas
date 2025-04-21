import {Router} from "express"
import controller from "../controller/index.js"

const router=Router()
router
    .get("/api/todos",controller.GET)
    .get("/api/todos/:id",controller.GET_ID)
    .post("/api/todos",controller.POST)
    .delete("/api/todos",controller.DELETE)
export default router

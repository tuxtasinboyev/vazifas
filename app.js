import express from "express"
import router from "./router/index.js"

const server = express()
server.use(express.json())
server.use(router)

server.listen(3050, () => console.log("server is running"))
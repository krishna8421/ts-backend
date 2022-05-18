import express, { Express } from "express"
import {config} from "dotenv"
import cors from "cors"
import router from "./router"
config()
const PORT = process.env.PORT || 8000

const createAppWithMiddleware = (): Express => {
    const app = express()
    app.use(cors({
        origin: ["http://localhost:3000"],
        credentials: true
    }))
    app.use(express.json())
    app.use("/", router)
    return app
}


const main = () => {
    try{
        const app = createAppWithMiddleware()
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}

main()
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        status: "register"
    })
})

export default router
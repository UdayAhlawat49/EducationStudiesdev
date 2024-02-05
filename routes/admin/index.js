const express = require("express")

const router =  express.Router()

router.get("/adminpage" , (req , res )=>{
    res.send("welcome")
})

module.exports = router
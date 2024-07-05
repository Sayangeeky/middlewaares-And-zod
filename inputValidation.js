const express = require('express')
const app = express()
const zod = require('zod')
app.use(express.json())

const schema = zod.array(zod.number())
app.post('/health-checkup', (req,res) => {
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    if(response.success){
        const kidneyLength = kidneys.length

    res.send(`You have ${kidneyLength} kidneys`)
    }   else {
        res.send(response)
    }
})
//global catches
app.use((err,req,res,next) => {
    res.json({
        msg: "Something went wrong!"
    })
})
app.listen(3001)
const express = require('express')

const app = express()

app.get('/health-checkup', (req,res) => {
    const username = req.headers.username
    const password = req.headers.password
    const kidneyId = req.query.kidneyId

    if(!username === 'sayan' && password === 'pass') {
        res.status(400).json({
            "msg": "Somethings up with ypour inputs"
        })
        return
    }
    if(kidneyId == 1 || kidneyId == 2){
        res.json({
            msg: "Your kidney is fine"
        })
    }
    
})

app.listen(3000, () => {
    console.log("Server is listening...");
})
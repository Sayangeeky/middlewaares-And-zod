const express = require('express')
const app = express()

function userMiddleware(req,res,next){
    if(username!= 'sayan' && password != 'pass'){
        res.status(400)/json({
            msg: "incorrect inputs!"
        })
    }   else {
        next()
    }
}

function kidneyMiddleware(req,res,next){
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg:"Incorrect inputs"
        })
    }   else {
        next()
    }
}

app,get('/health-checup', userMiddleware, kidneyMiddleware, (req,res) => {


    res.send("Your heart is healthy")
})
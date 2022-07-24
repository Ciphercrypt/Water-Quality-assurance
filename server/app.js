const express=require("express");
const bodyParser=require('body-parser');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()

const userRoutes=require('./routes/UserRoutes');
const tapRoutes=require('./routes/TapRoutes');


var jsonParser = bodyParser.json();
var urlEncoded = bodyParser.urlencoded({ extended: true });


const app=express();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))


let _response = {};
    
app.use('/api/user', userRoutes);
app.use('/api/tap', tapRoutes);


app.use((req, res, next) => {
    const error = new Error('INVALID ROUTE')
    error.status = 404
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL.replace("<password>", process.env.MONGO_PASSWORD)
, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    _response.database = "Healthy"
    console.log("Database Connected")
    console.log("server Started on PORT", PORT)
}).catch((err) => {
    _response.database = "Unhealthy"
    console.log("Error in connecting to DataBase", err.message)
})

app.use('/',(req,res)=>{
    res.status(200).json(_response)
})


app.listen(PORT, ()=>{
    _response.app = "Healthy"
})

const express = require("express");
const cors = require("cors");
const rout = require("./routes");
const app = express();

app.use(express.json());
app.use((req,res,next)=>{
    app.use(cors());
    res.header("Access-Control-Allow-Headers","*");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","*");
    next();
});
app.use(rout);
//app.use(cors());


app.listen(3333);
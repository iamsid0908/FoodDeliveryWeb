const express=require("express")
const mongoose=require("mongoose")
const app=express();
const bodyParser=require('body-parser');

const cors=require("cors");
require('dotenv').config({ path: './.env' })

mongoose.connect('mongodb+srv://milan:milan@cluster0.cpawcje.mongodb.net/?retryWrites=true&w=majority');
var db = mongoose.connection;
db.on("open",()=>{
    console.log("connected");
})
db.on("error",()=>{
    console.log("dis-connected");
})
app.use(cors());
app.use(bodyParser.json());





require("./app/routes/auth.routes")(app)
require("./app/routes/food.routes")(app)



const PORT=3001
app.listen(PORT,()=>{
    console.log("server is running on "+PORT);
})
const {json} = require("express"); 
const express =require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.enr.port || 2222;
const LOCAL_DB ="mongodb://localhost/lofty"
const online_DB = "mongodb+srv://orire:Horirenitemi@1@cluster0.1rbda.mongodb.net/lesson?retryWrites=true&w=majority"

app.use(cors());
const app = express()
app.use(express.json());

mongoose.connect(online_DB, {
    useCreateIndex:true,
    useFindAndModify: false,
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Local database is now connected....!")
});

const orire = require("../code/MVC/controller");
app.use("/", orire);

app.listen(port, () => {
    console.log(`${port}`);
});

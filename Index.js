const express =require("express");
const dotenv =require('dotenv');
// const {Doctor} = require("./department/user/books.json")

// routes
const gynecRouter= require("./routes/gynec");
const gastroRouter= require("./routes/gastro");
const orthoRouter= require("./routes/ortho");
const ENTRouter= require("./routes/ENT");
const EmergencyRouter= require("./routes/emergency");
const CrRouter = require("./routes/Career");

const DbConnection =require("./databaseconnection");

dotenv.config();


const app = express();

DbConnection();

const PORT=8082;

app.use(express.json());

// http://localhost:8082/
app.get("/", (req, res)=> {
    res.status(200).json({
        message: "sever is up an running"
    })
})

app.use("/Department/gynec",gynecRouter);
app.use("/Department/gastro",gastroRouter);
app.use("/Department/ortho",orthoRouter);
app.use("/Department/emergency",EmergencyRouter);
app.use("/Department/ent",ENTRouter);
app.use("/Career",CrRouter);



       
            

app.all("*",(req,res)=>{
    res.status(500).json({
        message: "this is not the URL"
    })
})


app.listen(PORT,() => {
    console.log(`server is up and running at port : ${PORT}`)
})
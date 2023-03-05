const exprees = require("express")
const app = exprees()
const bodyParser = require("body-parser")
var cors = require('cors')
require("dotenv").config({path:"../.env"})
const PORT = process.env.PORT;
const route = require("./routes/index")
const connectDB = require("./config/db")
connectDB(process.env.DB_URL)
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use("/",route)


app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING AT PORT ",PORT);
})
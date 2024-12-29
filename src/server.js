import express from "express";
import bodyParser from "body-parser"; // lấy tham số client sử dụng
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routers/web";
require("dotenv").config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }))

viewEngine(app)
initWebRoutes(app)

// app.use('/',initWebRoutes);

let PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    //callback
    console.log('Backend nodejs welcome is running on the port: '+ PORT)
})

import express from "express";
import bodyParser from "body-parser"; // lấy tham số client sử dụng
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routers/web";
import connectDB from "./config/connectDB";
require("dotenv").config();

let app = express();

//config app
app.use(bodyParser.json()); // middleware phân tích json từ body của request và gắn vào req.body
app.use(bodyParser.urlencoded({extended: true })) // midleware phân tích Url-encoded (dự liệu từ form HTML) và gắn vào req.body 
                                                  // extended: true cho phép phân tích các đối tượng phức tạp (nested objects)
viewEngine(app)
initWebRoutes(app)
connectDB();

// app.use('/',initWebRoutes);

let PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    //callback
    console.log('Backend nodejs welcome is running on the port: '+ PORT)
})

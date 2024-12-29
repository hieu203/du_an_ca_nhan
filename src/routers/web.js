import express from "express"
import homeController from "../controllers/homeController";
let router = express.Router();

let initRoutes=(app)=>{
    router.get('/home', homeController.getHomePage);
    router.get('/', (req,res)=>{
        res.send('hello test')
    })
    return app.use("/",router);
}

module.exports = initRoutes;
import express from "express"
import homeController from "../controllers/homeController";
let router = express.Router();

let initRoutes=(app)=>{
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCurdPage);
    router.post('/post-crud',homeController.postCURD);
    return app.use("/",router);
}

module.exports = initRoutes;
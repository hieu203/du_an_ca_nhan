import db from "../models/index";
import CRUDService from "../services/CRUDService"; 
let getHomePage= async (req,res)=>{
    try {
        let data = await db.User.findAll();  
        
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        });     
    } catch (error) {
        console.log(error)
    }
}

let getCurdPage = async(req,res)=>{
    try {
        return res.render('crud.ejs');
    } catch (error) {
        console.log(error);
    }
}

let postCURD = async(req,res)=>{
    await CRUDService.createNewUser(req.body);
    return res.send('post crud from server');
}

// Object:{
//     key: ''   ;
//     value: '' ;
// }

module.exports={
    getHomePage: getHomePage,
    getCurdPage: getCurdPage,
    postCURD: postCURD,
}
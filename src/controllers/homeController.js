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

let getCrudPage = async(req,res)=>{
    try {
        return res.render('crud.ejs');
    } catch (error) {
        console.log(error);
    }
}

let postCRUD = async(req,res)=>{
    await CRUDService.createNewUser(req.body);
    return res.send('post crud from server');
}

let displayGetCRUD = async(req, res)=>{
    let data = await CRUDService.getAllUser();
    console.log(data);
    return res.render('displayCRUD.ejs', {dataTable : data})
}

let getEditCRUD = async(req, res)=>{
    let userId = req.query.id;
    if(userId){
        let userData = await CRUDService.getUserInfoById(userId);
        console.log(userData);
        return res.render('editCRUD.ejs', {user:userData});
    }else{
        return res.send('Users not found!');
    }  
}

let putCRUD = async(req,res)=>{
    let data = req.body;
    let alluser = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', {dataTable : alluser})
}
// Object:{
//     key: ''   ;
//     value: '' ;
// }

module.exports={
    getHomePage: getHomePage,
    getCrudPage: getCrudPage,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD : getEditCRUD,
    putCRUD:putCRUD,
}
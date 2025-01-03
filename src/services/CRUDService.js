// services nhận data từ controller rồi thao tác với database
import bcrypt from 'bcryptjs';
import db from '../models/index';
import { raw } from 'body-parser';
import { where } from 'sequelize';
const salt = bcrypt.genSaltSync(10);

let createNewUser =async(data)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            })
            resolve('create a new user');
        } catch (error) {
            reject(error)
        }
    })
    
    console.log(data);
}
let hashUserPassword = (password)=>{
    return new Promise(async (resolve, reject)=>{   // dùng promise để đảm bảo hàm luôn trả ra kết quả , reslove giải quyết oke , reject từ chối (lỗi)
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    })
}

let getAllUser = ()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let users = db.User.findAll({
                raw:true,
            });
            resolve(users);
        } catch (error) {
            reject(error);
        }
    })
}

let getUserInfoById =async(userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user =await db.User.findOne({where: {id: userId} , raw:true})
            if(user){
                resolve(user)
            }else{
                resolve([]);
            }
        } catch (error) {
            reject(error)
        }
    })
}

let updateUserData=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user =await db.User.findOne({where:{id:data.id}})
            if(user){
                user.firstName= data.firstName
                user.lastName= data.lastName
                user.address= data.address
                user.phonenumber= data.phonenumber
                await user.save();
                let alluser = await db.User.findAll();
                resolve(alluser);
            }else{
                resolve();
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports ={
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData : updateUserData,
}
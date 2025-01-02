// services nhận data từ controller rồi thao tác với database
import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);

let createNewUser =async(data)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstname,
                lastName: data.lastname,
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
module.exports ={
    createNewUser: createNewUser,
}
import jwt from "jsonwebtoken"

export const generateToken = (id:string,role:string)=>{
    const token:string = jwt.sign({
        id,role
    },`${process.env.JWT_SECRET}`,{expiresIn:'1h'});
    return token;
}
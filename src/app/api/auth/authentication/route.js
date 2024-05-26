import User from "@/models/User";
import connectDB from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async(req, res, next) => {
    const {email, password} = await req.json();
     //connecting to database
     connectDB()
     // check if user exists
     try{
         const isUser = await User.findOne({email: email})
          if(isUser){
            const isUserPassword = isUser.password;
            const isUserPasswordMatch = bcrypt.compareSync(password, isUserPassword);

            if(isUserPasswordMatch){
                return new NextResponse(JSON.stringify({userData:isUser,message: "Successfully Logged in" }),{
                    status:200
                });
            }else{
                return new NextResponse(JSON.stringify({message: "Invalid credentials"}),{
                    status:400
                });
            }
          }else{
            return new NextResponse(JSON.stringify({message: "User does not exist"}),{
               status:400
            })
          }
     }catch(error){
        console.log(error)
        return new NextResponse(JSON.stringify(error), {
            status:500
     })
    }
}
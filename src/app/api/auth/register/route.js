import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";


export const POST = async (req, res, next) => {
    //get all the data required from the server
    const { username, email, password } = await req.json();
    // connection to the database
    await connectDB();
    //check if the user alreay exists
    try {
      const isUser = await User.findOne({email: email});
      if(isUser) {
        return new NextResponse(JSON.stringify({message: "User already exists"}),{
            status:400,
        });
      }
    } catch(error) {
        console.log(error) 
            return new NextResponse(JSON.stringify(error), {
                status:500,
            });
        }
    //create a new user
    try {
      //console.log data
      console.log("Received Data:", {username, email, password });
      //conect to our database
      await connectDB();
      //hash password
      const hashedPassword = bcrypt.hashSync(password, 5)
      //validate our user to the user model we built
      const newUser = new User({
        name:username,
        email,
        password: hashedPassword
      });
      //save the user and his information to the database
      await newUser.save();
      //return a response to the api after creating the new user
      return new NextResponse(JSON.stringify(newUser), {
        status:201,
      });
    } catch (error) {
        return new NextResponse(JSON.stringify(error), {
            status:500
        });
    }
};
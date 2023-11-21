import connect from "@/dbconfig/dbconfig";
import Organization from "@/models/organizationModel";
import Patient from "@/models/patientMode";
import Donor from "@/models/donorModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password, userRole } = reqBody;

    let UserSchema;
    switch (userRole) {
      case "Organization":
        UserSchema = Organization;
        break;
      case "Donor":
        UserSchema = Donor;
        break;
      case "Patient":
        UserSchema = Patient;
        break;
      default:
        return NextResponse.json({ error: "Invalid user type" }, { status: 400 });
    }

    // Check if user exists
    const user = await UserSchema.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }
    

    // Check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }
  

    // Create token data
    const tokenData = {
      id: user._id,
      email: user.email,
    };
    // Create token
    const token =await  jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });
    console.log(token,"sdsdf")

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

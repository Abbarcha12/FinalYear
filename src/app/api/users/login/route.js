import connect from "@/dbconfig/dbconfig";
import Organization from "@/models/organizationModel";
import Patient from "@/models/patientMode";
import Admin from "@/models/admin";
import Donor from "@/models/donorModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendEmail } from "@/helpers/mailer";
// import { GetDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(request) {
  try {
    await connect();

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
      case "Admin":
          UserSchema = Admin;
          break;
      default:
        return NextResponse.json(
          { error: "Invalid user type" },
          { status: 400 }
        );
    }

    // Check if user exists
    const user = await UserSchema.findOne({ email });
  
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }


    

    // Check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }
  const tokenData = {
      id: user._id,
      userRole: userRole,

    };

    // Create token
    const token = await  jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
  
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error) {
    console.error("Error in login:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


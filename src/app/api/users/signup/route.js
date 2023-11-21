import connect from "@/dbconfig/dbconfig";
import {
  NextResponse
} from "next/server";
import bcryptjs from "bcryptjs";
import Patient from "@/models/patientMode";

connect();

export async function POST(request) {
  try {
      const reqBody = await request.json();
      const {
        email,
        password
      } = reqBody;
      // Check if the request body contains the necessary fields
      if (!email || !password) {
        return NextResponse.json({
          error: "Email and password are required fields"
        }, {
          status: 400
        });
      }
      // Check if the user already exists
      const user = await Patient.findOne({
        email
      });

      if (user) {
        return NextResponse.json({
          error: "User already exists"
        }, {
          status: 400
        });
      }

      // Hash password
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      const newUser = new Patient({
        email,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();

      return NextResponse.json({
        message: "User created successfully",
        success: true,
        savedUser,
      });

    




  } catch (error) {
    return NextResponse.json({
      error: error.message
    }, {
      status: 500
    });
  }
}
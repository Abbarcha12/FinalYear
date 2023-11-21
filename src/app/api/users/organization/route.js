// pages/api/users/organization.js

import connect from "@/dbconfig/dbconfig";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import Organization from "@/models/organizationModel";

connect();

export  async function POST(request) {
  try {
    const reqBody = await request.json();
    const {
      organizationName,
      bloodBankName,
      password,
      address,
      phoneNumber,
      email,
      mission,
    } = reqBody;

    if (
      !organizationName ||
      !bloodBankName ||
      !password ||
      !address ||
      !phoneNumber ||
      !email ||
      !mission
    ) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const organizationExists = await Organization.findOne({ email });
    if (organizationExists) {
      return NextResponse.json({ error: "Email is already in use" }, { status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newOrganization = new Organization({
      organizationName,
      bloodBankName,
      password: hashedPassword,
      address,
      phoneNumber,
      email,
      mission,
    });

    const savedOrganization = await newOrganization.save();
   

    return NextResponse.json({ message: "Organization created successfully", success: true });
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json({ error: "Email is already in use" }, { status: 400 });
    }
    console.error("Error saving organization:", error);
    return NextResponse.json({ error: "An error occurred. Please try again later." }, { status: 500 });
  }
}

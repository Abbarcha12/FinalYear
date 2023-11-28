import { GetDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import Patient from "@/models/patientMode";
import Donor from "@/models/donorModel";
import Organization from "@/models/organizationModel";
import connect from "@/dbconfig/dbconfig";

connect();

export async function GET(request) {
  try {
    const Data = GetDataFromToken(request);
    const { id, userRole } = Data;
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
    const user = await UserSchema.findById(id);
    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

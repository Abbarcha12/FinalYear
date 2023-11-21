import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import Patient from "@/models/patientMode";
import Donor from "@/models/donorModel";
import Organization from "@/models/organizationModel";
import connect from "@/dbconfig/dbconfig";

connect();

export async function GET(request){

    try {
        const userId = await getDataFromToken(request);
        const user = await Patient.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}
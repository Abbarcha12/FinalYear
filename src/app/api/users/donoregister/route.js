import connect from "@/dbconfig/dbconfig";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import Donor from "@/models/donorModel";
import Patient from "@/models/patientMode";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const {
      email,
      password,
      name,
      gender,
      dateOfBirth,
      phoneNumber,
      address,
      weight,
      age,
      bloodGroup,
      city,
      lastDonationDate,
      userAccepted, // Added userAccepted field
    } = reqBody;

    if (
      !email ||
      !password ||
      !name ||
      !gender ||
      !dateOfBirth ||
      !phoneNumber ||
      !address ||
      !weight ||
      !age ||
      !bloodGroup ||
      !city ||
      !lastDonationDate
    ) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const formattedDateOfBirth = new Date(dateOfBirth);
    const formattedLastDonationDate = new Date(lastDonationDate);

    const patient = await Patient.findOne({ email });
    const donor = await Donor.findOne({ email });

    if(patient && donor){
      return NextResponse.json({error:"Email already in use"},{status:409})
    }
    else if(patient && !userAccepted) {
      // Show the message that the email is already used as a patient. Ask if the user wants to register as a donor.
      return NextResponse.json(
        {
          error: "Email is already used as a patient. Do you want to register yourself as a donor?",
        },
        { status: 400 }
      );
    } else if (donor) {
      // Email already exists in Donor collection
      return NextResponse.json({ error: "Email already in used" }, { status: 400 });
    } else {
      // Proceed with registration
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      const newDonor = new Donor({
        email,
        password: hashedPassword,
        name,
        gender,
        dateOfBirth: formattedDateOfBirth,
        phoneNumber,
        address,
        weight,
        age,
        bloodGroup,
        city,
        lastDonationDate: formattedLastDonationDate,
      });

      const savedDonor = await newDonor.save();
      console.log(savedDonor);
      
      return NextResponse.json({ message: "Donor created successfully", success: true });
    }
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json({ error: "Email is already in use" }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function GET(req) {  
  try {

    const searchCity = req.query.q;
    console.log(searchCity)
    const donors = await Donor.find({}); // Use lean() for lightweight documents
    return NextResponse.json({ success: true, data: donors });
  } catch (error) {
    console.error('Error fetching donors:', error.message);
    return NextResponse.json({ error: 'Error fetching donors' }, { status: 500 });
  }
}
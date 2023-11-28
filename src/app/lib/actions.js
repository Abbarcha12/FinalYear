"use server";

import { revalidatePath } from "next/cache";
import Donor from "@/models/donorModel";
import connect from "@/dbconfig/dbconfig";
import { redirect } from "next/navigation";
import Organization from "@/models/organizationModel";
import Patient from "@/models/patientMode";

// Adding a new Donor

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connect();
    await Donor.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/Donors");
};

export const deleteOrga = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connect();
    await Organization.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/Donors");
};
export const deletePatient = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connect();
    await Patient.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/Donors");
};

//   UpdateUser

export const updateUser = async (formData) => {
  const { id, name, email, gender, phoneNumber, address, bloodGroup } =
    Object.fromEntries(formData);
    console.log(formData)

  try {
    connect();
    const updateFields = {
      name,
      email,
      phoneNumber,
      address,
      bloodGroup,
      gender,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Donor.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/Donors");
  redirect("/dashboard/Donors");
};

// Updating Orgainzatin

export const updateOrganization = async (formData) => {
  const { id, organizationName, bloodBankName, address, phoneNumber, mission,email } =
    Object.fromEntries(formData);
    console.log(formData)

  try {
    connect();
    const updateFields = {
      organizationName,
      email,
      phoneNumber,
      address,
      bloodBankName,
      mission,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Organization.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/Organization");
  redirect("/dashboard/Organization");
};

// Updating Patient

export const updatePatient = async (formData) => {
  const { id,email } = Object.fromEntries(formData);

  try {
    connect();
    const updateFields = {
      email,
      id
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Patient.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/Patient");
  redirect("/dashboard/Patient");
};



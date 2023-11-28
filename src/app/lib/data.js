import Donor from "@/models/donorModel";
import Organization from "@/models/organizationModel";
import connect from "@/dbconfig/dbconfig";
import Patient from "@/models/patientMode";

// Fetching All Donors and Search by bloodGroup
export const fetchDonors = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5;

  try {
    connect(); // Assuming this is connecting to the database

    const count = await Donor.countDocuments({
      bloodGroup: {
        $regex: regex,
      },
    });

    const donors = await Donor.find({
      bloodGroup: {
        $regex: regex,
      },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return {
      count,
      donors,
    };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch donors!");
  }
};

// Fetching All organization
export const fetchOrganization = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5;

  try {
    connect(); // Assuming this is connecting to the database

    const count = await Organization.countDocuments({
      organizationName: {
        $regex: regex,
      },
    });

    const organization = await Organization.find({
      organizationName: {
        $regex: regex,
      },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return {
      count,
      organization,
    };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch donors!");
  }
};

//   Fetching single Donor

export const fetchUser = async (id) => {
  try {
    connect();
    const user = await Donor.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

//   Getting Organization by Id
export const getOrganization = async (id) => {
  try {
    connect();
    const Organ = await Organization.findById(id);
    return Organ;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
export const getSingleUser = async (id) => {
  try {
    connect();
    const Organ = await Patient.findById(id);
    return Organ;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
// Getting PatientALl

export const fetchPatient = async (q, page) => {
  try {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
    connect(); // Assuming this is connecting to the database

    const count = await Patient.countDocuments({
      email: {
        $regex: regex,
      },
    });

    const patient = await Patient.find({
      email: {
        $regex: regex,
      },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return {
      patient,
      count,
    };
  } catch (error) {}
};


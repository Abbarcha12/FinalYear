import Header from "@/app/components/header";
import React from "react";
import { getOrganization } from "@/app/lib/data";
import Footer from "@/app/components/footer";
import { UserContext } from "@/helpers/getDataFromAdmin";
import { getDataFromToken } from "@/helpers/getDataFromToken";
const OrganiztionalProfile = async ({ params }) => {
    const Id= getDataFromToken()
  const { id } = params;
  const Organ = await getOrganization(id);
  return (
    <div>
      <Header />
      <div className='bg-[#F9F9F9] rounded-md w-[90%] md:w-[70%] mx-auto p-3 pb-4'>
        <div className='bg-[#fff] rounded-lg w-[90%] md:w-[70%]  mx-auto shadow-lg p-4 text-[#000] '>
          <div className='flex justify-between flex-wrap'>
            <div>
              <h1 className='text-[#000] font-[900] text-[32px] '>
                {Organ.organizationName}
                {Id}
              </h1>
            </div>
            <div>
              <h1 className='text-[#000] font-[700] text-[24px] '>
              BloodBankName:{" "}
                <span className='text-[#e61d1d99]'>{Organ.bloodBankName}</span>{" "}
              </h1>
            </div>
          </div>
        </div>
         <div className="bg-[#fff] p-5 w-[90%] md:w-[70%] rounded-lg shadow-md mt-2 mx-auto  ">
         <div className='flex flex-wrap mx-auto p-4 text-[#000] mt-2 justify-between '>
          <div>Full Name :</div>
          <div>{Organ.organizationName}</div>
        </div>
        <div className='flex flex-wrap mx-auto p-4 text-[#000] mt-2 justify-between '>
          <div>Address:</div>
          <div>{Organ.address}</div>
        </div>
        <div className='flex flex-wrap mx-auto p-4 text-[#000] mt-2 justify-between '>
          <div>Phone Number</div>
          <div>{Organ.phoneNumber}</div>
        </div>
        <div className='flex flex-wrap mx-auto p-4 text-[#000] mt-2 justify-between '>
          <div>email</div>
          <div>{Organ.email}</div>
        </div>
        <div className='flex flex-wrap mx-auto p-4 text-[#000] mt-2 justify-between '>
          <div>Mission</div>
          <div>{Organ.mission}</div>
        </div>
    
         </div>
      </div>
    <div className=" mt-5">
    <Footer/>
    </div>
    </div>
  );
};

export default OrganiztionalProfile;

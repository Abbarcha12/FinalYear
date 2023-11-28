
import Header from "@/app/components/header";
import React from "react";
import { fetchUser } from "@/app/lib/data";
import Footer from "@/app/components/footer";
const Profile = async ({ params }) => {
 
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div>
      <Header />
      <div className='bg-[#F9F9F9] rounded-md w-[90%] md:w-[70%] mx-auto p-3 pb-4'>
        <div className='bg-[#fff] rounded-lg w-[90%] md:w-[70%]  mx-auto shadow-lg text-[#000] '>
          <div className='flex justify-between flex-wrap'>
            <div>
              <h1 className='text-[#000] font-[900] text-[32px] '>
                {" "}
                {user.name}
              </h1>
            </div>
            <div>
              <h1 className='text-[#000] font-[700] text-[24px] '>
                BloodGroup:{" "}
                <span className='text-[#e61d1d99]'>{user.bloodGroup}</span>{" "}
              </h1>
            </div>
          </div>
        </div>
         <div className="bg-[#fff] p-5 w-[90%] md:w-[70%] rounded-lg shadow-md mt-2 mx-auto  ">
         <div className='flex flex-wrap mx-auto text-[#000] mt-2 justify-between '>
          <div>Full Name :</div>
          <div>{user.name}</div>
        </div>
        <div className='flex flex-wrap mx-auto text-[#000] mt-2 justify-between '>
          <div>Address</div>
          <div>{user.address}</div>
        </div>
        <div className='flex flex-wrap mx-auto text-[#000] mt-2 justify-between '>
          <div>Phone Number</div>
          <div>{user.phoneNumber}</div>
        </div>
        <div className='flex flex-wrap mx-auto text-[#000] mt-2 justify-between '>
          <div>city</div>
          <div>{user.city}</div>
        </div>
        <div className='flex flex-wrap mx-auto text-[#000] mt-2 justify-between '>
          <div>bloodGroup</div>
          <div>{user.bloodGroup}</div>
        </div>
        <div className='flex flex-wrap mx-auto text-[#000] mt-2 justify-between '>
          <div>Age</div>
          <div>{user.age}</div>
        </div>
        <div className='flex flex-wrap mx-auto text-[#000] mt-2 justify-between '>
          <div>Weight</div>
          <div>{user.weight}</div>
        </div>
        <div className='flex flex-wrap mx-auto text-[#000] mt-2 justify-between '>
          <div>lastDonationDate</div>
          <div>
            {`${new Date(
              user.lastDonationDate
            ).toLocaleDateString()} ${new Date(
              user.lastDonationDate
            ).toLocaleTimeString()}`}
          </div>
        </div>
         </div>
      </div>
    <div className=" mt-5">
    <Footer/>
    </div>
    </div>
  );
};

export default Profile;

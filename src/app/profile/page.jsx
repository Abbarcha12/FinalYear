"use client";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const ProfilePage = () => {
  const [data, setData] = useState("nothing");
  const getdataDetails = async () => {
    try {
      const res = await axios.get("/api/users/profile");
      setData(res.data.data);
    } catch (error) {
      if (error.response) {
        console.error(
          "Request failed with status code:",
          error.response.status
        );
        toast.error(`Server error: ${error.response.status}`);
      } else if (error.request) {
        console.error("No response received:", error.request);
        toast.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
        toast.error("Error setting up the request");
      }
    }
  };
  return (
    <div>
      <Header />
      <div className='bg-[#F9F9F9] rounded-md w-[90%] md:w-[70%] mx-auto p-3 pb-4'>
        <div className='bg-[#fff] rounded-lg w-[90%] md:w-[70%]  mx-auto shadow-lg text-[#000] '>
          <div className='flex justify-between flex-wrap'>
            <div>
              <button
                onClick={getdataDetails}
                className='bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                GetUser Details
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <div className='bg-[#fff] p-5 w-[90%] md:w-[70%] rounded-lg shadow-md mt-2 mx-auto  '>
          <ul className='text-[#000] '>
            <li>Email: {data.email}</li>
            <li>{data.email}</li>
            <li>{data.email}</li>
            <li>{data.email}</li>
            <li>{data.email}</li>
            <li>{data.email}</li>
          </ul>
        </div>
      </div>
      <div className=' mt-5'>
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;

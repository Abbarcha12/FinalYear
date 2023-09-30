"use client";
import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { IoIosArrowForward } from "react-icons/io";

const FindBlood = () => {
  const [bloodGroup, setBlood] = useState("");
  const [toggel, settoggle] = useState(true);
  const handletoggle = (data) => {
    settoggle(!toggel);
  };
  return (
    <>
      <Header />
      <div className='container bg-white my-10 shadow-lg mx-auto shadow-[#000]-900 w-[100%] sm:w-[40%]  p-7'>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-10'>
    
          <div>
            <div className='text-center '>
              <h4 className='text-[24px] font-[600] text-[#000] '>
                Recipient Details
              </h4>
            </div>
            <div className=' mt-10 '>
              <div className='text-[18px] font-[600]  '>Blood Group</div>
              <div className='mt-3 relative w-[100%] md:w-[80%]'>
                <div className='w-[100%] md:w-[100%] '>
                  <select
                    id='blood-group'
                    name='blood-group'
                    class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md '>
                    <option value='A+' className="text-[18px] font-[600] p-1">A+</option>
                    <option value='A-' className="text-[18px] font-[600] p-1">A-</option>
                    <option value='B+' className="text-[18px] font-[600] p-1">B+</option>
                    <option value='B-' className="text-[18px] font-[600] p-1">B-</option>
                    <option value='AB+' className="text-[18px] font-[600] p-1">AB+</option>
                    <option value='AB-' className="text-[18px] font-[600] p-1">AB-</option>
                    <option value='O+' className="text-[18px] font-[600] p-1">O+</option>
                    <option value='O-' >O-</option>
                  </select>
                </div>
              </div>
            </div>
         
            <div className=' mt-10 '>
              <div className='text-[18px] font-[600]  '>city</div>
              <div className='mt-3 relative w-[100%] md:w-[80%]'>
                <div className='w-[100%] md:w-[100%] '>
                  <select
                    id='blood-group'
                    name='blood-group'
                    class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md '>
                    <option value='A+' className="text-[18px] font-[600] p-1">A+</option>
                    <option value='A-' className="text-[18px] font-[600] p-1">A-</option>
                    <option value='B+' className="text-[18px] font-[600] p-1">B+</option>
                    <option value='B-' className="text-[18px] font-[600] p-1">B-</option>
                    <option value='AB+' className="text-[18px] font-[600] p-1">AB+</option>
                    <option value='AB-' className="text-[18px] font-[600] p-1">AB-</option>
                    <option value='O+' className="text-[18px] font-[600] p-1">O+</option>
                    <option value='O-' >O-</option>
                  </select>
                </div>
              </div>
            </div>
            <div className= " flex justify-end " >
                <button className="bg-black rounded-lg shadow-lg shadow-[#000]-900 flex  justify-center mt-7  w-[130px] py-2 text-[#fff] text-[18px] font-[500] items-center"> proceed  <div className="ml-3"><IoIosArrowForward/></div></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindBlood;

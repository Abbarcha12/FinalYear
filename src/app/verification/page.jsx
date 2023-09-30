import React from "react";
import Header from "../components/header";

const Verification = () => {
  return (
    <>
      <Header />
      <div className='w-[90%] flex flex-col text-center justify-center items-center  border-gray-400 border border-gray-400-[gray]-500 md:w-[50%] mx-auto my-10 rounded-lg shadow-lg shadow-[#000]-900 p-5 '>
        <h5 className='text-[32px] font-[700] '>OTP Verification</h5>
        <p className='text-[16px] font-[400] mt-10'>
          An OTP has been sent to <br /> XXX XXX XXXX/Email
        </p>

        <form>
          <div class='flex justify-center space-x-2 my-10 px-10'>
          
            <input
              type='text'
              class='w-12 h-12 border border-gray-400 rounded-lg text-center text-3xl font-semibold focus:outline-none'
              maxlength='1'
            />
            <input
              type='text'
              class='w-12 h-12 border border-gray-400 rounded-lg text-center text-3xl font-semibold focus:outline-none'
              maxlength='1'
            />
            <input
              type='text'
              class='w-12 h-12 border border-gray-400 rounded-lg text-center text-3xl font-semibold focus:outline-none'
              maxlength='1'
            />
            <input
              type='text'
              class='w-12 h-12 border border-gray-400 rounded-lg text-center text-3xl font-semibold focus:outline-none'
              maxlength='1'
            />
          </div>
          <button
            type='submit'
            class='mt-6 px-4 py-2 bg-[#000] text-white rounded-md hover:bg-[#46052D] font-[600] focus:outline-none'>
          Verify & Proceed
          </button>
        </form>
      </div>
    </>
  );
};

export default Verification;

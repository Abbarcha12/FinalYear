"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";
import Donor from "../components/Donor";
import Organization from "../components/Organization";
const Register = () => {
  const [addClass, setaddClass] = useState(1);
  const handleAddClass = (id) => {
    setaddClass(id);
  };
  return (
    <div>
      <Header />
      <div className='container mx-auto my-10'>
        <h1 className='text-[30px] mx-5 font-[600] underline-offset-2 text-[#3C3C3C] '>Register as </h1>
        <div className='flex mx-10 mt-10 justify-center items-center'>
          <div className='flex justify-between items-center Btn '>
            <div>
              <button
                onClick={() => handleAddClass(1)}
                className={addClass === 1 ? "ButtonDonor" : "ButtonDonor1"}>
                Donor
              </button>
            </div>
            <div>
              <button
                onClick={() => handleAddClass(2)}
                className={addClass === 2 ? "ButtonDonor" : "ButtonDonor1"}>
                Organization
              </button>
            </div>
          </div>
        </div>
        <div className="my-10">
            {addClass===1 && <Donor/>}
            {addClass===2 && <Organization/>}

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;

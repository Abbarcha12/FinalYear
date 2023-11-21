"use client";
import { IoIosArrowForward } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Header from "../components/header";
import Footer from "../components/footer";
import React, { useState } from "react";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import axios from "axios";
const FindSchema = z.object({
  bloodGroup: z
    .string()
    .refine((value) =>
      ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].includes(value)
    ),
  city: z.string().min(1).max(50),
});
const FindBlood = () => {
  // const [data, setData] = useState();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  // const { register, handleSubmit, formState } = useForm({
  //   resolver: zodResolver(FindSchema),
  // });

  // const { errors } = formState;

  const handleSearch =  (e) => {
    try {
      const params = new URLSearchParams(searchParams);
      params.set("q", e.target.value);
      replace(`${pathname}?${params}`);
    } catch (error) {
      
    }
  };

  return (
    <>
      <Header />
      <div className='container mx-auto w-[80%] p-7'>
        <Toaster />
        <div className='grid grid-cols-1 sm:grid-cols-1 gap-10'>
          <div>
            <div className=' '>
              <h4 className='text-[24px] font-[600] textColor '>
                Recipient Details
              </h4>
            </div>

            <form >
              <div className='flex flex-wrap justify-between items-center'>
                {/* <div className='my-10 '>
                  <label className='text-[18px] textColor font-[500]  '>
                    Blood Group
                  </label>
                  <div className='w-[100%] md:w-[350px] '>
                    <select
                      id='blood-group'
                      {...register("bloodGroup")}
                      name='blood-group'
                      class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md '>
                      <option value='A+' className='text-[18px] font-[600] p-1'>
                        A+
                      </option>
                      <option value='A-' className='text-[18px] font-[600] p-1'>
                        A-
                      </option>
                      <option value='B+' className='text-[18px] font-[600] p-1'>
                        B+
                      </option>
                      <option value='B-' className='text-[18px] font-[600] p-1'>
                        B-
                      </option>
                      <option
                        value='AB+'
                        className='text-[18px] font-[600] p-1'>
                        AB+
                      </option>
                      <option
                        value='AB-'
                        className='text-[18px] font-[600] p-1'>
                        AB-
                      </option>
                      <option value='O+' className='text-[18px] font-[600] p-1'>
                        O+
                      </option>
                      <option value='O-'>O-</option>
                    </select>
                  </div>
                  {errors.bloodGroup && (
                    <span className='text-[#ea4c4c]'>Required !</span>
                  )}
                </div> */}

                <div className='w-[100%] md:w-[350px]'>
                  <label className='text-[18px] textColor font-[500] '>
                    city
                  </label>

                  <div className='flex flex-col'>
                    <input
                      onChange={handleSearch}
                      type='text'
                      placeholder='city'
                      className='px-3 text-[16px]  border-2 my-3 rounded-lg p-1 py-2 border-[#DADADA] focus:outline-none active:outline-none'
                    />
                    {/* {errors.city && (
                      <span className='text-[#ea4c4c]'>Required !</span>
                    )} */}
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='bg-[#B32346]  rounded-lg shadow-lg shadow-[#000]-900 flex  justify-center mt-7  w-[130px] py-2 text-[#fff] text-[18px] font-[500] items-center'>
                    proceed
                    <div className='ml-3'>
                      <IoIosArrowForward />
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindBlood;

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
const OrganizationRegister = z
  .object({
    organizationName: z.string().min(1).max(50),
    bloodBankName: z.string().min(1).max(50),
    password: z.string().min(6),
    address: z.string().min(1).max(200),
    phoneNumber: z.string().regex(/^\d{11}$/),
    email: z.string().email(),
    mission: z.string().min(1).max(200),
  })

const Organization = () => {
const router =useRouter()
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(OrganizationRegister),
  });
  const { errors } = formState;

  const onSubmit = async (formData, e) => {
    console.log(formData)
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/organization",formData);
      toast.success(response.data.message);
      router.push("/login")
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <div>
      <div className='container mx-auto'>
        <Toaster/>
        <div className='backgroundLiner  py-10 px-5'>
          <h3 className='text-[24px] px-4 font-[700] text-[#ffff]'>
            Register as Organization
          </h3>
        </div>
        <div className='w-[90%] mx-auto rounded-lg shadow-lg shadow-[#000]-900 p-5 my-10'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor='name'
                class='block mb-2 capitalize font-[400] text-[16px] text-gray-600'>
                Organization
              </label>
              <div className='flex flex-col  '>
                <input
                  {...register("organizationName")}
                  type='text'
                  placeholder='Organization Name'
                  className=' px-3 text-[16px]  w-[80%] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
                {errors.organizationName && <span className="text-[#ea4c4c]">Required !</span>}
              </div>
            </div>
            <div className='mt-7'>
              <label
                htmlFor='name'
                class='block mb-2 capitalize font-[400] text-[16px] text-gray-600'>
                blood Bank Name
              </label>
              <div className='flex flex-col  '>
                <input
                  {...register("bloodBankName")}
                  type='text'
                  placeholder='Blood Bank Name'
                  className=' px-3 text-[16px]  w-[80%] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
                {errors.bloodBankName && <span className="text-[#ea4c4c]">Required !</span>}
              </div>
            </div>
            <div>
              <label
                htmlFor='name'
                class='block mb-2 mt-2  capitalize font-[400] text-[16px] text-gray-600'>
                Organization Email
              </label>
              <div className='  '>
                <input
                  {...register("email")}
                  type='email'
                  placeholder='Organizational Email'
                  className='px-3 text-[16px]  w-[80%] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
                {errors.email && <span className="text-[#ea4c4c]">Required !</span>}
              </div>
            </div>
            
              <div className=''>
                <label
                  htmlFor='name'
                  class='block mb-2 capitalize font-[400] text-[16px] text-gray-600'>
                  password
                </label>
                
                  <input
                    {...register("password")}
                    type='password'
                    placeholder='password'
                    className='px-3 text-[16px]  w-[80%] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                  />
                  {errors.password && <span className='text-[#ea4c4c]'>at least 6 characters</span>}
                
              </div>
              
            
            <div className='my-5  flex flex-wrap justify-between '>
              <div className=''>
                <label
                  htmlFor='name'
                  class='block mb-2 capitalize font-[400] text-[16px] text-gray-600'>
                  Address
                </label>
                <div className='flex flex-wrap justify-between  '>
                  <textarea
                    {...register("address")}
                    class=' w-[80%] md:w-[450px] border rounded-md p-2 h-32 focus:ring focus:ring-[#000]-500 focus:border-[#000]-500'></textarea>
                </div>
                {errors.address && (
                  <span className='text-[#ea4c4c]'>Required !</span>
                )}
              </div>
              <div className=''>
                <label
                  htmlFor='name'
                  class='block mb-2 capitalize font-[400] text-[16px] text-gray-600'>
                  mission
                </label>
                <div className='flex flex-wrap justify-between  '>
                  <textarea
                    {...register("mission")}
                    class=' w-[80%] md:w-[450px] border rounded-md p-2 h-32 focus:ring focus:ring-[#000]-500 focus:border-[#000]-500'></textarea>
                </div>
                {errors.mission && (
                  <span className='text-[#ea4c4c]'>Required !</span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor='name'
                class='block mb-2 capitalize font-[500] text-[16px] text-gray-600'>
                Contact Number
              </label>
              <div className='  '>
                <input
                  {...register("phoneNumber")}
                  type='tel' // Use type="tel" for phone numbers
                  pattern='[0-9]{11}' // Use pattern attribute to enforce 11 digits
                  placeholder='Phone Number'
                  className='px-3 text-[16px] w-[100%]  border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
                {errors.phoneNumber && (
                  <span className='text-[#ea4c4c] my-2'>
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>
            </div>
            <div className='my-4 flex justify-end '>
              <button
                type="submit"
                className=' text-[20px] flex justify-center items-center rounded-lg bg-[#fff] shadow-2xl shadow-[#000]-900 px-7 py-2 border   '>
                Submit
                <div className='ml-3'>
                  <svg
                    width='22'
                    height='22'
                    viewBox='0 0 37 38'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M33.9167 17.5433V19C33.9148 22.4143 32.8383 25.7366 30.8478 28.4712C28.8572 31.2059 26.0593 33.2064 22.8712 34.1745C19.6832 35.1426 16.2758 35.0263 13.1573 33.8431C10.0389 32.6598 7.37638 30.473 5.56694 27.6087C3.75749 24.7444 2.89805 21.3561 3.11679 17.9492C3.33553 14.5422 4.62073 11.2992 6.78072 8.70369C8.94071 6.1082 11.8598 4.29934 15.1025 3.54689C18.3452 2.79443 21.738 3.13869 24.7746 4.52832'
                      stroke='black'
                      stroke-width='3.08333'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M33.9167 6.33337L18.5 22.1825L13.875 17.4325'
                      stroke='black'
                      stroke-width='3.08333'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Organization;

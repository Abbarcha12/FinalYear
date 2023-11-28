import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
const patientScehma = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
const Patient = () => {
  const [Data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(patientScehma),
  });
  const { errors } = formState;

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      setData(data);
      setLoading(true);
      const response = await axios.post("api/users/signup", data);
      toast.success("User Register successfully");
      router.push("/login");
    } catch (error) {
      console.error("Signup failed", error.message);
      if (error.response && error.response.status === 400) {
        toast.error("User already exists");
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className='container mx-auto'>
        <Toaster />
        <div className='backgroundLiner  py-10 px-5'>
          <h3 className='text-[24px] px-4 font-[700] text-[#ffff]'>
            Register as Patient
          </h3>
        </div>
        <div className='w-[95%] mx-auto rounded-lg shadow-lg bg-[#fff] shadow-[#000]-900 md:p-10 p:5 my-10'>
          <form onSubmit={handleSubmit(onSubmit)} className='p-5'>
            <div className='  flex flex-wrap justify-between items-center'>
              <div>
                <label
                  htmlFor='email'
                  class='block mb-2  capitalize font-[400] text-[16px]  textColor'>
                  Email
                </label>
                <div className='flex flex-wrap justify-between  '>
                  <input
                    {...register("email")}
                    type='email'
                    placeholder='Email'
                    className='px-3 text-[16px] text-[#000]   w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                  />
                </div>
                {errors.email && (
                  <span className='text-[#ea4c4c]'>Required! </span>
                )}
              </div>
              <div className=''>
                <label
                  htmlFor='password'
                  class='block mb-2 capitalize font-[400] text-[16px]  textColor'>
                  password
                </label>
                <div className='flex flex-wrap justify-between  '>
                  <input
                    {...register("password")}
                    type='password'
                    placeholder='password'
                    className='px-3 text-[16px] w-[100%] text-[#000] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                  />
                </div>
                {errors.password && (
                  <span className='text-[#ea4c4c] my-2'>Required !</span>
                )}
              </div>
            </div>

            <div className='my-4 flex justify-end '>
              <button
                type='submit'
                className=' text-[20px] flex justify-center text-[#000] items-center rounded-lg bg-[#fff] shadow-2xl shadow-[#000]-900 px-7 py-2 border   '>
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

export default Patient;

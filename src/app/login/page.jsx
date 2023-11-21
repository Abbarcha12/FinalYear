"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Footer from "../components/footer";
import React, { useEffect, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import { UserContext } from "@/helpers/userContext";
const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
  userRole: z.enum(["Patient", "Organization", "Donor"]),
});

const Login = () => {
  const [Data, setData] = useState();
  const { setIsLoggedIn } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const { errors } = formState;

  const onLogin = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", data);
      if (response.data.success) {
        toast.success("Login successful");
        router.push("/profile");
        setIsLoggedIn(true);
        
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data.error === "Invalid password") {
          toast.error("Password is incorrect");
        } else if (error.response.data.error === "User does not exist") {
          toast.error("Email is incorrect");
        } else {
          toast.error("Login failed");
        }
      } else {
        console.error("Login failed", error.message);
        toast.error("Login failed");
      }
    } finally {
      setLoading(false);
    }
  };
  const onSubmit = (data, e) => {
    setData(data);
    onLogin(data);
   
  };

  const handleLogout = () => {
    
    setIsLoggedIn(false);
  };

 
  return (
    <div>
      <Header setIsLoggedIn={setIsLoggedIn} handleLogout={handleLogout} />
      <div className=' my-2 md:my-10 container m-auto w-[80%] grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <Toaster />
        <form>
          <h5 className='text-[32px] font-[600] textColor my-10'>Login</h5>

          <div className='my-4'>
            <label
              htmlFor='name'
              class='block mb-1 capitalize font-[500] text-[16px] textColor'>
              Email
            </label>
            <div className=' '>
              <input
                type='email'
                {...register("email")}
                placeholder='Enter your Email'
                className='px-3 text-[16px]  w-[100%] md:w-[450px] border-2  rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
              />
              {errors.email && (
                <span className='text-[#ea4c4c] '>Required!</span>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor='name'
              class='block mb-1 capitalize font-[500] text-[16px] textColor'>
              Password
            </label>
            <div className=' '>
              <input
                type='password'
                {...register("password")}
                placeholder='password'
                className='px-3 text-[16px] w-[100%] md:w-[450px] border-2 my-1 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
              />
              {errors.password && (
                <span className='text-[#ea4c4c] '>
                  Required! (At least 6 charater&apso;s)
                </span>
              )}
            </div>
          </div>

          <div className='my-4'>
            <label
              htmlFor='userRole'
              className='block mb-1 capitalize font-[500] text-[16px] textColor'>
              User Role
            </label>
            <div className='flex space-x-4 items-center'>
              <div className='flex justify-center items-center'>
                <input
                  type='radio'
                  id='patient'
                  value='Patient'
                  {...register("userRole")}
                  className='h-4 w-4'
                />
                <label htmlFor='patient' className='text-gray-700 ml-3'>
                  Patient
                </label>
              </div>
              <div className='flex justify-center items-center'>
                <input
                  type='radio'
                  id='organization'
                  value='Organization'
                  {...register("userRole")}
                  className='h-4 w-4'
                />
                <label htmlFor='organization' className='text-gray-700 ml-3'>
                  Organization
                </label>
              </div>
              <div className='flex justify-center items-center'>
                <input
                  type='radio'
                  id='donor'
                  value='Donor'
                  {...register("userRole")}
                  className='h-4 w-4'
                />
                <label htmlFor='donor' className='text-gray-700 ml-3'>
                  Donor
                </label>
              </div>
            </div>
            {errors.userRole && (
              <span className='text-[#ea4c4c]'>Please select one role</span>
            )}
          </div>

          <div className='flex flex-wrap w-full space-x-5 mt-5'>
            <button
              onClick={handleSubmit(onSubmit)}
              type='submit'
              class='mt-6 px-10  py-2 bg-[#B32346] text-white rounded-md hover:bg-[#46052D] font-[600] focus:outline-none'>
              Login
            </button>
            <button
              type='submit'
              class='mt-6 px-10  py-2 bg-[#B32346] text-white rounded-md hover:bg-[#46052D] font-[600] focus:outline-none'>
              Register
            </button>
            <div></div>
          </div>
        </form>
        <div>
          <Image
            className=''
            alt=''
            src={"/images/thank.jpg"}
            height={800}
            width={500}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import styles from "./login.module.css";
import { useState } from "react";
import axios from "axios";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
  userRole: z.enum(["Patient", "Organization", "Donor", "Admin"]),
});
const LoginForm = () => {
  const [Data, setData] = useState();
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
        router.push("/dashboard");
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
  return (
    <form className={styles.form}>
      <Toaster />
      <h1>Login</h1>
      <input
        placeholder='email'
        type='email'
        name='email'
        {...register("email")}
      />
      {errors.email && <span className='text-[#ea4c4c] '>Required!</span>}
      <input
        type='password'
        placeholder='password'
        name='password'
        {...register("password")}
      />
      {errors.password && (
        <span className='text-[#ea4c4c] '>
          Required! (At least 6 charater&apso;s)
        </span>
      )}
      <div className=''>
        <div className='flex items-center align-middle '>
          <div className='mt-1'>
            <input
              type='checkbox'
              id='Admin'
              name='Admin'
              value='Admin'
              {...register("userRole")}
              className='h-4 w-4'
            />
          </div>
          <div>
            <label htmlFor='Admin' className=' text-[#ffff] ml-3'>
              Are you the Admin?
            </label>
          </div>
        </div>
        {errors.userRole && (
          <span className='text-[#ea4c4c]'>Please select one role</span>
        )}
      </div>
      <button type='submit' onClick={handleSubmit(onSubmit)}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;

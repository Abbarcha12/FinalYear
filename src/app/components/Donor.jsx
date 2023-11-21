import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CustomAlert from "./customAlert";
import axios from "axios";
import { useRouter } from "next/navigation";
import { z } from "zod";
const DonorRegister = z.object({
  name: z.string().min(1).max(50),
  gender: z.string().min(1).max(50),
  password: z.string().min(6),
  dateOfBirth: z.string().transform((str) => new Date(str)),
  phoneNumber: z.string().regex(/^\d{11}$/),
  email: z.string().email(),
  address: z.string().min(1).max(100),
  weight: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().gte(50, "weight must be 50kg")
  ),
  age: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().gte(18, "Must be 18 and above")
  ),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  city: z.string().min(1).max(50),
  lastDonationDate: z.string().transform((str) => new Date(str)),
});

const Donor = () => {
  const router = useRouter();
  
  const [showAlert, setShowAlert] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(DonorRegister),
  });
  const { errors } = formState;

  const onSubmit = async (data, e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post("/api/users/donoregister", data);
      if(response.data.message){
        toast.success(response.data.message)
        router.push('/')
      }
    } catch (error) {
      if (error.response) {
        if (
          error.response.data.error ===
          "Email is already used as a patient. Do you want to register yourself as a donor?"
        ) {
          setShowAlert(true); // Show the alert if the email is already used as a patient
        }
        else if (
          error.response.data.error ===
          "Email already in use"
        ) {
          toast.error(error.response.data.error ) // Show the alert if the email is already used as a patient
        }
         else if (
          error.response.data.error ===
          "Email already in used"
        ) {
          toast.error(error.response.data.error ) // Show the alert if the email is already used as a patient
        }
        setServerError(error.response.data.error);
      } else {
        console.error("An error occurred:", error.message);
        setServerError("An error occurred while processing your request.");
      }
    }
  };
  
  const handleConfirm = async () => {
    try {
      const dataWithUserAccepted = { ...Data, userAccepted: true };
      const response = await axios.post("/api/users/donoregister", dataWithUserAccepted);
      console.log("Data stored in database:", response.data);
      // Optionally, you can show a success message to the user using toast or any other method
      toast.success("Donor data stored successfully!");
      setShowAlert(false)
    } catch (error) {
      console.error("Error storing donor data:", error);
      // Optionally, you can show an error message to the user using toast or any other method
      toast.error("Error storing donor data. Please try again later.");
    }
  };
  
  
  return (
    <div className='container mx-auto'>
      <Toaster/>
      {showAlert && (
        <CustomAlert
          message='Email is already used. Do you want to proceed?'
          onConfirm={handleConfirm}
          onCancel={() => setShowAlert(false)}
        />
      )}
      <div className='backgroundLiner  py-10 px-5'>
        <h3 className='text-[24px] px-4 font-[700] text-[#ffff]'>
          Register as Donor
        </h3>
      </div>
      <div className='w-[95%] mx-auto rounded-lg shadow-lg shadow-[#000]-900 md:p-10 p:5 my-10'>
        <form onSubmit={handleSubmit(onSubmit)} className='p-5'>
          <div className='flex flex-wrap justify-between'>
            <div className=''>
              <label
                htmlFor='name'
                class='block mb-2 capitalize font-[400] text-[16px]  textColor'>
                Full Name
              </label>
              <div className='flex flex-col'>
                <input
                  {...register("name")}
                  type='text'
                  placeholder='Full Name'
                  className='px-3 text-[16px] w-[100%]   md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
                {errors.name && (
                  <span className='text-[#ea4c4c]'>Required !</span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor='Date of birth'
                class='block mb-2 capitalize font-[400] text-[16px]  textColor'>
                Date of birth
              </label>
              <div className='flex flex-col'>
                <input
                  {...register("dateOfBirth")}
                  type='date'
                  placeholder='Date of Birth'
                  className='px-3 text-[16px] w-[100%]   md:w-[450px] border-2  rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
                {errors.dateOfBirth && (
                  <span className='text-[#ea4c4c]'>Required !</span>
                )}
              </div>
            </div>
          </div>
          <div className='my-5  flex flex-wrap justify-between'>
            <div className=''>
              <label
                htmlFor='gender'
                class='block mb-2 capitalize font-[400] text-[16px]  textColor'>
                gender
              </label>
              <div className='flex flex-col  '>
                <input
                  {...register("gender")}
                  type='text'
                  placeholder='gender'
                  className='px-3 text-[16px] w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
                {errors.gender && (
                  <span className='text-[#ea4c4c]'>Required !</span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor='weight'
                class='block mb-2 capitalize font-[400] text-[16px]  textColor'>
                weight
              </label>
              <div className='flex flex-col  '>
                <input
                  {...register("weight")}
                  type='number'
                  placeholder='weight'
                  className='px-3 text-[16px]  w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
                {errors.weight && (
                  <span className='text-[#ea4c4c]'>
                    weight must be greater than 50kg
                  </span>
                )}
              </div>
            </div>
          </div>
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
                  className='px-3 text-[16px]   w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
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
                  className='px-3 text-[16px] w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
              </div>
              {errors.password && (
                <span className='text-[#ea4c4c] my-2'>Required !</span>
              )}
            </div>
          </div>
          <div className='my-5  flex flex-wrap justify-between'>
            <div className=''>
              <label
                htmlFor='address'
                class='block mb-2 capitalize font-[400] text-[16px]  textColor'>
                Address
              </label>
              <div className='flex flex-wrap justify-between  '>
                <textarea
                  {...register("address")}
                  class=' w-[100%] md:w-[450px] border rounded-md p-2 h-32 focus:ring focus:ring-[#000]-500 focus:border-[#000]-500'></textarea>
              </div>
              {errors.address && (
                <span className='text-[#ea4c4c]'>Required! </span>
              )}
            </div>
            <div>
              <label
                htmlFor='Age'
                class='block mb-2 my-5 capitalize font-[400] text-[16px]  textColor'>
                Age
              </label>
              <div className='flex flex-col  '>
                <input
                  {...register("age")}
                  type='number'
                  placeholder='Age'
                  className='px-3 text-[16px]  w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
                {errors.age && (
                  <span className='text-[#ea4c4c]'>
                    Required! ( Age must be 18 Year &apos;s ){" "}
                  </span>
                )}
              </div>
              <div>
                <div className=' mt-1 '>
                  <div className='text-[16px] font-[400] textColor '>
                    Blood Group
                  </div>
                  <div className='mt-3 relative w-[100%] md:w-[80%]'>
                    <div className='w-[100%] md:w-[100%] flex flex-col '>
                      <select
                        {...register("bloodGroup")}
                        id='blood-group'
                        name='blood-group'
                        class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md '>
                        <option
                          value='A+'
                          className='text-[16px] font-[600] p-1'>
                          A+
                        </option>
                        <option
                          value='A-'
                          className='text-[16px] font-[600] p-1'>
                          A-
                        </option>
                        <option
                          value='B+'
                          className='text-[16px] font-[600] p-1'>
                          B+
                        </option>
                        <option
                          value='B-'
                          className='text-[16px] font-[600] p-1'>
                          B-
                        </option>
                        <option
                          value='AB+'
                          className='text-[16px] font-[600] p-1'>
                          AB+
                        </option>
                        <option
                          value='AB-'
                          className='text-[16px] font-[600] p-1'>
                          AB-
                        </option>
                        <option
                          value='O+'
                          className='text-[16px] font-[600] p-1'>
                          O+
                        </option>
                        <option value='O-'>O-</option>
                      </select>
                      {errors?.bloodGroup && (
                        <span className='text-[#ea4c4c]'>Required !</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=''>
              <label
                htmlFor='phone number'
                class='block mb-2 capitalize font-[400] text-[16px]  textColor'>
                Phone Number
              </label>
              <div className='flex flex-wrap justify-between  '>
                <input
                  {...register("phoneNumber")}
                  type='tel' // Use type="tel" for phone numbers
                  pattern='[0-9]{11}' // Use pattern attribute to enforce 11 digits
                  placeholder='Phone Number'
                  className='px-3 text-[16px] w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
              </div>
              {errors.phoneNumber && (
                <span className='text-[#ea4c4c] my-2'>
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
          </div>
          <div className='flex flex-wrap justify-between my-3'>
            <div>
              <label
                htmlFor='name'
                class='block mb-2 capitalize fontt-[400] text-[16px]  textColor'>
                City
              </label>
              <div className='flex flex-wrap justify-between  '>
                <input
                  {...register("city")}
                  type='text'
                  placeholder='City'
                  className='px-3 text-[16px] w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
              </div>
              {errors?.city && (
                <span className='text-[#ea4c4c]'>Required !</span>
              )}
            </div>
            <div>
              <div className=''>
                <label
                  htmlFor='last Donation'
                  class='block mb-2 capitalize fontt-[500] text-[16px]  textColor'>
                  Last Donation
                </label>
                <div className='flex flex-col'>
                  <input
                    {...register("lastDonationDate")}
                    type='date'
                    placeholder='month'
                    className='px-3 text-[16px] w-[100%]  md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                  />
                  {errors?.lastDonationDate && (
                    <span className='text-[#ea4c4c]'>Required !</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className='my-4 flex justify-end '>
            <button
              type='submit'
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
  );
};

export default Donor;

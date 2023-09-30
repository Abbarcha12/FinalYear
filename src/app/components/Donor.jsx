import React from "react";

const Donor = () => {
  return (
    <div className='container mx-auto'>
      <div className='backgroundLiner  py-10 px-5'>
        <h3 className='text-[24px] px-4 font-[700] text-[#ffff]'>
          Register as Donor
        </h3>
      </div>
      <div className='w-[80%] mx-auto rounded-lg shadow-lg shadow-[#000]-900 p-5 my-10'>
        <form>
          <div>
            <label
              htmlFor='name'
              class='block mb-2 capitalize fontt-[400] text-[18px] text-gray-600'>
              Full Name
            </label>
            <div className='flex flex-wrap justify-between  '>
              <input
                type='text'
                placeholder='First Name'
                className='px-3 text-[18px]  w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
              />
              <input
                type='text'
                placeholder='Last Name'
                className=' px-3 text-[18px]  w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
              />
            </div>
          </div>
          <div className='my-5  flex flex-wrap justify-between'>
            <div className=''>
              <label
                htmlFor='name'
                class='block mb-2 capitalize fontt-[400] text-[18px] text-gray-600'>
                password
              </label>
              <div className='flex flex-wrap justify-between  '>
                <input
                  type='text'
                  placeholder='password'
                  className='px-3 text-[18px] w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='name'
                class='block mb-2 capitalize fontt-[400] text-[18px] text-gray-600'>
             Confirm  Password
              </label>
              <div className='flex flex-wrap justify-between  '>
                <input
                  type='text'
                  placeholder=' Confirm  Password'
                  className='px-3 text-[18px]  w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
              </div>
            </div>
          </div>
          <div className='my-5  flex flex-wrap justify-between'>
            <div className=''>
              <label
                htmlFor='name'
                class='block mb-2 capitalize fontt-[400] text-[18px] text-gray-600'>
                Phone Number
              </label>
              <div className='flex flex-wrap justify-between  '>
                <input
                  type='text'
                  placeholder='Phone Number'
                  className='px-3 text-[18px] w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='name'
                class='block mb-2 capitalize fontt-[400] text-[18px] text-gray-600'>
                Email
              </label>
              <div className='flex flex-wrap justify-between  '>
                <input
                  type='text'
                  placeholder='Email'
                  className='px-3 text-[18px]  w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
              </div>
            </div>
          </div>
          <div className='my-5  flex flex-wrap justify-between'>
            <div className=''>
              <label
                htmlFor='name'
                class='block mb-2 capitalize fontt-[400] text-[18px] text-gray-600'>
                Address
              </label>
              <div className='flex flex-wrap justify-between  '>
                <textarea class=' w-[100%] md:w-[450px] border rounded-md p-2 h-32 focus:ring focus:ring-[#000]-500 focus:border-[#000]-500'></textarea>
              </div>
            </div>
            <div>
              <label
                htmlFor='name'
                class='block mb-2 capitalize fontt-[400] text-[18px] text-gray-600'>
                Age
              </label>
              <div className='flex flex-wrap justify-between  '>
                <input
                  type='text'
                  placeholder='Age'
                  className='px-3 text-[18px]  w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
                />
              </div>
              <div>
                <div className=' mt-1 '>
                  <div className='text-[18px] font-[400] text-gray-700 '>
                    Blood Group
                  </div>
                  <div className='mt-3 relative w-[100%] md:w-[80%]'>
                    <div className='w-[100%] md:w-[100%] '>
                      <select
                        id='blood-group'
                        name='blood-group'
                        class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md '>
                        <option
                          value='A+'
                          className='text-[18px] font-[600] p-1'>
                          A+
                        </option>
                        <option
                          value='A-'
                          className='text-[18px] font-[600] p-1'>
                          A-
                        </option>
                        <option
                          value='B+'
                          className='text-[18px] font-[600] p-1'>
                          B+
                        </option>
                        <option
                          value='B-'
                          className='text-[18px] font-[600] p-1'>
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
                        <option
                          value='O+'
                          className='text-[18px] font-[600] p-1'>
                          O+
                        </option>
                        <option value='O-'>O-</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <label
              htmlFor='name'
              class='block mb-2 capitalize fontt-[400] text-[18px] text-gray-600'>
              City
            </label>
            <div className='flex flex-wrap justify-between  '>
              <input
                type='text'
                placeholder='City'
                className='px-3 text-[18px] w-[100%] md:w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='name'
              class='block mb-2 capitalize fontt-[500] text-[18px] text-gray-600'>
              Last Donation
            </label>
            <div className='flex flex-wrap justify-between  '>
              <input
                type='text'
                placeholder='month'
                className='px-3 text-[18px]  w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
              />
              <input
                type='text'
                placeholder='year'
                className=' px-3 text-[18px]  w-[450px] border-2 my-3 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
              />
            </div>
          </div>
          <div className='my-4 flex justify-end '>
            <button className=' text-[20px] flex justify-center items-center rounded-lg bg-[#fff] shadow-2xl shadow-[#000]-900 px-7 py-2 border   '>
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

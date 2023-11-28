"use client";
import React, { useState, useEffect } from 'react';
import Pagination from './pagenation';
import Link from 'next/link';

const AllDonors = ({ donors }) => {
  const currentDate = new Date();

  // State to store the eligibility status for each donor
  const [donorEligibility, setDonorEligibility] = useState({});
  const calculateEligibility = (lastDonationDate) => {
    const lastDonationDateObj = new Date(lastDonationDate);
    const timeDifference = currentDate - lastDonationDateObj;
    const monthsDifference = timeDifference / (1000 * 60 * 60 * 24 * 30);
    return monthsDifference <= 3;
  };
  useEffect(() => {
    // Calculate eligibility for each donor and update the state
    const eligibilityMap = {};
    donors.forEach((donor) => {
      eligibilityMap[donor._id] = calculateEligibility(donor.lastDonationDate);
    });
    setDonorEligibility(eligibilityMap);
  }, [donors]);

 
  return (
    <div className=''>
      <table className='table-auto w-full my-0 align-middle text-dark border-neutral-200 p-6'>
        <thead className='align-bottom'>
          <tr className='font-semibold text-[0.95rem] text-secondary-dark'>
            <th className='pb-3 text-[#000] text-start min-w-[100px]'>Name</th>
            <th className='pb-3 text-[#000] text-start min-w-[100px]'>BloodGroup</th>
            <th className='pb-3 text-[#000] text-start min-w-[100px]'>Age</th>
            <th className='pb-3 text-[#000] text-start min-w-[100px]'>Contact Number</th>
            <th className='pb-3 text-[#000] text-start min-w-[100px]'>City</th>
            <th className='pb-3 text-[#000] text-start min-w-[100px]'>Last Donation</th>
            <th className='pb-3 text-[#000] text-start min-w-[100px]'>Status</th>
            <th className='pb-3 text-[#000] text-center min-w-[100px]'>Action</th>

            
            
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor._id} className='border-b border-gray-300'>
              <td className='py-2 text-[#000]  '>{donor.name}</td>
              <td className='py-2 text-[#000]'>{donor.bloodGroup}</td>
              <td className='py-2 text-[#000]'>{donor.age}</td>
              <td className='py-2 text-[#000]'>{donor.phoneNumber}</td>
              <td className='py-2 text-[#000]'>{donor.city}</td>
              <td className='py-2 text-[#000]'>
                {new Date(donor.lastDonationDate).toLocaleDateString()}
              </td>
               <td className='py-2 text-[#000] '>
                {donorEligibility[donor._id] ? <div className='border rounded-lg flex justify-center border-green-500 text-[#00B300] '>Can Donate</div> : <div className='border rounded-lg flex justify-center border-red-500 text-[#FF1A40] '>Inactive</div>}
              </td>

              <td>
              <Link href={`/donors/${donor._id}`} className="flex justify-center">
                    <button className="text-[#fff] px-5 py-1 bg-[#35723f] rounded-md text-[12px] ">

                      View
                    </button>
                  </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default AllDonors;

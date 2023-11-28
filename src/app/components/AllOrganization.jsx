"use client";

import Link from "next/link";


const AllOrganization = ({ organization }) => {
 

 
  return (
    <div className=''>
      <table className='table-auto w-full my-0 align-middle text-dark border-neutral-200 p-6'>
        <thead className='align-bottom'>
          <tr className='font-semibold text-[0.95rem] text-secondary-dark'>
            <th className='pb-3 text-[#000] text-start min-w-[100px]'>organizationName</th>
            <th className='pb-3 text-[#000] text-start min-w-[100px]'>Blood BankName</th>
            <th className='pb-3 text-[#000] text-start min-w-[100px]'>phoneNumber</th>
            <th className='pb-3 text-[#000] text-start min-w-[100px]'>Address</th>
            <th className='pb-3 text-[#000] text-start min-w-[100px]'>email</th>
            <th className='pb-3 text-[#000] text-center min-w-[100px]'>Action</th>

           
        

            
          </tr>
        </thead>
        <tbody>
          {organization.map((data) => (
            <tr key={data._id} className='border-b border-gray-300'>
              <td className='py-2 text-[#000] '>{data.organizationName}</td>
              <td className='py-2 text-[#000] '>{data.bloodBankName}</td>
              <td className='py-2 text-[#000] '>{data.phoneNumber}</td>
              <td className='py-2 text-[#000] '>{data.email}</td>
              <td className='py-2 text-[#000] '>{data.address}</td>

              <td>
              <Link href={`/organization/${data._id}`} className="flex justify-center">
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

export default AllOrganization;

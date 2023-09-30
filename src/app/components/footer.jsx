import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/Bs";
const Footer = () => {
  return (
    <footer class='bg-gray-900 text-white py-6'>
      <div class='container mx-auto '>
        <div className='container flex flex-wrap justify-between p-4 border-b-2 border-[#fff]-500 underline underline-offset-2'>
          <div>
            <svg
              width='32'
              height='37'
              viewBox='0 0 32 37'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M15.9906 1L26.6031 11.0375C28.7019 13.0213 30.1315 15.5492 30.7111 18.3016C31.2906 21.0539 30.9942 23.907 29.8591 26.4999C28.7241 29.0928 26.8015 31.3092 24.3346 32.8685C21.8676 34.4278 18.9671 35.2601 16 35.2601C13.0329 35.2601 10.1324 34.4278 7.66543 32.8685C5.19848 31.3092 3.2759 29.0928 2.14087 26.4999C1.00585 23.907 0.709372 21.0539 1.28895 18.3016C1.86852 15.5492 3.29811 13.0213 5.39688 11.0375L15.9906 1Z'
                fill='white'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
          <div className='flex flex-wrap justify-between items-center '>
            <p className='text-[#fff] text-[18px] font-[400]'>
              Ready to get started?
            </p>
            <button className='ml-3 bg-[#fff] border rounded-lg text-[#000] font-[700] p-1 px-[10px]'>
              Donate
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  p-3 '>
          <div class='text-center'>
            <h3 class='text-2xl font-semibold'>Contact Us</h3>
            <Link href='#' class='mt-2'>
              Email: contact@webcarecircles.com
            </Link>
          </div>

          <div class=' text-center mt-[15px]'>
            <h3 class='text-2xl font-semibold'>Quick Links</h3>
            <ul class='mt-2'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/donor-registration'>Donor Registration</Link>
              </li>
              <li>
                <Link href='/organization-registration'>
                  Organization Registration
                </Link>
              </li>
            </ul>
          </div>

          <div className='text-center mt-8'>
            <h3 className='text-2xl font-semibold mb-4'>Follow Us</h3>
            <div className='flex justify-center space-x-4'>
              <Link href='#' className="text-2xl"  passHref>
                <BsFacebook />
              </Link>
              <Link href='#' className="text-2xl" passHref>
                <AiFillTwitterCircle />
              </Link>
              <Link href='#'className="text-2xl"  passHref>
                <AiFillInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class='text-center mt-6'>
        <p>&copy; 2023 WebCareCircles. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

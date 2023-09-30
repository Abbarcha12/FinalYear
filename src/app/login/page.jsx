import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className='w-[90%] flex flex-col  justify-center items-center border border-gray-400 border border-gray-400-[gray]-500 md:w-[50%] mx-auto my-10 rounded-lg shadow-lg shadow-[#000]-900 p-5 '>
        <h5 className='text-[32px] font-[700] my-10'>Login</h5>

        <form>
          <div className='my-4'>
            <label
              htmlFor='name'
              class='block mb-1 capitalize font-[500] text-[18px] text-gray-600'>
              Email
            </label>
            <div className=' '>
              <input
                type='text'
                placeholder='Enter your Email'
                className='px-3 text-[18px]  w-[450px] border-2  rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='name'
              class='block mb-1 capitalize font-[500] text-[18px] text-gray-600'>
              Password
            </label>
            <div className=' '>
              <input
                type='text'
                placeholder='password'
                className='px-3 text-[18px]  w-[450px] border-2 my-1 rounded-lg p-1 border-[#DADADA] focus:outline-none active:outline-none'
              />
            </div>
          </div>
          <div className='flex justify-end space-x-5 mt-5'>
            <button
              type='submit'
              class='mt-6 px-10 py-2 bg-[#000] text-white rounded-md hover:bg-[#46052D] font-[600] focus:outline-none'>
              Login
            </button>
            <Link
            href="register"
              type='submit'
              class='mt-6 px-10 py-2 bg-[#000] text-white rounded-md hover:bg-[#46052D] font-[600] focus:outline-none'>
              Register
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

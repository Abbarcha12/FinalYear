import Header from "./components/header";
import Image from "next/image";
import Footer from "./components/footer";
import "swiper/css";
import Carsoul from "./components/Carsoul";

export default function Home() {
  return (
    <main>
      <Header />
      <section className='container mx-auto'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20 p-3'>
          <div className='order-2 md:order-1'>
            <Image
            alt=""
            src={'/images/home.jpg'}
            height={500}
            width={500}
            />
          </div>
          <div className='bg-[#fff]-500 flex flex-col align-middle md:mt-9  order-1 md:order-2'>
            <h1 className='textColor font-[600] text-[30px]  '>
              Save Life Donate Blood
            </h1>
            <p className='max-w-[100%] md:max-w-[470px] '>
              Every drop counts. Your blood donation can save lives and make a
              difference in the world. Join us in this noble cause and be a hero
              today.
            </p>
            <div className='mt-7'>
              <h1 className='textColor font-[500] text-[22px]  '>
                Why Donate Blood?
              </h1>
              <ul class='list-disc px-5 text-[#3C3C3C] text-[18px] '>
                <li>One donation can save up to three lives.</li>
                <li>It&#39;s safe, quick, and easy.</li>
                <li>
                  Your contribution helps patients in need, including accident
                  victims, surgical patients, and those with chronic illnesses.
                </li>
              </ul>
            </div>
            <div className='text-end mt-[40px]'>
              <button className='rounded-lg   bg-[#B32346] shadow-lg py-3 px-2 text-white font-roboto font-[600] text-[16px]'>
                Get Blood Now
              </button>
            </div>
          </div>
        </div>
        {/* Our mission */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className=' order-1 md:order-1 bg-[#fff]-500  p-5  mt-[90px] rounded-lg'>
          <h1 className='textColor font-[700] text-[32px]  '>
            Our Mission
          </h1>
          <p className='text-[#3C3C3C]  mt-3 '>
            WebCareCircles is a website that helps people find blood donors
            easily and promotes charitable activities. It makes blood donation
            simple and connects donors with those in need. Charitable
            organizations can also use it to reach out to potential supporters.
            The goal is to use technology for good, making blood donation
            accessible and fostering a culture of giving.
          </p>
        </div>
        <div className='order-2 md:order-1 justify-center flex'>
            <Image
            alt=""
            src={'/images/mission.jpg'}
            height={400}
            width={400}
            />
          </div>
        </div>
       
        {/* Our Collaborators */}
        <div className='p-5  mt-[90px] w-[100%] '>
          <h1 className='text-[#3C3C3C] font-[700] text-[36px]  '>
            Our Collaborators
          </h1>
          <div className=''>
            <Carsoul />
          </div>
        </div>

        {/* How to Get Blood section */}
        <div>
          <div className='p-5  mt-[90px] w-[100%]'>
            <h1 className='text-[#3C3C3C] font-[700] text-[28px]  md:text-[36px] '>
              How to get Blood?
            </h1>
            <div className='container mx-auto mt-[10%]'>
              <div className='flex justify-center items-center w-[100%]'>
                <div className=''>
                  <div className='rounded-full flex  flex-col  justify-center items-center   border border-indigo-[#B32346] bg-white shadow-lg w-[250px] h-[250px]'>
                    <div>
                      <h3 className='text-[#3C3C3C] font-[700] text-[20px] '>
                        Register
                      </h3>
                    </div>
                    <div className='text-center'>
                      {" "}
                      <p class=' p-5 text-[#B32346] font-[600] text-[16px]'>
                        Sign up as a donor on WebCareCircles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' w-[100%] lg:hidden md:hidden '>
                <Image
                  src='/images/hear.png'
                  height={300}
                  width={600}
                  alt='heart'
                />
              </div>
            </div>
            <div className='container mx-auto '>
              <div className='grid sm:grid-flow-cols-1  md:grid-cols-3 lg:grid-flow-cols-3'>
                <div className='flex  justify-center md:justify-end'>
                  <div className='rounded-full flex  flex-col  justify-center items-center      border border-indigo-[#B32346] bg-white shadow-lg w-[250px] h-[250px]'>
                    <div>
                      <h3 className='text-[#3C3C3C] font-[700] text-[20px] '>
                        Search
                      </h3>
                    </div>
                    <div className='text-center'>
                      {" "}
                      <p class=' p-5 text-[#B32346] font-[600] text-[16px]'>
                        Look for nearby donors with the blood type you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=' w-[100%] '>
                  <Image
                    src='/images/hear.png'
                    height={300}
                    width={600}
                    alt='heart'
                  />
                </div>
                <div className='flex  justify-center md:justify-start'>
                  <div className='rounded-full flex  flex-col  justify-center items-center   border border-indigo-[#B32346] bg-white shadow-lg w-[250px] h-[250px]'>
                    <div>
                      <h3 className='text-[#3C3C3C] font-[700] text-[20px] '>
                        Connect
                      </h3>
                    </div>
                    <div className='text-center'>
                      <p class=' p-5 text-[#B32346] font-[600] text-[16px]'>
                        Contact the donor and arrange for the blood donation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </main>
  );
}

import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import HeroImage from "../../../public/images/hero2.png";
import StoryImage from "../../../public/images/story.png";

const About = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className='w-[80%] mx-auto  md:mt-[70px] '>
        <div className='grid grid-cols-1   md:grid-cols-2 items-center'>
          <div className=' mb-2 order-2 md:order-1 '>
            <Image src={HeroImage} width={500} height={500} alt='Hero image' />
          </div>
          <div className='order-1 md:order-2'>
            <h1 className='text-2xl textColor font-semibold mb-1'>
              About WebCareCircles
            </h1>
            <p className='mb-8  '>
              WebCareCircle is a digital platform with a mission to make a
              positive impact on society by connecting blood donors and
              charitable organizations. We believe in the power of technology to
              simplify the blood donation process and foster collaboration in
              the world of charity.
            </p>
          </div>
        </div>
      </section>
      {/* Our stroy section */}
      <section className='w-[80%]  mx-auto  md:mt-[70px] '>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
          <div>
            <h1 className='text-2xl textColor font-semibold mb-2'>Our Story</h1>
            <div className='mb-8  '>
              <ul className='list-disc  '>
                <li className='mb-2'>
                  WebCareCircles started with a mission to simplify blood
                  donation and charitable support. We believe in connecting
                  those who want to help with those in need, making it easier to
                  save lives and contribute to meaningful causes.
                </li>
                <li className='mb-2'>
                  Our journey began with a vision to create a user-friendly
                  platform that connects blood donors and charitable
                  organizations. Together, were building a compassionate
                  community that strengthens communities and enhances lives.
                </li>
                <li className='mb-2'>
                  Join us in this mission, and let &apos;s make a positive
                  impact together.
                </li>
              </ul>
            </div>
          </div>
          <div className='flex justify-center '>
            <Image src={StoryImage} width={500} height={600} alt='Hero image' />
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mx-auto w-[85%]'>
      <div className='order-2 md:order-1 justify-center flex'>
          <Image alt='' src={"/images/our.jpg"} height={400} width={500} />
        </div>
        <div className=' order-1 md:order-1 bg-[#fff]-500  p-5  mt-[90px] rounded-lg'>
          <h1 className='textColor font-[700] text-[32px]  '>
            Our Vision and Mission
          </h1>
          <p className='mb-4'>
            Our vision at WebCareCircles is to create a world where every drop
            of blood counts and every act of charity makes a difference. We are
            committed to harnessing the power of technology to save lives and
            build stronger, more compassionate communities.
          </p>
          <p>
            Our mission is to connect blood donors with those in need and
            provide charitable organizations with the support they require. We
            aim to ensure that no one faces medical emergencies or hardship
            alone.
          </p>
        </div>
        
      </div>
{/* Why Choose WebCareCircles Section */}
<div className="my-8 container mx-auto w-[80%]">
            <h2 className="text-[32px] textColor font-[700] mb-4">Why Choose WebCareCircles?</h2>
            <p className="mb-4">
              WebCareCircles stands out as a reliable and user-friendly platform for blood donation and charitable networks for several reasons. We offer:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Quick and easy registration for blood donors.</li>
              <li>Efficient search for specific blood types.</li>
              <li>Seamless collaboration between donors and charitable organizations.</li>
              <li>Real-time updates on charitable events and opportunities.</li>
            </ul>
            <p>
              Join us on our mission to save lives and make the world a better place.
            </p>
          </div>

        
      <Footer />
    </>
  );
};

export default About;

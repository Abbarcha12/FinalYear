import Footer from "../components/footer";
import Header from "../components/header";

const About = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section
        className=' bg-cover h-[200px] md:h-[300px] relative  '
        style={{ backgroundImage: `url(/images/aboutbanner.jpg)` }}>
       
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className=' inset-0 flex  text-[54px] textColor font-[700] absolute left-[5%] md:left-[9%] top-[10%] '>

Who are we ?
</h1>
        
      </section>
      {/* who we are section */}
      <section className="w-[80%] mx-auto my-10 ">
        <div className='grid grid-cols-2 my-10'>
          <div>
            <p className="  text-[16px] font-[400] ">WHO WE ARE </p>
               <p className=" text-[22px] textColor font-[600] my-1">Ways to help</p>
          </div>
          <div></div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

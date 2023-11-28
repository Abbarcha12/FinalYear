
import { IoIosArrowForward } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import AllDonors from "../components/AllDonors";
import Header from "../components/header";
import Footer from "../components/footer";
import Search from "../components/search";
import { fetchDonors } from "../lib/data";
import Pagination from "../components/pagenation";


const FindBlood = async ({searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
 const {count,donors}= await fetchDonors(q,page)

  return (
    < >
      <Header />
      <div>
        <Search
          title="Blood Group"
          placeholder="Blood group..."
        />
      </div>
      

      <div className='container w-[85%] pb-5  mx-auto rounded-lg border p-2 border-stone-200 bg-[#ffffff]'><AllDonors  donors={donors} />
      <div className="p-2">
         <div className="p-4"><Pagination count={count}/>

      </div>
      </div>
      </div>
  <div className="mt-10">
        
  <Footer />
  </div>
    </>
  );
};

export default FindBlood;

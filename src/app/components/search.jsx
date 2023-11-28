"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { useDebouncedCallback } from "use-debounce";


const  Search = ({title,placeholder}) => {
      const searchParams = useSearchParams();
      const pathname = usePathname();
      const { replace } = useRouter();

    
      const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams);
    
        params.set("page", 1);
    
        if (e.target.value) {
          e.target.value.length > 1 && params.set("q", e.target.value);
        } else {
          params.delete("q");
        }
        replace(`${pathname}?${params}`);
      }, 300);

  return (
    <>
      <div className='container mx-auto w-[90%] p-7'>
        <div className='grid grid-cols-1 sm:grid-cols-1 gap-10'>
          <div>
            <form>
              <div className='flex flex-wrap justify-between items-center'>
                <div className='w-[100%] md:w-[350px]'>
                  <label className='text-[16px] textColor font-[500] '>
                   {title}
                  </label>

                  <div className='flex flex-col'>
                    <input
                      onChange={handleSearch}
                      defaultValue={searchParams.get('query')?.toString()}
                      type='text'
                      placeholder={placeholder}
                      className='px-3 text-[16px] text-[#000] border-2 my-3 rounded-lg p-1 py-2 border-[#DADADA] focus:outline-none active:outline-none'
                    />
                  </div>
                </div>
               
                <div>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Search;

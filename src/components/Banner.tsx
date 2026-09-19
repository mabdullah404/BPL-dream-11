import BannerPng from "../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="bg-[#1E293B] max-w-7xl mx-auto sm:px-6 lg:px-8 flex items-center rounded-2xl h-[545px] justify-center  px-6  mt-6 ">

      <div className="items-center justify-center">
  
          <div className="items-center justify-center flex">
            <img src={BannerPng} alt="" />
          </div>
    
          <h1 className="text-[40px] text-white my-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="flex justify-center text-white my-4">Beyond Boundaries Beyond Limits</p>
   
         <div  className="flex justify-center ">

             <button className="btn border-[#E1F829] shadow-none bg-[#E1F829] rounded-2xl"> Claim Free Credit </button>
         </div>
      
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import BlockCard from "../components/BlockCard";
import zigzag from '../assets/zigzag-yellow2.svg'
import zigzagBlue from '../assets/zigzag-blue-2.svg'


const RecentBlocks = () => {
  return (
      <div className="relative py-20  bg-light">

          <img className="absolute top-0 md:-top-8 right-0 w-20 sm:w-36 md:w-40" src={ zigzag } alt="" />  
          <img className="absolute bottom-20 md:-bottom-6 left-0 w-36 md:w-56" src={ zigzagBlue } alt="" />  

      <h2 className="text-4xl md:text-5xl text-center font-bold">
        Recent <span className="text-primary">Blocks</span>
      </h2>

      <div className="section-width pt-10 md:pt-20 flex flex-wrap justify-center gap-10">
        {/* Card */}
        <BlockCard />
        <BlockCard />
        <BlockCard />
          </div>
          
          <div className="text-center pt-20">
          <button className="px-12 md:px-16 py-2 md:py-4 bg-secondary rounded-md text-xl md:text-2xl font-bold text-white cursor-pointer">
              View More
            </button>
         </div>
    </div>
  );
};

export default RecentBlocks;

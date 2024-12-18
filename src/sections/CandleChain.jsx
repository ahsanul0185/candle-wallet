import React from "react";
import img_cone from "../assets/cone.svg";
import pentagonMasked from "../assets/pentagon-masked.svg";
import angleRight from "../assets/angle-right.svg";

const CandleChain = () => {
  return (
    <div className="bg-light pb-20">
      <div className="section-width">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 pb-6">
          <img className="size-64" src={img_cone} alt="" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#323638] pb-10">
            Candle chain is <br />
            one of the <span className="text-primary">best EVM</span> based{" "}
            <br />
            scaling platform available!
          </h2>
        </div>

        <div className="flex justify-center items-center gap-5 flex-wrap">
          <div className="relative w-full sm:w-56 px-3 py-8 rounded-md bg-gradient-to-br from-[#20419A] to-[#2D59D0] text-white text-center">
            <h2 className="font-bold text-xl">Total Blocks</h2>
            <h1 className="font-bold text-4xl">1546435</h1>
            <p className="font-light">Blocks</p>
            <img
              className="absolute -bottom-14 -right-10 w-36"
              src={pentagonMasked}
              alt=""
            />
          </div>

          <div className="relative w-full sm:w-56 px-3 py-8 rounded-md bg-gradient-to-br from-[#4366B0] to-[#4BBBEB] text-white text-center">
            <h2 className="font-bold text-xl">Avg Block Time</h2>
            <h1 className="font-bold text-4xl">7.142665</h1>
            <p className="font-light">Seconds</p>
            <img
              className="absolute -bottom-14 -right-10 w-36"
              src={pentagonMasked}
              alt=""
            />
          </div>
          <div className="relative w-full sm:w-56 px-3 py-8 mb-10 sm:mb-0 rounded-md bg-gradient-to-br from-[#4BBBEB] to-[#74D5FF] text-white text-center">
            <h2 className="font-bold text-xl">Total Transaction</h2>
            <h1 className="font-bold text-4xl">56419</h1>
            <p className="font-light">from first 171030 blocks</p>

            <button className="absolute font-bold text-black w-full left-5 -bottom-10 flex items-center gap-2">
              Crawl Transactions{" "}
              <img className="size-7" src={angleRight} alt="" />
            </button>
            <img
              className="absolute -bottom-14 -right-10 w-36"
              src={pentagonMasked}
              alt=""
            />
          </div>
          <div className="relative w-full sm:w-56 px-3 py-8 rounded-md bg-gradient-to-br from-[#FDC15C] to-[#EFD199] text-white text-center">
            <h2 className="font-bold text-xl">Gas Price</h2>
            <h1 className="font-bold text-4xl">0.00</h1>
            <p className="font-light">Dollars</p>
            <img
              className="absolute -bottom-14 -right-10 w-36 backdrop-filter"
              src={pentagonMasked}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandleChain;

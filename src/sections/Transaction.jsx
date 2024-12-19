import React from "react";
import topCurve from "../assets/curve-transaction-top.svg";
import pentagon from "../assets/pentagon.svg";
import zigzag1 from "../assets/zigzag-yellow-small.svg";
import shapeBridge from "../assets/shape-bridge-2.svg";
import zigzag2 from "../assets/zigzag-yellow-3.svg";
import TransactionCard from "../components/TransactionCard";
import bottomCurve from "../assets/candle-wallet-bottom-curve.svg";

const Transaction = () => {
  return (
    <div className="bg-light overflow-x-clip">
      <div className="relative bg-primary z-0">
        <img className="w-full" src={topCurve} alt="" />
        {/* Assets */}
        <img
          className="absolute w-24 right-0 md:right-20 top-56 rotate-45 [mask-image:linear-gradient(to_top,_black,_transparent)]"
          src={pentagon}
          alt=""
        />
        <img
          className="absolute hidden lg:block w-52 right-56 top-[350px]"
          src={zigzag1}
          alt=""
        />
        <img
          className="absolute w-52 -left-20 top-72 rotate-12 -z-10 [mask-image:linear-gradient(to_top,_black,_transparent)]"
          src={pentagon}
          alt=""
        />
        <img
          className="absolute w-44 md:w-52 right-0 top-[850px] -z-10"
          src={shapeBridge}
          alt=""
        />
        <img
          className="absolute w-40 md:w-52 -z-10 left-0 top-[1350px]"
          src={zigzag2}
          alt=""
        />
        <img
          className="absolute w-56 md:w-96 -right-20 bottom-12 rotate-12 -z-10 [mask-image:linear-gradient(to_top,_black,_transparent)]"
          src={pentagon}
          alt=""
        />

        <div className="section-width py-20">
          {/* Section title text */}
          <div className="text-center text-white">
            <h2 className="text-4xl">Check out our recent</h2>
            <h2 className="text-5xl font-bold mt-5">Transactions</h2>
          </div>

          {/* Transaction Cards */}
          <div className="pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 z-10">
            <div className="flex flex-col gap-10 md:gap-20">
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
            </div>
            <div className="flex flex-col gap-10 md:gap-20 md:mt-20">
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
            </div>
          </div>
          
          <div className="text-center pt-20">
            <button className="px-12 md:px-16 py-2 md:py-4 bg-secondary rounded-md text-xl md:text-2xl font-bold text-white cursor-pointer">
              View More
            </button>
          </div>
        </div>
      </div>
      <img className="w-full -z-20" src={bottomCurve} alt="" />
    </div>
  );
};

export default Transaction;

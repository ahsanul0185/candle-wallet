import React from "react";
import angleRight from "../assets/angle-right.svg";

const CandleWalletCard = ({ icon, title, description }) => {
  return (
    <div className="relative flex flex-col sm:flex-row items-start gap-5 bg-gradient-to-bl from-[#478CCA80] to-[#4BB7E880] rounded-md px-8 sm:pl-12 sm:pr-16 pb-10 pt-4 sm:py-6">
      <img className="w-14 pt-4" src={icon} alt="" />
      <div>
              <h2 className="text-white text-2xl font-bold">{ title}</h2>
        <p className="text-white font-light text-xl">
                  {description }
        </p>
        <img
          className="absolute bottom-4 right-4 size-10"
          src={angleRight}
          alt=""
        />
      </div>
    </div>
  );
};

export default CandleWalletCard;

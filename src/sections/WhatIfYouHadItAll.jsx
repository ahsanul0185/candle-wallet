import React from "react";
import icon_fast from "../assets/icons/fast.svg";
import icon_gas from "../assets/icons/gas.svg";
import icon_community from "../assets/icons/community.svg";
import icon_leaf from "../assets/icons/leaf.svg";
import icon_secure from "../assets/icons/secure.svg";
import icon_star from "../assets/icons/star.svg";
import zigzagBlue from "../assets/zigzag-blue.svg";
import Benifit from "../components/Benifit";

const WhatIfYouHadItAll = () => {
  return (
    <div className="relative bg-light pt-10 pb-28">
      {/* Assets */}
      <img
        className="absolute bottom-0 right-0 w-44 md:w-56"
        src={zigzagBlue}
        alt=""
      />

      <h2 className="text-3xl md:text-5xl text-center font-bold">
        What if you <span className="text-primary">had it all</span>?
      </h2>

      <div className="section-width px-10 lg:w-3/4 flex flex-col md:flex-row justify-center gap-16 py-20">
        {/* ---Column 1--- */}
        <div className="flex flex-col gap-10">
          <Benifit
            icon={icon_fast}
            title="Fast & Scalable"
            description="Candle believes in Web3 for all. It is a decentralised EVM based
              scaling platform that enables"
          />
          <hr className="border-t-2 border-[#D9D9D9] w-[95%] mx-auto" />
          <Benifit
            icon={icon_secure}
            title="Secure"
            description="Candle believes in Web3 for all. It is a decentralised EVM based
              scaling platform that enables"
          />
          <hr className="border-t-2 border-[#D9D9D9] w-[95%] mx-auto" />
          <Benifit
            icon={icon_leaf}
            title="Eco-Friendly"
            description="Candle believes in Web3 for all. It is a decentralised EVM based
              scaling platform that enables"
          />
        </div>

        {/* ---Column 1--- */}
        <div className="flex flex-col gap-10">
          <Benifit
            icon={icon_gas}
            title="Zero-to-Low Gas Fees"
            description="Candle believes in Web3 for all. It is a decentralised EVM based
              scaling platform that enables"
          />
          <hr className="border-t-2 border-[#D9D9D9] w-[95%] mx-auto" />
          <Benifit
            icon={icon_star}
            title="Decentralized"
            description="Candle believes in Web3 for all. It is a decentralised EVM based
              scaling platform that enables"
          />
          <hr className="border-t-2 border-[#D9D9D9] w-[95%] mx-auto" />
          <Benifit
            icon={icon_community}
            title="Community Governed"
            description="Candle believes in Web3 for all. It is a decentralised EVM based
              scaling platform that enables"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIfYouHadItAll;

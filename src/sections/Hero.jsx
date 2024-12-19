import React from "react";
import bottomCurve from "../assets/hero-bottom-curve.svg";
import arrowDown from "../assets/arrow-down.svg";
import angleRight from "../assets/angle-right.svg";
import pentagon from "../assets/pentagon.svg";
import pentagon2 from "../assets/hero-pentagon-2.svg";
import flag from "../assets/flag.png";
import zigzag from "../assets/zigzag.svg";

const Hero = () => {
  return (
    <section className="relative pt-40 bg-primary overflow-clip z-0">
      <img
        className="absolute top-32 w-36 md:w-fit right-1/3 scale-90"
        src={pentagon}
        alt=""
      />
      <img
        className="absolute top-60 md:top-52 w-52 md:w-fit -right-10 scale-75 -z-10"
        src={pentagon2}
        alt=""
      />
      <img
        className="absolute top-28 w-28 md:w-fit right-3 md:right-24 scale-75"
        src={flag}
        alt=""
      />
      <img
        className="absolute w-44 lg:w-80 bottom-20 sm:bottom-28 lg:bottom-44 right-12"
        src={zigzag}
        alt=""
      />

      <div className="section-width text-center">
        <h2 className="text-4xl md:text-6xl pt-40 pb-10 font-bold font-lato leading-12 text-white text-center z-20">
          A scaleable, efficent place <br />
          for developers to build <br />
          on web3.
        </h2>

        <button className="px-12 md:px-28 py-2 md:py-5 bg-secondary duration-150 hover:bg-secondary/85 rounded-md text-2xl font-bold text-white cursor-pointer">
          Let's Get Started
        </button>

        <p className="text-base md:text-xl font-thin text-white mt-3">
          By signing up, you agree to our{" "}
          <a href="#" className="italic underline">
            terms of service.
          </a>
        </p>

        <div className="flex flex-col items-center pt-10 pb-36 md:pb-20 justify-center">
          <img className="size-10 md:size-14" src={arrowDown} alt="" />
          <p className="text-white text-2xl md:text-3xl py-10 max-w-[900px]">
            Candle believes in Web3 for all. Candle is a decentralised EVM based
            scaling platform that enables developers to build scalable
            user-friendly dApps with zero-to-low transaction fees without ever
            sacrificing on security.
          </p>

          <button className="flex items-center justify-center gap-5 bg-primaryDeep duration-150 hover:bg-primaryDeep/70 group rounded-md text-white text-lg md:text-2xl font-bold px-4 md:px-8 py-3">
            Candle Mainnet is open for developers
            <img className="size-10 duration-150 group-hover:translate-x-2" src={angleRight} alt="" />
          </button>
        </div>
      </div>

      <img className="w-full select-none" src={bottomCurve} alt="" />
    </section>
  );
};

export default Hero;

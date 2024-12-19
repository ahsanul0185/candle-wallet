import React from "react";
import logo_tenderly from "../assets/logo-tenderly.svg";
import logo_1 from "../assets/chosen_logo_1.svg";
import logo_2 from "../assets/chosen_logo_2.svg";
import logo_3 from "../assets/chosen_logo_3.svg";
import logo_4 from "../assets/chosen_logo_4.svg";
import logo_5 from "../assets/chosen_logo_5.svg";

const ChosenSolution = () => {
  return (
    <section className="bg-light">
      <div className="section-width">
        <hr className="border-t-2 border-[#D9D9D9]" />
        <div className="py-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#323638]">
              The Chosen Solution <br />
              for <span className="text-[#21429b]">Scaling Ethereum</span>
            </h1>
            <img className="w-44 md:w-56 lg:w-96" src={logo_tenderly} alt="" />
          </div>

          <div className="flex gap-5 pt-10 flex-wrap md:flex-nowrap justify-center">
            <img className="size-20 md:size-28" src={logo_1} alt="" />
            <img className="size-20 md:size-28" src={logo_2} alt="" />
            <img className="size-20 md:size-28" src={logo_3} alt="" />
            <img className="size-20 md:size-28" src={logo_4} alt="" />
            <img className="size-20 md:size-28" src={logo_5} alt="" />
            <div className="shrink-0 text-white text-base md:text-2xl size-20 md:size-28 rounded-full bg-secondary font-bold grid place-items-center">
              View <br /> More
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChosenSolution;

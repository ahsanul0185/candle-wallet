import React from "react";
import zigzag from "../assets/zigzag-yellow-small.svg";
import pentagon from "../assets/pentagon.svg";
import topCurve from "../assets/candle-wallet-top-curve.svg";
import Newsletter from "../components/Newsletter";
import {
  RiGithubFill,
  RiGithubLine,
  RiInstagramLine,
  RiTwitterFill,
  RiTwitterLine,
} from "@remixicon/react";

const Footer = () => {
  return (
    <div className="bg-primary relative z-0 overflow-clip">
      <img className="w-full" src={topCurve} alt="" />
      <img
        className="absolute w-56 md:w-80 -right-20 bottom-36 rotate-12 -z-10 [mask-image:linear-gradient(to_top,_black,_transparent)]"
        src={pentagon}
        alt=""
      />
      <div className="section-width py-10">
        <Newsletter />

        <div className="flex flex-col md:flex-row gap-16 md:items-center mt-16 md:mt-8">
          <div className="text-white">
            <h2 className="text-3xl">EVM based scaling platform</h2>
            <h1 className="text-5xl font-bold">Candle Chain</h1>
          </div>
          <img className="-mt-16 md:-mt-0 w-56" src={zigzag} alt="" />
        </div>

        {/* Footer columns */}
        <div className="text-white text-xl grid grid-cols-2 gap-10 md:grid-cols-4 w-[90%] mt-5">
          <div>
            <h2 className="font-bold mb-5">SOLUTIONS</h2>
            <ul className="flex flex-col gap-2">
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-5">SUPPORT</h2>
            <ul className="flex flex-col gap-2">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-5">COMPANY</h2>
            <ul className="flex flex-col gap-2">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Partners</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-5">LEGAL</h2>
            <ul className="flex flex-col gap-2">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        <hr className="mt-10 mb-5" />

        {/* Copyright text */}
        <div className="flex  flex-col md:flex-row items-center gap-5 justify-between">
          <p className="text-white text-xl">
            © 2022 Candle Labs, Inc. All rights reserved.
          </p>
          <ul className="flex text-white gap-4">
            <li>
              <RiInstagramLine />
            </li>
            <li>
              <RiTwitterFill />
            </li>
            <li>
              <RiGithubFill />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

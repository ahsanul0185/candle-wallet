import React from "react";
import CandleWalletCard from "../components/CandleWalletCard";
import topCurve from "../assets/candle-wallet-top-curve.svg";
import bottomCurve from "../assets/candle-wallet-bottom-curve.svg";
import zigzagSmall from "../assets/zigzag-yellow-small.svg";
import pentagon from "../assets/pentagon.svg";
import shape from "../assets/shape-bridge.svg";

import icon_dashboard from "../assets/candle-wallet-section/dashboard.svg";
import icon_wallet from "../assets/candle-wallet-section/wallet.svg";
import icon_bridge from "../assets/candle-wallet-section/bridge.svg";
import icon_staking from "../assets/candle-wallet-section/staking.svg";

const CandleWallet = () => {
  return (
    <section className="bg-light">
      <div className="relative bg-primary z-0 overflow-x-clip">
        {/* Assets */}
        <img className="w-full select-none" draggable={false } src={topCurve} alt="" />
        <img
          className="absolute top-96 md:top-80 -right-10 rotate-[55deg] w-60 md:w-80 -z-10 [mask-image:linear-gradient(to_top,_black,_transparent)]"
          src={pentagon}
          alt=""
        />
        <img
          className="absolute left-0 -bottom-12 lg:-bottom-32 z-10 w-52 lg:w-80"
          src={shape}
          alt=""
        />

        <div className="section-width py-16">
          {/* Top part */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-2 justify-between ">
            <div>
              <h2 className="text-3xl md:text-4xl text-white font-semibold">
                Let's get started with
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-7">
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  Candle Wallet
                </h1>{" "}
                <img className="w-20 mt-1" src={zigzagSmall} alt="" />
              </div>
            </div>

            <div>
              <button className="px-12 md:px-16 py-2 md:py-4 bg-secondary duration-150 hover:bg-secondary/85 rounded-md text-xl md:text-2xl font-bold text-white cursor-pointer">
                Access Wallet Here
              </button>
              <p className="text-base md:text-xl font-thin text-white mt-3 md:text-center cursor-pointer">
                Connect your preffered wallet here
              </p>
            </div>
          </div>

          <p className="text-2xl md:w-1/2 mt-5 text-white">
            The safe, fast, and secure way to send and receive crypto assets on
            Candle Chain Network.
          </p>

          {/* Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            <CandleWalletCard
              icon={icon_dashboard}
              title="Candle Dashboard"
              description="View your crpto assests and transactions in a simple and intuivative
          way"
            />
            <CandleWalletCard
              icon={icon_bridge}
              title="Candle Bridge"
              description="Deposit and withdraw funds from your wallet to other networks"
            />
            <CandleWalletCard
              icon={icon_wallet}
              title="Candle Wallet"
              description="A wallet that allows you to send and recieve crypto assets in a secure way"
            />
            <CandleWalletCard
              icon={icon_staking}
              title="Candle Staking"
              description="Stake your crpto assests to earn rewards"
            />
          </div>
        </div>
      </div>
      <img className="w-full -z-20 select-none" draggable={false } src={bottomCurve} alt="" />
    </section>
  );
};

export default CandleWallet;

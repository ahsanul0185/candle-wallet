import React from "react";
import CandleWalletCard from "../components/CandleWalletCard";
import topCurve from "../assets/candle-wallet-top-curve.svg";
import zigzagSmall from "../assets/zigzag-yellow-small.svg";

import icon_dashboard from "../assets/candle-wallet-section/dashboard.svg";
import icon_wallet from "../assets/candle-wallet-section/wallet.svg";
import icon_bridge from "../assets/candle-wallet-section/bridge.svg";
import icon_staking from "../assets/candle-wallet-section/staking.svg";

const CandleWallet = () => {
  return (
    <div className=" bg-primary">
      <img className="w-full" src={topCurve} alt="" />

      <div className="section-width py-16">
        <div className="flex justify-between">
          <div>
            <h2 className="text-4xl text-white font-semibold">
              Let's get started with
            </h2>
            <div className="flex items-center gap-7">
              <h1 className="text-5xl font-bold text-white">Candle Wallet</h1>{" "}
              <img className="w-20 mt-1" src={zigzagSmall} alt="" />
            </div>
          </div>

          <div>
            <button className="px-12 md:px-16 py-2 md:py-4 bg-secondary rounded-md text-2xl font-bold text-white cursor-pointer">
              Access Wallet Here
            </button>
            <p className="text-base md:text-xl font-thin text-white mt-3 text-center">
              Connect your preffered wallet here
            </p>
          </div>
        </div>

        <p className="text-2xl w-1/2 mt-5 text-white">
          The safe, fast, and secure way to send and receive crypto assets on
          Candle Chain Network.
        </p>

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
  );
};

export default CandleWallet;

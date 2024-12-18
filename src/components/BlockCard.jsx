import React from 'react'
import curveRectangle from "../assets/block-card-rectangle.svg";
import cardCurve from "../assets/block-card-curve.svg";
import icon_transaction from "../assets/recent-block-icons/transaction.svg";
import icon_clock from "../assets/recent-block-icons/clock.svg";
import icon_sun from "../assets/recent-block-icons/sun.svg";
import icon_pump from "../assets/recent-block-icons/pump.svg";

const BlockCard = () => {
  return (
    <div className="relative px-8 py-6  max-w-sm z-0 bg-white rounded-b-xl">
          <div className="absolute top-0 left-0 w-full -z-10">
            <div className="bg-gradient-to-b from-[#21429B] to-[#3578BE] h-28 rounded-t-xl"></div>
            <img className="w-full -mt-1" src={cardCurve} alt="" />
          </div>

          <div className="flex items-center justify-between z-20">
            <div className="text-white">
              <h2 className="text-3xl font-bold">#1565910</h2>
              <p className="text-2xl">(0x17e4d6)</p>
            </div>
            <span className="text-xl font-bold bg-secondary text-white px-4 py-2 rounded-full">
              Mined
            </span>
          </div>

          <div className="flex gap-6 mt-20 items-center">
            <img src={icon_transaction} alt="" />
            <p className="font-medium text-xl">Transactions: 0</p>
          </div>

          <hr className="border-t-2 border-[#D9D9D9] my-4" />

          <div className="flex gap-6 items-center">
            <img src={icon_clock} alt="" />
            <p className="font-medium text-xl">3 Hours Ago</p>
          </div>
          <hr className="border-t-2 border-[#D9D9D9] my-4" />
          <div className="flex gap-6 items-start">
            <img src={icon_sun} alt="" />
            <p className="font-medium text-xl">
                          Mined by
                    <br /> 0X00000000000000 <br />000000000000000
            </p>
          </div>
          <hr className="border-t-2 border-[#D9D9D9] my-4" />
          <div className="flex gap-6 items-center">
            <img src={icon_pump} alt="" />
            <p className="font-medium text-xl">
            Gas used (0.000%)
            <br /> (0 / 228828880)
            </p>
          </div>
        </div>
  )
}

export default BlockCard
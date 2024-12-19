import React from "react";

const TransactionCard = () => {
  return (
    <div className="p-8 bg-gradient-to-t from-[#4BB7E880] to-[#478CCA80] rounded-md text-xl text-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Transfer transaction</h2>
          <h3 className="">Recorded at Apr 25, 2022</h3>
        </div>
        <span className=" font-bold bg-secondary  px-3 py-1 rounded-full">
          Success
        </span>
      </div>
      <p className="">3:30:06 AM</p>

      <hr className="my-4" />

      <div>
        <p className=" font-bold">From</p>
        <p className="break-all">0x546D090bbcEC3d96903d41e38C3436c1C601AF9c</p>
      </div>
      <hr className="my-4" />

      <div>
        <p className="font-bold">To</p>
        <p className="break-all">0x6B832F659412d6c3095F6235ef8d7bedc0382606</p>
      </div>

      <hr className="my-4" />

      {/* Bottom boxes */}
      <div className="flex gap-3 text-sm md:text-base">
        <div className="bg-[#4A8CCD] rounded-md px-2 py-2 md:py-5 w-full text-center">
          <p className="font-bold">Block</p>
          <p>#28461</p>
          <p>(0x6f2d)</p>
        </div>

        <div className="bg-[#4A8CCD] rounded-md px-2 py-2 md:py-5 w-full text-center">
          <p className="font-bold">
            Gas <br /> Used
          </p>
          <p>21000</p>
        </div>

        <div className="bg-[#4A8CCD] rounded-md px-2 py-2 md:py-5 w-full text-center">
          <p className="font-bold">Gas Price</p>
          <p>0.00001</p>
          <p>Gwei</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;

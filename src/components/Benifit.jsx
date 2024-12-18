import React from 'react'

const Benifit = ({ icon, title, description }) => {
    return (
      <div className="flex gap-5 md:gap-8">
        <div className="shrink-0 bg-gradient-to-t from-secondary to-primary size-20 md:size-24 grid place-items-center rounded-full">
          <img className="size-8 md:size-10" src={icon} alt="" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-black">{title}</h2>
          <p className="text-base md:text-xl">{description}</p>
        </div>
      </div>
    );
  };

export default Benifit
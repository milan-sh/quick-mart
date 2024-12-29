import React from "react";

const Sliders = ({url, category, discount, button}) => {
  return (
    <>
      <img className="relative rounded-xl h-full object-cover" src={`/carousel-images/${url}`} alt="" />
      <div className="w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center flex-col md:gap-y-4 gap-y-6 text-white">
        <h1 className="text-3xl md:text-6xl font-bold">{category}</h1>
        <p className="text-lg md:text-2xl">{discount}</p>
        <button className=" bg-primaryButtonColor text-white  px-4 py-2 rounded-md hover:bg-secondaryBgColor">
          {button}
        </button>
      </div>
    </>
  );
};

export default Sliders;

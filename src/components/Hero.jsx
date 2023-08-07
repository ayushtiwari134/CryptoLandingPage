import React from "react";
import heroImage from "../assets/images/hero2.png";

const Hero = () => {
  return (
    <div id="home" className="hero px-12 py-20 md:flex-row flex-col md:gap-0 gap-10 flex md:items-center items-center md:justify-evenly">
      <div className="left flex flex-col gap-5 md:items-start items-center justify-center">
        <div className="text flex md:items-start items-center flex-col gap-3">
          <h1 className="md:text-6xl md:text-left text-center text-5xl font-bold">
            Invest in Crypto with De<span className="text-green-600">Fi</span>
          </h1>
          <p className="md:text-[1.2rem] text-3xl md:items-start text-center mt-4">
            Buy and sell cryptocurrencies with amazing ease.
          </p>
        </div>
        <div className="email">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-3 py-2 rounded-l-lg border-y-2 border-l-2 border-green-600"
          />
          <button className="rounded-r-lg rounded-l-none">Submit</button>
        </div>
      </div>
      <div className="right">
        <div className="image">
          <img src={heroImage} alt="Image" width={400} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

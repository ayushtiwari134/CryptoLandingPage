import React from "react";
import earnImage from "../assets/images/earn.jpg";

const Earn = () => {
  return (
    <section id="earn" className="flex md:flex-row flex-col md:gap-0 gap-10 items-center justify-around py-20 px-12">
      <div className="left">
        <div className="text flex flex-col gap-6">
          <h1 className="text-6xl font-semibold">
            Earn up to 10% <br /> interest per referral.
          </h1>
          <h2 className="text-3xl">Sign up today.</h2>
          <div className="email">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-3 py-2 rounded-l-lg border-y-2 border-l-2 border-green-600"
            />
            <button className="rounded-r-lg rounded-l-none">Submit</button>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={earnImage} alt="earn" />
      </div>
    </section>
  );
};

export default Earn;

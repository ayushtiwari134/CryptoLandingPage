import React, { useState, useEffect } from "react";
import btc from "../assets/images/btc.png";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
const Card = (item) => {
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedPrice = numberFormat.format(item.item.priceUsd);
  return (
    <div className="card border-2 p-7 w-[150px] flex flex-col gap-2 justify-center  shadow-xl items-center hover:shadow-2xl hover:cursor-pointer bg-white rounded-lg">
      <div className="card-image">
        <img src={btc} alt="" width={70} />
      </div>
      <div className="card-content flex flex-col items-center justify-center">
        <div className="card-title font-semibold text-[1.3rem]">
          {item.item.symbol}
        </div>
        {item.item.changePercent24Hr < 0 ? (
          <div className="card-price flex text-red-600 items-center text-[1.2rem]">
            <AiOutlineArrowDown />
            <div>{formattedPrice}</div>
          </div>
        ) : (
          <div className="card-price flex text-green-600 items-center text-[1.2rem]">
            <AiOutlineArrowUp />
            <div>{formattedPrice}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const Featured = () => {
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);
  const fetchData = async () => {
    const cryptocurrencies = [
      "bitcoin",
      "ethereum",
      "binance-coin",
      "cardano",
      "solana",
      "ripple",
    ];
    const endpoint = "https://api.coincap.io/v2/assets";

    const queryParams = new URLSearchParams({
      symbols: cryptocurrencies.join(","),
    });

    const url = `${endpoint}?${queryParams}`;

    fetch(url)
      .then((response) => response.json())
      .then((data1) => {
        setData(data1.data.slice(0, 6));
        console.log(data);
        setFetched(true);
      })
      .catch((error) => {
        console.error("Error fetching data from CoinCap API:", error);
      });
  };
  useEffect(() => {
    !fetched && fetchData();
  }, []);
  return (
    <section
      id="featured"
      className="flex border-y-4 border-gray-100 md:border-0 md:flex-row flex-col gap-20 justify-evenly items-center featured md:bg-gray-100 px-10 py-20"
    >
      <div className="right w-[500px] md:flex-row flex-col justify-center items-center flex gap-5 flex-wrap">
        {data.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
      <div className="left flex flex-col">
        <div className="text flex flex-col gap-6 md:items-left md:text-left text-center items-center">
          <h1 className="text-3xl font-semibold">
            Explore top Cryptocurrencies like <br /> Bitcoin, Ethereum and
            Litecoin.
          </h1>
          <h2 className="text-3xl">
            Invest in the future of finance, with De
            <span className="text-green-600">Fi</span>
          </h2>
          <button className="w-[150px]">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;

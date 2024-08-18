import Card from "./Card";
import DataPopulation from "./DataPopulation";
import DataPopulatRed from "./DataPopulatRed";
import Filter from "./Filter";
import Volume from "./Volume";

const Market = () => {
  const marketData = [
    { pair: "BTC_USDT", price: "56,9986", change: "0.000123" },
    { pair: "BTC_USDT", price: "56,9986", change: "0.000123" },
    { pair: "BTC_USDT", price: "56,9986", change: "0.000123" },
    { pair: "BTC_USDT", price: "56,9986", change: "0.000123" },
  ];

  return (
    <div className="overflow-hidden w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 justify-center gap-1 w-full max-w-6xl mt-4 mb-4">
        {marketData.map((data, index) => (
          <div
            key={index}
            className="p-4 bg-white text-black shadow-md rounded-md"
          >
            <h1 className="text-xl font-bold">{data.pair}</h1>
            <p className="text-2xl font-semibold text-green-600">
              {data.price}
            </p>
            <h5 className="text-lg text-green-600">{data.change}</h5>
          </div>
        ))}
      </div>
      <hr />
      <div className="mt-4 flex justify-center items-center">
        <Card />
      </div>
      <Filter />
      <hr />
      <Volume />
      <hr className="my-2" />
      <div>
        <DataPopulation />
        <hr className="my-2" />
        <DataPopulatRed />
      </div>
    </div>
  );
};

export default Market;

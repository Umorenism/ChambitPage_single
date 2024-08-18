import React from "react";

// Define the type for the crypto data
interface CryptoData {
  symbol: string;
  name: string;
  price: number;
  volume: number;
}

// Sample data
const cryptoData: CryptoData[] = [
  { symbol: "BTC", name: "Bitcoin", price: 27500.23, volume: 123456789 },
  { symbol: "ETH", name: "Ethereum", price: 1750.12, volume: 98765432 },
  { symbol: "ADA", name: "Cardano", price: 0.35, volume: 12345678 },
  { symbol: "ADA", name: "Cardano", price: 0.35, volume: 12345678 },
  { symbol: "ADA", name: "Cardano", price: 0.35, volume: 12345678 },
  { symbol: "ADA", name: "Cardano", price: 0.35, volume: 12345678 },
  { symbol: "ADA", name: "Cardano", price: 0.35, volume: 12345678 },
  { symbol: "ADA", name: "Cardano", price: 0.35, volume: 12345678 },
  { symbol: "ADA", name: "Cardano", price: 0.35, volume: 12345678 },
  { symbol: "ADA", name: "Cardano", price: 0.35, volume: 12345678 },
  { symbol: "ADA", name: "Cardano", price: 0.35, volume: 12345678 },
  { symbol: "ADA", name: "Cardano", price: 0.35, volume: 12345678 },
  { symbol: "ADA", name: "Cardano", price: 0.35, volume: 12345678 },
  { symbol: "ADA", name: "Cardano", price: 0.35, volume: 12345678 },
  { symbol: "ADA", name: "Cardano", price: 0.35, volume: 12345678 },

  // Add more data as needed
];

const CryptoTable: React.FC = () => {
  return (
    <div className="min-h-screen justify-center mt-10 md:mt-20 items-center flex">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-green-700 font-bold">CHAMBIT</span> Market Data
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4 border-b">Symbol</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Volume</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((crypto, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{crypto.symbol}</td>
                  <td className="py-2 px-4 border-b">{crypto.name}</td>
                  <td className="py-2 px-4 border-b">
                    ${crypto.price.toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {crypto.volume.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CryptoTable;

import { RiBtcFill } from "react-icons/ri";

const DataPopulatRed = () => {
  return (
    <div className="bg-white w-full flex items-center justify-center py-1 mt-2 shadow-md rounded-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
        {/* First Column */}
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <RiBtcFill size={30} className="text-gray-700" />
          <div className="text-sm text-black">
            <h1 className="font-semibold text-base sm:text-sm">BTC/USDT</h1>
            <p className="text-sm">Vol.7546654332</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col text-center mb-4 sm:mb-0">
          <h1 className="font-bold text-black text-base sm:text-lg">
            59517...975
          </h1>
          <p className="text-black text-sm">Vol.7546654332</p>
        </div>

        {/* Button */}
        <button className="px-4 py-2 bg-red-600 rounded-md text-white font-bold text-sm sm:text-base">
          0.60%
        </button>
      </div>
    </div>
  );
};

export default DataPopulatRed;

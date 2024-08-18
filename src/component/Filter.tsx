import { WiStars } from "react-icons/wi";
import { IoFilterCircleSharp } from "react-icons/io5";

const Filter = () => {
  return (
    <div className=" w-full flex items-center justify-center py-4 mt-4 p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-10 w-full max-w-6xl">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 flex items-center justify-center rounded-full bg-slate-600"></div>
          <p className="text-sm sm:text-base">BTC</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 flex items-center justify-center rounded-full bg-slate-600"></div>
          <p className="text-sm sm:text-base">ETH</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 flex items-center justify-center rounded-full bg-slate-600"></div>
          <p className="text-sm sm:text-base text-black">USDT</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 flex items-center justify-center rounded-full bg-slate-600">
            <IoFilterCircleSharp className="text-lg sm:text-xl" />
          </div>
          <p className="text-sm sm:text-base">Filter</p>
        </div>
        <div className="flex items-center gap-2">
          <WiStars size={20} className="text-lg sm:text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Filter;

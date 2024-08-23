import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 flex justify-center items-center text-white py-4  p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 ">
        <div className="text-xl font-serif text-white">
          <h1 className="font-bold mb-2 text-2xl py-2">Media</h1>
          <p className="h-1 w-[50%] bg-orange-600 mt-2"></p>
          <h5 className="py-2">Annoucement</h5>
          <p className="py-2">Listing Service</p>
          <a href="https://chambitweb.vercel.app">
            <p>Conciergse</p>
          </a>
          <p className="py-2">Languages</p>
          <p className="py-2">Support</p>
        </div>
        <div className=" text-xl font-serif text-white">
          <h1 className="mb-2 text-2xl font-bold py-2">Services</h1>
          <p className="h-1 w-[50%] bg-orange-600 mt-2"></p>
          <a href="https://chambbit.com/pp">
            <h5 className="py-2">P2p</h5>
          </a>
          <a href="https://chambbit.com/spot?pair=CAMBS/USDT">
            <p className="py-2">Spot</p>
          </a>
          <a href="https://chambbit.com/swap">
            <p className="py-2">Swap</p>
          </a>
          <a href="https://chambbit.com/chembster">
            <p className="py-2">Airdrop</p>
          </a>
          <a href="https://chambbit.com/market">
            <p className="py-2">Market</p>
          </a>
          <Link to="/policy">
            <p className="py-2">Policies</p>
          </Link>
          <a href="https://chambbit.com/game">
            <p className="py-2">Games</p>
          </a>
          <a href="https://chambbit.com/asset">
            <p className="py-2">Wallet</p>
          </a>
        </div>

        <div className="text-xl font-serif text-white">
          <h1 className="mb-2 text-2xl font-bold py-2">Policies</h1>
          <p className="h-1 w-[50%] bg-orange-600 mt-2"></p>
          <h5 className="py-2">Terms of use</h5>
          <p className="py-2">Privacy Policy</p>
          <p className="py-2">Legals</p>
          <p className="py-2">KYC Policies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

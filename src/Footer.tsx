const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="text-xl text-white">
          <h1 className="font-bold mb-4">Media</h1>
          <hr />
          <h5>Annoucement</h5>
          <p>Listing Service</p>
          <p>Conciergse</p>
          <p>Languages</p>
          <p>Support</p>
        </div>
        <div className=" text-xl text-white ">
          <h1 className="mb-4 font-bold">Services</h1>
          <hr />
          <h5>P2p</h5>
          <p>Spot</p>
          <p>Swap</p>
          <p>Airdrop</p>
          <p>Market</p>
          <p>Policies</p>
          <p>Games</p>
          <p>Wallet</p>
        </div>

        <div className="text-xl text-white">
          <h1 className="mb-4 font-bold">Policies</h1>
          <hr />
          <h5>Terms of use</h5>
          <p>Privacy Policy</p>
          <p>Legals</p>
          <p>KYC Policies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

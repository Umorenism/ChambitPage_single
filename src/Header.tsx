import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white  shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4 ">
        <Link to="/" className="text-2xl font-bold">
          Chambit
        </Link>
        <nav className="hidden md:flex space-x- items-center justify-center gap-2">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/market" className="hover:text-blue-500">
            <button className="bg-black px-4 text-white py-2  rounded-md items-center flex justify-center">
              Market
            </button>
          </Link>
        </nav>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </button>
        {isOpen && (
          <div className="absolute top-16 right-0 bg-white shadow-lg rounded-md md:hidden">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
              Home
            </Link>
            <Link to="/market" className="block px-4 py-2 hover:bg-gray-200">
              Mark
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

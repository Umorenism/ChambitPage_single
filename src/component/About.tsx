import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import NewsLetter from "./NewsLetter";
const About = () => {
  return (
    <div className="bg-green-700 py-10 flex justify-center items-center flex-col p-4 ">
      <h1 className="text-sm md:text-xl text-white font-bold">
        Get Connected with us on social network
      </h1>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-10 mt-4">
          <a href="#">
            <IoIosContacts size={30} />
          </a>
          <a href="">
            <FaTelegram size={30} />
          </a>

          <a href="">
            <FaTwitter size={30} />
          </a>
          <a href="">
            <FaSquareInstagram size={30} />
          </a>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;

import { Link } from "react-router-dom";
import Home from "./component/Home";

export const HomeScreen = () => {
  return (
    <div className="flex flex-col min-h-screen  ">
      <Home />
      <Link
        to="/market"
        className="text-blue-500 hover:underline py-2 p-4 font-extrabold"
      >
        View Our Market data
      </Link>
    </div>
  );
};

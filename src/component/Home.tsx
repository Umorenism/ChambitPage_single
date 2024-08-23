import Market from "./Market";
import SliderComponent from "./SliderComponent";

const Home: React.FC = () => {
  return (
    <div className="relative bg-gray-100 min-h-screen ">
      <SliderComponent />
      <div className=" px-4 p-2 mt-4">
        <Market />
      </div>
    </div>
  );
};

export default Home;

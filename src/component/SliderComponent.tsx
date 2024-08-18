import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from "../assets/logo.jpg";
import pic2 from "../assets/logo.jpg";
const SliderComponent: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide arrows if not needed
  };

  return (
    <div className="overflow-hidden w-full">
      <Slider {...settings}>
        <div className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center ">
          <div className="absolute inset-0">
            <img
              src={pic}
              alt="Slide1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative z-10 mt-20 text-white text-center px-4 md:px-8">
            <h1 className="md:text-5xl text-2xl md:font-extrabold text-white">
              Welcome to CHAMBIT EXCHANGE
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Discover amazing features and more
            </p>
          </div>
        </div>
        <div className="relative w-full h-[50vh] min-h-[400px]  flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src={pic2}
              alt="Slide2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative z-10 mt-20 text-white text-center px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              Explore New Horizons
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Join us for exciting updates
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;

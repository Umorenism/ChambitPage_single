import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from "../assets/logo2.jpg";
import pic2 from "../assets/logo2.jpg";
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
        <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center ">
          <div className="absolute inset-0">
            <img
              src={pic}
              alt="Slide1"
              className="object-cover w-full h-full"
            />
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
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;

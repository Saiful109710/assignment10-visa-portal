import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {i + 1}
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  const sliders = [
    {
      id: 1,
      title: "Simplify your visa application process",
      description:
        "Make your visa application faster and hassle-free with our simple and easy-to-use platform.",
      image: "https://i.ibb.co/h7XTK89/visa-slider-1.png",
      buttonText: "Get Started",
    },
    {
      id: 2,
      title: "Check visa requirements for 200+ countries",
      description:
        "Explore the visa requirements for over 200 countries before planning your trip.",
      image: "https://i.ibb.co/1RNq79Y/visa-slider-2.jpg",
      buttonText: "Get Started",
    },
    {
      id: 3,
      title: "Track your application anytime, anywhere",
      description:
        "Stay updated on your visa application status anytime, anywhere, with real-time tracking.",
      image: "https://i.ibb.co/xgXKz78/visa-slider-3.jpg",
      buttonText: "Get Started",
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {sliders.map((slide) => (
          <div key={slide.id} className="relative flex items-center justify-center">
            {/* Background Image */}
            <img
              className="w-full h-96 object-cover rounded-lg shadow-lg opacity-80"
              src={slide.image}
              alt={slide.title}
            />
            {/* Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-8">
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold text-white">{slide.title}</h3>
                <p className="text-lg">{slide.description}</p>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Dots Style */}
      <style jsx>{`
        .slick-dots {
          bottom: 20px;
        }

        .slick-dots .slick-active {
          background-color: #1d4ed8;
        }
      `}</style>
    </div>
  );
};

export default Banner;

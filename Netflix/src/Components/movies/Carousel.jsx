import React from "react";
import Slider from "react-slick";
import "./carousel.css"; // Add your custom styles here

const CarouselSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const categories = [
    {
      title: "Action Movies",
      items: [
        // { type: "image", src: "../../../src/assets/netflix.jpg" },
        // { type: "image", src: "../../../src/assets/netflix.jpg" },
        {
          type: "video",
          src: "public/File/Netflix Tudum 2025   Official Trailer   May 31   Netflix.mp4",
        },
        {
          type: "video",
          src: "/assets/Cold Case The Tylenol Murders   Official Trailer   Netflix.mp4",
        },
        {
          type: "video",
          src: "public/File/Sheikh Ali Jaber Beautiful recitation 1408 #quran.mp4",
        },
      ],
    },
    {
      title: "Comedy Movies",
      items: [
        { type: "image", src: "../../../src/assets/netflix.jpg" },
        { type: "image", src: "../../../src/assets/netflix.jpg" },
        { type: "image", src: "../../../src/assets/netflix.jpg" },
      ],
    },
  ];

  return (
    <div
      className="carousel-background"
      style={{
        backgroundImage: { src: "../../../src/assets/background.jpg" },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="carousel-section">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <h2>{category.title}</h2>
            <Slider {...settings}>
              {category.items.map((item, idx) => (
                <div key={idx} className="carousel-item">
                  {item.type === "image" ? (
                    <img src={item.src} alt="Movie" />
                  ) : (
                    <video src={item.src} controls />
                  )}
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CarouselSection };

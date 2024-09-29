import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const images = [
  {
    //url: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLN3ref_VW_34FR+watch-case-42-aluminum-rosegold-nc-s10_VW_34FR+watch-face-42-aluminum-rosegold-s10_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=UVJuZDErT1V3TUlNcnk2Rnd0N1k2cDNqbENGcEFFTlJVaXJwL2VzdGxEM3hoaFEySTlrZSsrbEhqczIxajV3MzBnRnJNVU50TjZtbUN3ZjYvVksrL1FtTHNhRmRKQkE2OXJHRVEvRTFWdXRGd1ZOdUM2RkNJOUpIeklzU1JHbVNWNEM0ZHZzMzMzajJiOGZuamRiTE9rUVN3R3VxZWhYYXgwOHljYmZFMXBocmMyRTN3NCt6QkoxaUdRb0FBay9VYktGTHdENW9lYUFnak5pcy9ReEdDVGFYRW5lZTlQWUFSemFVTERGOFVXQ0pMTGI4QWxGbG1DY25rS1FILzcyQg==",
    title: "Apple Watch",
    description: "Discover the finest luxury smartwatches.",
    color: "#FF5733", // Apple Watch color (Red-Orange)
  },
  {
   // url: "https://images.unsplash.com/photo-1518288774671-8dcdc46e007f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    title: "Noise Watch",
    description: "Step into the future of timekeeping with Noise.",
    color: "#3498db", // Noise Watch color (Blue)
  },
  {
   // url: "https://images.unsplash.com/photo-1518288774671-8dcdc46e007f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    title: "Galaxy Watch",
    description: "Stay connected and stylish with Galaxy Watch.",
    color: "#27ae60", // Galaxy Watch color (Green)
  },
  {
    //url: "",
    title: "Fitbit",
    description: "Track your fitness and health with Fitbit.",
    color: "#e74c3c", // Fitbit color (Red)
  },
  {
    //url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    title: "Boat Smartwatch",
    description: "Affordable, stylish, and functional Boat Smartwatches.",
    color: "#8e44ad", // Boat Smartwatch color (Purple)
  },
  {
    //url: "https://images.unsplash.com/photo-1519313415006-cc1b57b9c2a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    title: "Fastrack Smartwatch",
    description: "Sporty and trendy Fastrack Smartwatches for every occasion.",
    color: "#f1c40f", // Fastrack color (Yellow)
  },
  {
    //url: "https://images.unsplash.com/photo-1523500912034-4fc9b4e8147b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    title: "Fossil Watch",
    description: "Fossil's iconic watches combine timeless style and modern tech.",
    color: "#2c3e50", // Fossil color (Dark Blue)
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleShopNow = () => {
    navigate("/shop"); // Navigate to the shop page
  };

  return (
    <div className="relative h-screen">
      <div
        className="bg-cover bg-center h-full transition-all duration-500"
        style={{ backgroundImage: `url(${images[currentImage].url})` }} // Correct the background image
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4">
            Smart Watch Shop
          </h1>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: images[currentImage].color }} // Apply dynamic color
          >
            {images[currentImage].title}
          </h2>
          <p className="text-lg mb-8 max-w-lg text-center">
            {images[currentImage].description}
          </p>

          <button
            onClick={handleShopNow} // Add onClick event to navigate
            className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-2 rounded-full text-white hover:bg-gray-700"
      >
        ❮
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-2 rounded-full text-white hover:bg-gray-700"
      >
        ❯
      </button>
    </div>
  );
};

export default Hero;

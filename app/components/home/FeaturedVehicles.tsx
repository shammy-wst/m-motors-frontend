"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const FeaturedVehicles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const vehicles = [
    {
      id: 1,
      name: "Eclipse Cross",
      image: "/assets/images/cars/car1.png",
      price: "29 990 €",
    },
    {
      id: 2,
      name: "ASX",
      image: "/assets/images/cars/car2.png",
      price: "24 990 €",
    },
    {
      id: 3,
      name: "Outlander PHEV",
      image: "/assets/images/cars/car3.png",
      price: "39 990 €",
    },
    {
      id: 4,
      name: "Space Star",
      image: "/assets/images/cars/car4.png",
      price: "19 990 €",
    },
    {
      id: 5,
      name: "L200",
      image: "/assets/images/cars/car5.png",
      price: "44 990 €",
    },
    {
      id: 6,
      name: "Pajero Sport",
      image: "/assets/images/cars/car6.png",
      price: "49 990 €",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const increment = isMobile ? 1 : 3;
      return prevIndex + increment >= vehicles.length
        ? 0
        : prevIndex + increment;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const decrement = isMobile ? 1 : 3;
      return prevIndex - decrement < 0
        ? Math.max(0, vehicles.length - decrement)
        : prevIndex - decrement;
    });
  };

  return (
    <section className="flex w-full bg-white text-black py-6 md:py-16 overflow-hidden">
      <div className="flex flex-1 flex-col px-4 md:px-8 lg:px-[20%]">
        <div className="flex justify-center mb-6 md:mb-12">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-medium text-black">
              /
            </span>
            <h2 className="text-xl md:text-2xl font-medium text-black">
              DÉCOUVREZ
            </h2>
            <h2 className="text-xl md:text-2xl font-bold text-black">
              LA GAMME
            </h2>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute left-0 top-0 w-12 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-[15]" />

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 md:p-3 shadow-lg z-[20] hover:bg-gray-200 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${isMobile ? "100%" : "100%"}`,
                transform: `translateX(-${
                  currentIndex * (isMobile ? 100 : 33.333)
                }%)`,
              }}
            >
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="flex-shrink-0 w-full md:w-1/3 px-2 md:px-4"
                >
                  <div className="flex flex-col group">
                    <div className="relative h-[250px] md:h-[300px] mb-4 bg-white/5 rounded-lg overflow-hidden transition-transform group-hover:scale-105">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 font-rem">
                        {vehicle.name}
                      </h3>
                      <p className="text-lg md:text-xl font-inter text-gray-500">
                        {vehicle.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-0 w-12 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-[15]" />

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 md:p-3 shadow-lg z-[20] hover:bg-gray-200 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;

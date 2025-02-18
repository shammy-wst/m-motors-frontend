"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex w-full h-[100svh] relative">
      <div className="flex absolute inset-0">
        <Image
          src="/assets/images/backgrounds/hero-bg.jpg"
          alt="M-Motors Background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="flex flex-1 items-center justify-center relative z-10">
        <div className="flex flex-1 px-4 md:px-8 lg:px-[20%]">
          <div className="flex flex-1 flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-rem mb-4 md:mb-6 text-center">
              M-MOTORS
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white font-inter max-w-2xl text-center mb-8 md:mb-10">
              Find Your Perfect Ride - Quality, Trust, and Affordable Deals 🚗
            </p>
            <div className="flex flex-col w-full max-w-md gap-4 md:gap-6">
              <button className="w-full bg-white text-black px-6 py-4 rounded-full hover:bg-gray-200 transition-all font-inter text-base md:text-lg">
                Découvrir nos véhicules
              </button>
              <button className="w-full border-2 border-white text-white px-6 py-4 rounded-full hover:bg-white hover:text-black transition-all font-inter text-base md:text-lg">
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

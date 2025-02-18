"use client";

import Image from "next/image";

const Advertisement = () => {
  return (
    <section className="flex w-full h-[400px] sm:h-[500px] md:h-[600px] bg-black relative">
      <div className="flex absolute inset-0">
        <Image
          src="/assets/images/backgrounds/advertise.jpg"
          alt="Eclipse Cross"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="flex flex-1 items-center">
        <div className="flex flex-1 px-4 sm:px-8 md:px-[20%]">
          <div className="flex flex-1 flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4 font-rem">
              ECLIPSE CROSS
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-2 font-rem">
              Garantie satisfait ou remboursé
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-white font-inter">
              Disponible immédiatement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;

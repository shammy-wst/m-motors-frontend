const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-120px)]">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="M-Motors Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative flex-1 flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">M-MOTORS</h1>
          <p className="text-lg md:text-xl mb-8 text-white">
            Find Your Perfect Ride - Quality, Trust, and Affordable Deals 🚗
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition">
              Découvrir nos véhicules
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
import Image from 'next/image';

const FeaturedVehicles = () => {
  // TODO: Remplacer par un appel API pour récupérer les véhicules en vedette
  const vehicles = [
    {
      id: 1,
      name: 'Eclipse Cross',
      image: '/images/car1.jpg',
      price: '29 990 €'
    },
    {
      id: 2,
      name: 'ASX',
      image: '/images/car2.jpg',
      price: '24 990 €'
    },
    {
      id: 3,
      name: 'Outlander PHEV',
      image: '/images/car3.jpg',
      price: '39 990 €'
    }
  ];

  return (
    <section className="flex flex-col py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-center mb-2">DÉCOUVREZ</h2>
          <h3 className="text-xl text-center">LA GAMME</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {vehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="flex flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 p-4">
                <h3 className="text-xl font-bold">{vehicle.name}</h3>
                <p className="text-gray-600">À partir de</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">{vehicle.price}</p>
                <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles; 
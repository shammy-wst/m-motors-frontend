import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';

const CataloguePage = () => {
  // TODO: Remplacer par un appel API
  const vehicles = Array(9).fill({
    id: 1,
    name: 'Voiture 1',
    image: '/images/car1.jpg',
    slug: 'voiture-1'
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col pt-[120px] bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-2 mb-12">
            <span className="text-2xl">/ DÉCOUVREZ</span>
            <span className="text-2xl font-bold">LA GAMME</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-20">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="flex flex-col items-center">
                <Link href={`/catalogue/${vehicle.slug}`} className="group w-full">
                  <div className="relative w-full aspect-[4/3] mb-6">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg mb-4">{vehicle.name}</h3>
                    <button className="border border-black px-8 py-2 text-sm hover:bg-black hover:text-white transition">
                      En savoir plus
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CataloguePage; 
import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';

const ProductPage = () => {
  // TODO: Remplacer par un appel API pour récupérer les détails du véhicule
  const vehicle = {
    name: 'VOITURE DE FOU MALADE',
    image: '/images/car1.jpg',
    details: {
      'Modèle et Marque': 'Eclipse Cross',
      'Prix TTC': '29 990 €',
      'Motorisation': 'Hybride',
      'Puissance': '160 ch',
      'Transmission': 'Automatique'
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col pt-[120px] bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-2 mb-12">
            <span className="text-2xl">/</span>
            <span className="text-2xl font-bold">{vehicle.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Image du véhicule */}
            <div className="flex-1">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Détails du véhicule */}
            <div className="flex-1">
              <div className="bg-black text-white p-6">
                <h2 className="text-xl font-bold mb-6">Caractéristiques</h2>
                <div className="space-y-4">
                  {Object.entries(vehicle.details).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span>{key}</span>
                      <span className="font-bold">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex gap-4">
                  <button className="flex-1 bg-white text-black py-2 hover:bg-gray-200 transition">
                    Réserver un essai
                  </button>
                  <button className="flex-1 border border-white text-white py-2 hover:bg-white hover:text-black transition">
                    Nous contacter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage; 
"use client";

import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';

const VehicleDetailPage = ({ params }: { params: { slug: string } }) => {
  // TODO: Remplacer par un appel API avec le slug
  const vehicle = {
    id: 1,
    name: `Voiture ${params.slug}`,
    price: '25 000 €',
    images: Array(4).fill('/images/car1.jpg'),
    specs: {
      year: '2023',
      mileage: '0 km',
      fuel: 'Essence',
      transmission: 'Automatique',
      power: '130 ch',
      color: 'Gris métallisé'
    },
    description: `Description détaillée du véhicule ${params.slug}...`
  };

  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col pt-[80px] md:pt-[120px] bg-white">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Galerie d'images */}
            <div className="w-full lg:w-2/3">
              <div className="relative w-full aspect-[4/3] mb-4">
                <Image
                  src={vehicle.images[selectedImage]}
                  alt={vehicle.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square ${selectedImage === index ? 'ring-2 ring-black' : ''}`}
                  >
                    <Image
                      src={image}
                      alt={`${vehicle.name} - Vue ${index + 1}`}
                      fill
                      className="object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Informations */}
            <div className="w-full lg:w-1/3">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{vehicle.name}</h1>
              <p className="text-2xl font-semibold mb-6">{vehicle.price}</p>

              {/* Caractéristiques */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(vehicle.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-sm text-gray-500 capitalize">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-4">
                <button className="w-full bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition">
                  Réserver un essai
                </button>
                <button className="w-full border border-black py-3 px-6 rounded hover:bg-black hover:text-white transition">
                  Demander un devis
                </button>
                <button className="w-full border border-black py-3 px-6 rounded hover:bg-black hover:text-white transition">
                  Estimer une reprise
                </button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 p-6 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700">{vehicle.description}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VehicleDetailPage; 
"use client";

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
    slug: 'voiture-1',
    price: '25 000 €',
    specs: {
      year: '2023',
      mileage: '0 km',
      fuel: 'Essence'
    }
  });

  // TODO: Implémenter la logique de filtrage avec l'API
  const [filters, setFilters] = React.useState({
    marque: '',
    modele: '',
    prix: '',
    carburant: ''
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col pt-[80px] md:pt-[120px] bg-white">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-12">
            <span className="text-xl md:text-2xl">/ DÉCOUVREZ</span>
            <span className="text-xl md:text-2xl font-bold">LA GAMME</span>
          </div>

          {/* Filtres */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-gray-100 rounded-lg">
            <select 
              className="p-2 rounded border"
              onChange={(e) => setFilters({...filters, marque: e.target.value})}
            >
              <option value="">Marque</option>
              {/* TODO: Charger les marques depuis l'API */}
            </select>
            <select 
              className="p-2 rounded border"
              onChange={(e) => setFilters({...filters, modele: e.target.value})}
            >
              <option value="">Modèle</option>
              {/* TODO: Charger les modèles depuis l'API */}
            </select>
            <select 
              className="p-2 rounded border"
              onChange={(e) => setFilters({...filters, prix: e.target.value})}
            >
              <option value="">Prix</option>
              <option value="0-15000">0 - 15 000 €</option>
              <option value="15000-30000">15 000 - 30 000 €</option>
              <option value="30000+">30 000 € +</option>
            </select>
            <select 
              className="p-2 rounded border"
              onChange={(e) => setFilters({...filters, carburant: e.target.value})}
            >
              <option value="">Carburant</option>
              <option value="essence">Essence</option>
              <option value="diesel">Diesel</option>
              <option value="hybride">Hybride</option>
              <option value="electrique">Électrique</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-20">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Link href={`/catalogue/${vehicle.slug}`} className="group">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-contain rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{vehicle.name}</h3>
                    <p className="text-gray-600 mb-2">{vehicle.price}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-sm text-gray-500">{vehicle.specs.year}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{vehicle.specs.mileage}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{vehicle.specs.fuel}</span>
                    </div>
                    <button className="w-full border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">
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
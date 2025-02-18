"use client";

import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const ServiceFinancierPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col pt-[80px] md:pt-[120px] bg-white">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-12">
            <span className="text-xl md:text-2xl">/ SERVICE</span>
            <span className="text-xl md:text-2xl font-bold">FINANCIER</span>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {/* Section Solutions de financement */}
            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Solutions de Financement</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded shadow-sm">
                  <h3 className="font-semibold mb-2">Crédit Classique</h3>
                  <p className="text-gray-600">Financez votre véhicule sur une durée de 12 à 84 mois avec des mensualités fixes.</p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                  <h3 className="font-semibold mb-2">Location avec Option d'Achat</h3>
                  <p className="text-gray-600">Profitez d'une voiture neuve avec des loyers modérés et la possibilité d'achat en fin de contrat.</p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                  <h3 className="font-semibold mb-2">Leasing</h3>
                  <p className="text-gray-600">Location longue durée avec services inclus pour les professionnels.</p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                  <h3 className="font-semibold mb-2">Financement Professionnel</h3>
                  <p className="text-gray-600">Solutions adaptées aux entreprises avec avantages fiscaux.</p>
                </div>
              </div>
            </section>

            {/* Simulateur de financement */}
            <section className="bg-black text-white rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6">Simulateur de Financement</h2>
              <form className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm">Montant du véhicule</label>
                    <input
                      type="number"
                      placeholder="25000"
                      className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Apport initial</label>
                    <input
                      type="number"
                      placeholder="5000"
                      className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm">Durée (mois)</label>
                    <select className="w-full p-2 rounded bg-white/10 border border-white/20 text-white">
                      <option value="12">12 mois</option>
                      <option value="24">24 mois</option>
                      <option value="36">36 mois</option>
                      <option value="48">48 mois</option>
                      <option value="60">60 mois</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Type de financement</label>
                    <select className="w-full p-2 rounded bg-white/10 border border-white/20 text-white">
                      <option value="credit">Crédit classique</option>
                      <option value="loa">Location avec Option d'Achat</option>
                      <option value="lld">Location Longue Durée</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="py-2 px-6 bg-white text-black rounded hover:bg-gray-100 transition w-full md:w-auto md:self-start"
                >
                  Calculer mes mensualités
                </button>
              </form>
            </section>

            {/* Avantages */}
            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Nos Avantages</h2>
              <div className="prose max-w-none text-gray-600">
                <ul className="list-disc pl-5">
                  <li>Réponse rapide sous 24h</li>
                  <li>Taux compétitifs négociés avec nos partenaires</li>
                  <li>Assurance et garanties incluses</li>
                  <li>Accompagnement personnalisé</li>
                  <li>Possibilité de regroupement de crédits</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceFinancierPage; 
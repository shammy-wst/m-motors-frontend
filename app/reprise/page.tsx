"use client";

import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const ReprisePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col pt-[80px] md:pt-[120px] bg-white">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-12">
            <span className="text-xl md:text-2xl">/ REPRISE</span>
            <span className="text-xl md:text-2xl font-bold">VÉHICULE</span>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {/* Processus de reprise */}
            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6">Comment ça marche ?</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="text-3xl font-bold text-black mb-2">1</div>
                  <h3 className="font-semibold mb-2">Estimation en ligne</h3>
                  <p className="text-gray-600">Remplissez le formulaire avec les détails de votre véhicule</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="text-3xl font-bold text-black mb-2">2</div>
                  <h3 className="font-semibold mb-2">Premier contact</h3>
                  <p className="text-gray-600">Un expert vous contacte sous 24h</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="text-3xl font-bold text-black mb-2">3</div>
                  <h3 className="font-semibold mb-2">Expertise</h3>
                  <p className="text-gray-600">Rendez-vous pour une expertise détaillée</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="text-3xl font-bold text-black mb-2">4</div>
                  <h3 className="font-semibold mb-2">Offre finale</h3>
                  <p className="text-gray-600">Proposition ferme de reprise</p>
                </div>
              </div>
            </section>

            {/* Formulaire d'estimation */}
            <section className="bg-black text-white rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6">Estimation de reprise</h2>
              <form className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm">Marque</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                      placeholder="Ex: Peugeot"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Modèle</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                      placeholder="Ex: 308"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm">Année</label>
                    <input
                      type="number"
                      className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                      placeholder="Ex: 2020"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Kilométrage</label>
                    <input
                      type="number"
                      className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                      placeholder="Ex: 50000"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm">Carburant</label>
                    <select className="w-full p-2 rounded bg-white/10 border border-white/20 text-white">
                      <option value="">Sélectionnez</option>
                      <option value="essence">Essence</option>
                      <option value="diesel">Diesel</option>
                      <option value="hybride">Hybride</option>
                      <option value="electrique">Électrique</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Boîte de vitesses</label>
                    <select className="w-full p-2 rounded bg-white/10 border border-white/20 text-white">
                      <option value="">Sélectionnez</option>
                      <option value="manuelle">Manuelle</option>
                      <option value="automatique">Automatique</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm">État général</label>
                  <select className="w-full p-2 rounded bg-white/10 border border-white/20 text-white">
                    <option value="">Sélectionnez</option>
                    <option value="excellent">Excellent</option>
                    <option value="bon">Bon</option>
                    <option value="moyen">Moyen</option>
                    <option value="mauvais">À rénover</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                      placeholder="Votre numéro"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                      placeholder="Votre email"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="py-2 px-6 bg-white text-black rounded hover:bg-gray-100 transition w-full sm:w-auto"
                >
                  Obtenir une estimation
                </button>
              </form>
            </section>

            {/* Avantages */}
            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Nos Avantages</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Reprise garantie</h3>
                    <p className="text-gray-600">Nous rachetons votre véhicule quel que soit son état</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Paiement rapide</h3>
                    <p className="text-gray-600">Paiement sécurisé sous 24h après signature</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Démarches simplifiées</h3>
                    <p className="text-gray-600">Nous nous occupons de toute la paperasse</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Meilleur prix</h3>
                    <p className="text-gray-600">Prix de reprise basé sur le marché actuel</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReprisePage; 
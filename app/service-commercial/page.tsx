"use client";

import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const ServiceCommercialPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col pt-[80px] md:pt-[120px] bg-white">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-12">
            <span className="text-xl md:text-2xl">/ SERVICE</span>
            <span className="text-xl md:text-2xl font-bold">COMMERCIAL</span>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {/* Section Notre Équipe */}
            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Notre Équipe Commerciale</h2>
              <p className="text-gray-600 mb-6">
                Notre équipe de conseillers commerciaux est à votre disposition pour vous accompagner dans votre projet automobile. Experts dans leur domaine, ils sauront vous guider vers le véhicule qui correspond le mieux à vos besoins et à votre budget.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded shadow-sm">
                  <h3 className="font-semibold mb-2">Conseil Personnalisé</h3>
                  <p className="text-gray-600">Analyse détaillée de vos besoins et recommandations adaptées.</p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                  <h3 className="font-semibold mb-2">Accompagnement</h3>
                  <p className="text-gray-600">Suivi complet de votre dossier, de la sélection à la livraison.</p>
                </div>
              </div>
            </section>

            {/* Section Prise de RDV */}
            <section className="bg-black text-white rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6">Prendre Rendez-vous</h2>
              <form className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nom"
                    className="p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                />
                <textarea
                  placeholder="Message (optionnel)"
                  rows={4}
                  className="p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm">Date souhaitée</label>
                    <input
                      type="date"
                      className="w-full p-2 rounded bg-white/10 border border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Heure souhaitée</label>
                    <select className="w-full p-2 rounded bg-white/10 border border-white/20 text-white">
                      <option value="">Sélectionnez une heure</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="py-2 px-6 bg-white text-black rounded hover:bg-gray-100 transition w-full md:w-auto md:self-start"
                >
                  Demander un rendez-vous
                </button>
              </form>
            </section>

            {/* Section Engagement */}
            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Notre Engagement</h2>
              <div className="prose max-w-none text-gray-600">
                <ul className="list-disc pl-5">
                  <li>Transparence totale sur nos offres et services</li>
                  <li>Devis détaillé sans engagement</li>
                  <li>Respect de vos critères et de votre budget</li>
                  <li>Disponibilité et réactivité</li>
                  <li>Service après-vente de qualité</li>
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

export default ServiceCommercialPage; 
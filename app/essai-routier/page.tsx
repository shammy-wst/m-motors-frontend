"use client";

import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const EssaiRoutierPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col pt-[80px] md:pt-[120px] bg-white">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-12">
            <span className="text-xl md:text-2xl">/ ESSAI</span>
            <span className="text-xl md:text-2xl font-bold">ROUTIER</span>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            <section className="bg-black text-white rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6">Réserver un essai</h2>
              <form className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm">Nom complet</label>
                    <input type="text" className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" required />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Email</label>
                    <input type="email" className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm">Téléphone</label>
                    <input type="tel" className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" required />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Véhicule souhaité</label>
                    <select className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" required>
                      <option value="">Sélectionnez un modèle</option>
                      <option value="modele1">Modèle 1</option>
                      <option value="modele2">Modèle 2</option>
                      <option value="modele3">Modèle 3</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm">Date souhaitée</label>
                    <input type="date" className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" required />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Heure préférée</label>
                    <select className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" required>
                      <option value="">Choisir une heure</option>
                      <option value="09:00">09:00</option>
                      <option value="10:30">10:30</option>
                      <option value="14:00">14:00</option>
                      <option value="15:30">15:30</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="py-2 px-6 bg-white text-black rounded hover:bg-gray-100 transition w-full sm:w-auto">
                  Réserver mon essai
                </button>
              </form>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6">Informations importantes</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Documents requis</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Permis de conduire valide</li>
                    <li>• Pièce d'identité</li>
                    <li>• Justificatif de domicile</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Conditions</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Permis obtenu depuis plus d'un an</li>
                    <li>• Durée d'essai : 30 minutes</li>
                    <li>• Accompagnement par un conseiller</li>
                  </ul>
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

export default EssaiRoutierPage; 
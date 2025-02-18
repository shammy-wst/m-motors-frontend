"use client";

import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col pt-[80px] md:pt-[120px] bg-white">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-12">
            <span className="text-xl md:text-2xl">/ NOUS</span>
            <span className="text-xl md:text-2xl font-bold">CONTACTER</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <section className="bg-black text-white rounded-lg p-6 md:p-8 order-2 md:order-1">
              <h2 className="text-xl font-semibold mb-6">Formulaire de contact</h2>
              <form className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nom"
                    className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                  required
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                  required
                />
                <select className="w-full p-2 rounded bg-white/10 border border-white/20 text-white" required>
                  <option value="">Sujet de votre message</option>
                  <option value="commercial">Service Commercial</option>
                  <option value="sav">Service Après-Vente</option>
                  <option value="reclamation">Réclamation</option>
                  <option value="autre">Autre</option>
                </select>
                <textarea
                  placeholder="Votre message"
                  rows={6}
                  className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"
                  required
                />
                <button
                  type="submit"
                  className="py-2 px-6 bg-white text-black rounded hover:bg-gray-100 transition w-full sm:w-auto"
                >
                  Envoyer le message
                </button>
              </form>
            </section>

            <section className="space-y-8 order-1 md:order-2">
              <div className="bg-gray-100 rounded-lg p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-4">Nos coordonnées</h2>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    123 Avenue des Champs-Élysées, 75008 Paris
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    01 23 45 67 89
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@m-motors.fr
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-4">Horaires d&apos;ouverture</h2>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span>9h00 - 19h00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Samedi:</span>
                    <span>9h00 - 18h00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Dimanche:</span>
                    <span>Fermé</span>
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-4">Service d&apos;urgence</h2>
                <p className="text-gray-600">
                  Pour toute urgence en dehors des heures d&apos;ouverture, contactez notre assistance 24/7:
                </p>
                <p className="text-xl font-bold mt-2">0 800 123 456</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage; 
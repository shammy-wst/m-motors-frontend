"use client";

import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const MentionsLegalesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col pt-[80px] md:pt-[120px] bg-white">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-12">
            <span className="text-xl md:text-2xl">/ MENTIONS</span>
            <span className="text-xl md:text-2xl font-bold">LÉGALES</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Informations légales</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  M-MOTORS, SARL au capital de 100 000€<br />
                  RCS Paris B 123 456 789<br />
                  Siège social : 123 Avenue des Champs-Élysées, 75008 Paris<br />
                  N° TVA : FR 12 345 678 901
                </p>
                <p className="mb-4">
                  Directeur de la publication : Jean Dupont<br />
                  Responsable de la rédaction : Marie Martin
                </p>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Hébergement</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Le site m-motors.fr est hébergé par :<br />
                  OVH SAS<br />
                  2 rue Kellermann<br />
                  59100 Roubaix - France
                </p>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Propriété intellectuelle</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Protection des données personnelles</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, vous disposez d&apos;un droit d&apos;accès, de modification, de rectification et de suppression des données vous concernant.
                </p>
                <p>
                  Pour exercer ce droit, veuillez nous contacter :<br />
                  Par email : privacy@m-motors.fr<br />
                  Par courrier : M-MOTORS, Service Protection des données, 123 Avenue des Champs-Élysées, 75008 Paris
                </p>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Cookies</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez paramétrer vos préférences concernant les cookies dans les paramètres de votre navigateur.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegalesPage; 
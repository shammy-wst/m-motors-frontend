"use client";

import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PolitiqueConfidentialitePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col pt-[80px] md:pt-[120px] bg-white">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-12">
            <span className="text-xl md:text-2xl">/ POLITIQUE DE</span>
            <span className="text-xl md:text-2xl font-bold">CONFIDENTIALITÉ</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Collecte des données</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Nous collectons les informations suivantes lorsque vous utilisez notre site :
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale</li>
                  <li>Données de navigation</li>
                </ul>
                <p>
                  Ces informations sont nécessaires pour vous fournir nos services et améliorer votre expérience utilisateur.
                </p>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Utilisation des données</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">Les données collectées nous permettent de :</p>
                <ul className="list-disc pl-5">
                  <li>Traiter vos demandes de contact</li>
                  <li>Gérer vos rendez-vous</li>
                  <li>Vous envoyer des informations commerciales (avec votre accord)</li>
                  <li>Améliorer nos services</li>
                  <li>Personnaliser votre expérience</li>
                </ul>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Protection des données</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisés.
                </p>
                <p>
                  Vos données sont stockées sur des serveurs sécurisés et ne sont accessibles qu&apos;aux personnes autorisées.
                </p>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Vos droits</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Droit d&apos;accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l&apos;effacement</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité</li>
                  <li>Droit d&apos;opposition</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous à privacy@m-motors.fr
                </p>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Cookies</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez les désactiver dans les paramètres de votre navigateur.
                </p>
                <p>
                  Types de cookies utilisés :
                </p>
                <ul className="list-disc pl-5">
                  <li>Cookies essentiels au fonctionnement du site</li>
                  <li>Cookies analytiques</li>
                  <li>Cookies de personnalisation</li>
                  <li>Cookies publicitaires (avec votre consentement)</li>
                </ul>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Pour toute question concernant notre politique de confidentialité :<br />
                  Email : privacy@m-motors.fr<br />
                  Adresse : M-MOTORS, Service Protection des données<br />
                  123 Avenue des Champs-Élysées, 75008 Paris
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

export default PolitiqueConfidentialitePage; 
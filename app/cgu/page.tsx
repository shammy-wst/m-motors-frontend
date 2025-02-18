"use client";

import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const CGUPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col pt-[80px] md:pt-[120px] bg-white">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-12">
            <span className="text-xl md:text-2xl">/ CONDITIONS</span>
            <span className="text-xl md:text-2xl font-bold">GÉNÉRALES</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Article 1 - Objet</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Les présentes conditions générales d&apos;utilisation ont pour objet de définir les modalités de mise à disposition des services du site M-MOTORS et les conditions d&apos;utilisation par l&apos;utilisateur.
                </p>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Article 2 - Mentions légales</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Le site M-MOTORS est édité par la société M-MOTORS, SARL au capital de 100 000€, immatriculée au RCS de Paris sous le numéro B 123 456 789, dont le siège social est situé au 123 Avenue des Champs-Élysées, 75008 Paris.
                </p>
                <p>
                  Numéro de TVA intracommunautaire : FR 12 345 678 901<br />
                  Directeur de la publication : Jean Dupont
                </p>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Article 3 - Accès aux services</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à Internet. Tous les frais nécessaires pour l&apos;accès aux services (matériel informatique, connexion Internet...) sont à la charge de l&apos;utilisateur.
                </p>
                <p>
                  L&apos;accès aux services dédiés aux membres s&apos;effectue à l&apos;aide d&apos;un identifiant et d&apos;un mot de passe.
                </p>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Article 4 - Propriété intellectuelle</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Les marques, logos, signes et tout autre contenu du site font l&apos;objet d&apos;une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d&apos;auteur. L&apos;utilisateur sollicite l&apos;autorisation préalable du site pour toute reproduction, publication, copie des différents contenus.
                </p>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Article 5 - Responsabilité</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Les sources des informations diffusées sur le site sont réputées fiables. Toutefois, le site se réserve la faculté d&apos;une non-garantie de la fiabilité des sources.
                </p>
                <p>
                  Les informations données sur le site le sont à titre purement informatif. Ainsi, l&apos;utilisateur assume seul l&apos;entière responsabilité de l&apos;utilisation des informations et contenus du présent site.
                </p>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Article 6 - Liens hypertextes</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Le site peut contenir des liens hypertextes vers d&apos;autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site. Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de l&apos;éditeur.
                </p>
              </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Article 7 - Modification des CGU</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Les présentes conditions d&apos;utilisation peuvent être modifiées à tout moment par M-MOTORS. Les conditions générales d&apos;utilisation applicables sont celles en vigueur au moment de la connexion et de l&apos;utilisation du site par l&apos;utilisateur.
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

export default CGUPage; 
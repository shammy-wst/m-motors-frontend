import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col w-full">
      {/* Main Footer */}
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Nos voitures */}
            <div className="w-full md:w-1/5 mb-6 md:mb-0">
              <h4 className="font-bold mb-4">Nos voitures</h4>
              <ul className="space-y-2">
                <li><Link href="/catalogue" className="text-gray-400 hover:text-white">Catalogue</Link></li>
                <li><Link href="/voiture-une" className="text-gray-400 hover:text-white">Voiture Une</Link></li>
                <li><Link href="/voiture-deux" className="text-gray-400 hover:text-white">Voiture Deux</Link></li>
                <li><Link href="/nouveaux-modeles" className="text-gray-400 hover:text-white">Nouveaux Modèles</Link></li>
                <li><Link href="/diesel" className="text-gray-400 hover:text-white">Diesel</Link></li>
                <li><Link href="/essence" className="text-gray-400 hover:text-white">Essence</Link></li>
                <li><Link href="/hybride" className="text-gray-400 hover:text-white">Hybride</Link></li>
              </ul>
            </div>

            {/* Acheter */}
            <div className="w-full md:w-1/5 mb-6 md:mb-0">
              <h4 className="font-bold mb-4">Acheter</h4>
              <ul className="space-y-2">
                <li><Link href="/reserver-essai" className="text-gray-400 hover:text-white">Réserver un essai</Link></li>
                <li><Link href="/reprise-vehicule" className="text-gray-400 hover:text-white">Reprise de Véhicule</Link></li>
                <li><Link href="/offres-speciales" className="text-gray-400 hover:text-white">Offres Spéciales</Link></li>
                <li><Link href="/service-financier" className="text-gray-400 hover:text-white">Service Financier</Link></li>
              </ul>
            </div>

            {/* Service Interne */}
            <div className="w-full md:w-1/5 mb-6 md:mb-0">
              <h4 className="font-bold mb-4">Service Interne</h4>
              <ul className="space-y-2">
                <li><Link href="/it-support" className="text-gray-400 hover:text-white">IT / Support technique</Link></li>
                <li><Link href="/recrutement" className="text-gray-400 hover:text-white">Recrutement</Link></li>
                <li><Link href="/gestion-employes" className="text-gray-400 hover:text-white">Gestion des employés</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="w-full md:w-1/5 mb-6 md:mb-0">
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><Link href="/nous-contacter" className="text-gray-400 hover:text-white">Nous contacter</Link></li>
                <li><Link href="/nos-agences" className="text-gray-400 hover:text-white">Nos agences</Link></li>
              </ul>
            </div>

            {/* M-MOTORS EXPERIENCE */}
            <div className="w-full md:w-1/5">
              <h4 className="font-bold mb-4">M-MOTORS EXPERIENCE</h4>
              <ul className="space-y-2">
                <li><Link href="/notre-marque" className="text-gray-400 hover:text-white">Notre marque</Link></li>
                <li><Link href="/notre-histoire" className="text-gray-400 hover:text-white">Notre histoire</Link></li>
                <li><Link href="/nos-innovations" className="text-gray-400 hover:text-white">Nos innovations</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 text-gray-400 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <p>M-MOTORS France 2025</p>
            </div>
            <div className="w-full md:w-auto flex flex-wrap gap-4">
              <Link href="/mentions-legales" className="hover:text-white">Mentions Légales</Link>
              <Link href="/politique-confidentialite" className="hover:text-white">Politique de confidentialité</Link>
              <Link href="/cookies" className="hover:text-white">Consentement cookies</Link>
              <Link href="/cgu" className="hover:text-white">CGU</Link>
              <Link href="/estimation" className="hover:text-white">Estimation de reprise</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
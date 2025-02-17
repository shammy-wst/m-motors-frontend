import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full bg-black text-white z-50">
      <div className="flex flex-col w-full">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
          <Link href="/" className="text-xl font-bold">
            M-MOTORS
          </Link>
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/accueil" className="hover:text-gray-300">Accueil</Link>
            <Link href="/catalogue" className="hover:text-gray-300">Catalogue</Link>
            <Link href="/sav" className="hover:text-gray-300">SAV</Link>
            <Link href="/service-financier" className="hover:text-gray-300">Service Financier</Link>
            <Link href="/service-commercial" className="hover:text-gray-300">Service Commercial</Link>
            <Link href="/reprise-vehicule" className="hover:text-gray-300">Reprise de Véhicule</Link>
            <Link href="/essai-routier" className="hover:text-gray-300">Essai Routier</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            <Link href="/connexion" className="hover:text-gray-300">Connexion</Link>
          </div>
          <button className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Secondary Navigation */}
        <nav className="hidden lg:flex justify-between px-4 py-2 text-sm">
          <div className="flex space-x-6">
            <div className="group relative">
              <span className="cursor-pointer">Nos voitures</span>
              <div className="hidden group-hover:flex flex-col absolute bg-black min-w-[200px] p-2">
                <Link href="/catalogue" className="hover:text-gray-300 py-1">Catalogue</Link>
                <Link href="/voiture-une" className="hover:text-gray-300 py-1">Voiture Une</Link>
                <Link href="/voiture-deux" className="hover:text-gray-300 py-1">Voiture Deux</Link>
                <Link href="/nouveaux-modeles" className="hover:text-gray-300 py-1">Nouveaux Modèles</Link>
                <Link href="/diesel" className="hover:text-gray-300 py-1">Diesel</Link>
                <Link href="/essence" className="hover:text-gray-300 py-1">Essence</Link>
                <Link href="/hybride" className="hover:text-gray-300 py-1">Hybride</Link>
              </div>
            </div>
            <div className="group relative">
              <span className="cursor-pointer">Acheter</span>
              <div className="hidden group-hover:flex flex-col absolute bg-black min-w-[200px] p-2">
                <Link href="/reserver-essai" className="hover:text-gray-300 py-1">Réserver un essai</Link>
                <Link href="/reprise-vehicule" className="hover:text-gray-300 py-1">Reprise de Véhicule</Link>
                <Link href="/offres-speciales" className="hover:text-gray-300 py-1">Offres Spéciales</Link>
                <Link href="/service-financier" className="hover:text-gray-300 py-1">Service Financier</Link>
              </div>
            </div>
            <div className="group relative">
              <span className="cursor-pointer">Service Interne</span>
              <div className="hidden group-hover:flex flex-col absolute bg-black min-w-[200px] p-2">
                <Link href="/it-support" className="hover:text-gray-300 py-1">IT / Support technique</Link>
                <Link href="/recrutement" className="hover:text-gray-300 py-1">Recrutement</Link>
                <Link href="/gestion-employes" className="hover:text-gray-300 py-1">Gestion des employés</Link>
              </div>
            </div>
            <div className="group relative">
              <span className="cursor-pointer">Contact</span>
              <div className="hidden group-hover:flex flex-col absolute bg-black min-w-[200px] p-2">
                <Link href="/nous-contacter" className="hover:text-gray-300 py-1">Nous contacter</Link>
                <Link href="/nos-agences" className="hover:text-gray-300 py-1">Nos agences</Link>
              </div>
            </div>
            <div className="group relative">
              <span className="cursor-pointer">M-MOTORS EXPERIENCE</span>
              <div className="hidden group-hover:flex flex-col absolute bg-black min-w-[200px] p-2">
                <Link href="/notre-marque" className="hover:text-gray-300 py-1">Notre marque</Link>
                <Link href="/notre-histoire" className="hover:text-gray-300 py-1">Notre histoire</Link>
                <Link href="/nos-innovations" className="hover:text-gray-300 py-1">Nos innovations</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 
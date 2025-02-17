const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">À PROPOS DE</h2>
        <h3 className="text-xl text-center mb-8">NOUS</h3>
        <div className="max-w-4xl mx-auto text-gray-700">
          <p className="mb-6">
            Fondée en 1967, M-Motors s'est imposée comme l'un des leaders de la vente de véhicules d'occasion en France. 
            Avec plus de 90 ans d'expertise, nous nous engageons à offrir des voitures aux meilleurs tarifs, fiables, sécurisées et pré-contrôlées.
          </p>
          <p className="mb-6">
            Chaque véhicule fait l'objet de contrôles rigoureux, d'un entretien soigné et, si nécessaire, d'une remise en état pour garantir une expérience d'achat en toute confiance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">850+</div>
              <p>Employés dédiés</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <p>Clients satisfaits</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">55+</div>
              <p>Années d'expérience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
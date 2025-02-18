"use client";

const About = () => {
  const services = [
    "Service commercial pour un accompagnement personnalisé dans le choix du véhicule idéal.",
    "Service après-vente pour l&apos;entretien et la réparation, garantissant une tranquillité d&apos;esprit à long terme.",
    "Solutions de financement adaptées à tous les budgets grâce à nos partenaires financiers.",
    "Service de reprise permettant de faciliter l&apos;achat d&apos;un nouveau véhicule en valorisant l&apos;ancien.",
    "Essai routier pour permettre aux clients de tester avant d&apos;acheter.",
  ];

  return (
    <section className="flex flex-col items-center w-full py-12 md:py-20 bg-white overflow-hidden">
      <div className="w-full max-w-screen-xl px-4 md:px-8 lg:px-[20%]">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 text-center">
            <span className="text-xl md:text-2xl font-medium text-black">
              /
            </span>
            <h2 className="text-xl md:text-2xl font-medium text-black">
              À PROPOS DE
            </h2>
            <h2 className="text-xl md:text-2xl font-bold text-black">NOUS</h2>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-inter text-gray-800 text-center">
            Fondée en 1987, M-Motors s&apos;est imposée comme l&apos;un des
            leaders de la vente de véhicules d&apos;occasion en France. Avec
            plus de 30 ans d&apos;expertise, nous nous engageons à offrir à nos
            clients des véhicules de qualité, alliant fiabilité, sécurité et
            prix compétitifs.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-12 font-inter text-gray-800 text-center">
            Notre succès repose sur un service client irréprochable et une gamme
            variée de voitures adaptées à tous les besoins et budgets. Chaque
            véhicule fait l&apos;objet de contrôles rigoureux, d&apos;un
            entretien soigné et, si nécessaire, d&apos;une remise en état pour
            garantir une expérience d&apos;achat en toute confiance.
          </p>

          <div className="w-full mb-8 md:mb-12">
            <h3 className="text-lg md:text-xl font-medium mb-8 font-rem text-black text-center px-4">
              En plus de notre large sélection de véhicules, nous proposons des
              services complémentaires pour accompagner nos clients à chaque
              étape :
            </h3>
            <ul className="flex flex-col space-y-4 px-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3 font-inter">
                  <svg
                    className="w-6 h-6 text-black mt-1 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="text-base md:text-lg leading-relaxed text-gray-800">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full px-4">
            <div className="flex flex-col items-center p-6 bg-black text-white rounded-lg shadow-sm">
              <div className="text-3xl md:text-4xl font-bold mb-2 font-rem">
                800+
              </div>
              <p className="font-inter text-sm md:text-base">Employés dédiés</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-black text-white rounded-lg shadow-sm">
              <div className="text-3xl md:text-4xl font-bold mb-2 font-rem">
                1M+
              </div>
              <p className="font-inter text-sm md:text-base">
                Clients satisfaits
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-black text-white rounded-lg shadow-sm">
              <div className="text-3xl md:text-4xl font-bold mb-2 font-rem">
                35+
              </div>
              <p className="font-inter text-sm md:text-base">
                Années d&apos;expérience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

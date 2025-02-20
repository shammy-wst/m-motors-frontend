export default function PolitiqueConfidentialitePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 font-rem mb-8">
              Politique de Confidentialité
            </h1>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Collecte des données personnelles
                </h2>
                <p>Nous collectons les données personnelles suivantes :</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale</li>
                  <li>Données de connexion et de navigation</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Utilisation des données
                </h2>
                <p>Les données collectées sont utilisées pour :</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Gérer votre compte client</li>
                  <li>Traiter vos demandes et commandes</li>
                  <li>Vous informer sur nos produits et services</li>
                  <li>Améliorer notre service client</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Conservation des données
                </h2>
                <p>
                  Vos données personnelles sont conservées pendant la durée
                  nécessaire à la réalisation des finalités pour lesquelles
                  elles ont été collectées. Cette durée peut être prolongée pour
                  respecter nos obligations légales.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Vos droits</h2>
                <p>
                  Conformément au Règlement Général sur la Protection des
                  Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Droit d&apos;accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l&apos;effacement</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité</li>
                  <li>Droit d&apos;opposition</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Sécurité des données</h2>
                <p>
                  Nous mettons en œuvre les mesures techniques et
                  organisationnelles appropriées pour protéger vos données
                  personnelles contre la destruction accidentelle ou illicite,
                  la perte accidentelle, l&apos;altération, la diffusion ou
                  l&apos;accès non autorisé.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">Contact</h2>
                <p>
                  Pour toute question concernant notre politique de
                  confidentialité ou pour exercer vos droits, vous pouvez nous
                  contacter à l&apos;adresse suivante : contact@m-motors.fr
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

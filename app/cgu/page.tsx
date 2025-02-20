export default function CGUPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 font-rem mb-8">
              Conditions Générales d&apos;Utilisation
            </h1>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Article 1 - Objet</h2>
                <p>
                  Les présentes conditions générales d&apos;utilisation ont pour
                  objet de définir les modalités et conditions dans lesquelles
                  M-MOTORS met à disposition ses services sur son site internet.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Article 2 - Acceptation des CGU
                </h2>
                <p>
                  L&apos;utilisation du site implique l&apos;acceptation pleine
                  et entière des présentes conditions générales
                  d&apos;utilisation. Ces conditions d&apos;utilisation peuvent
                  être modifiées ou complétées à tout moment.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Article 3 - Description des services
                </h2>
                <p>
                  M-MOTORS propose sur son site internet les services suivants :
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Consultation du catalogue de véhicules</li>
                  <li>Création de compte utilisateur</li>
                  <li>Prise de rendez-vous</li>
                  <li>Demande d&apos;informations</li>
                  <li>Service après-vente</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Article 4 - Responsabilités
                </h2>
                <p>
                  M-MOTORS s&apos;efforce d&apos;assurer au mieux de ses
                  possibilités l&apos;exactitude et la mise à jour des
                  informations diffusées sur son site, dont elle se réserve le
                  droit de corriger le contenu à tout moment et sans préavis.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Article 5 - Propriété intellectuelle
                </h2>
                <p>
                  L&apos;ensemble des éléments figurant sur le site (textes,
                  présentations, photographies, logos...) sont protégés par les
                  dispositions du Code de la Propriété Intellectuelle.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Article 6 - Protection des données
                </h2>
                <p>
                  Les informations recueillies font l&apos;objet d&apos;un
                  traitement informatique destiné à la gestion de la relation
                  client. Conformément à la loi Informatique et Libertés, vous
                  disposez d&apos;un droit d&apos;accès, de rectification et de
                  suppression des données vous concernant.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Article 7 - Loi applicable
                </h2>
                <p>
                  Les présentes conditions générales d&apos;utilisation sont
                  régies par le droit français. En cas de litige, les tribunaux
                  français seront seuls compétents.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">Article 8 - Contact</h2>
                <p>
                  Pour toute question relative aux présentes conditions
                  générales d&apos;utilisation, vous pouvez nous contacter à
                  l&apos;adresse suivante : contact@m-motors.fr
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 font-rem mb-8">
              Mentions Légales
            </h1>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Éditeur du site</h2>
                <p>
                  M-MOTORS
                  <br />
                  SAS au capital de 100 000€
                  <br />
                  RCS Paris B 123 456 789
                  <br />
                  123 Avenue des Champs-Élysées
                  <br />
                  75008 Paris
                  <br />
                  Tél : 01 23 45 67 89
                  <br />
                  Email : contact@m-motors.fr
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Directeur de la publication
                </h2>
                <p>M. Jean Dupont, Président de M-MOTORS</p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Hébergeur</h2>
                <p>
                  OVH SAS
                  <br />
                  2 rue Kellermann
                  <br />
                  59100 Roubaix
                  <br />
                  France
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Propriété intellectuelle
                </h2>
                <p>
                  L&apos;ensemble de ce site relève de la législation française
                  et internationale sur le droit d&apos;auteur et la propriété
                  intellectuelle. Tous les droits de reproduction sont réservés,
                  y compris pour les documents téléchargeables et les
                  représentations iconographiques et photographiques.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                  Protection des données personnelles
                </h2>
                <p>
                  Conformément à la loi Informatique et Libertés du 6 janvier
                  1978 modifiée, vous disposez d&apos;un droit d&apos;accès, de
                  rectification et de suppression des données vous concernant.
                  Vous pouvez exercer ce droit en nous contactant par email à
                  l&apos;adresse : contact@m-motors.fr
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">Cookies</h2>
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience
                  de navigation. Vous pouvez paramétrer vos préférences de
                  cookies dans votre navigateur.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

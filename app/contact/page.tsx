"use client";

import { useState } from "react";
import { Input, TextArea, Button, Select } from "@/components/ui/Form";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    // TODO: Implémenter l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSuccess(true);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 font-rem mb-8">
              Contactez-nous
            </h1>

            {success ? (
              <div className="bg-green-50 border border-green-200 text-green-600 rounded-lg p-4 mb-6">
                Votre message a été envoyé avec succès. Nous vous répondrons
                dans les plus brefs délais.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-4">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Prénom"
                    name="firstName"
                    required
                    autoComplete="given-name"
                  />
                  <Input
                    label="Nom"
                    name="lastName"
                    required
                    autoComplete="family-name"
                  />
                </div>

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />

                <Input
                  label="Téléphone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                />

                <Select
                  label="Sujet"
                  name="subject"
                  required
                  options={[
                    { value: "GENERAL", label: "Renseignement général" },
                    { value: "VEHICLE", label: "Question sur un véhicule" },
                    { value: "APPOINTMENT", label: "Prise de rendez-vous" },
                    { value: "OTHER", label: "Autre" },
                  ]}
                />

                <TextArea
                  label="Message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Votre message..."
                />

                <div className="flex justify-end">
                  <Button type="submit" isLoading={isLoading}>
                    Envoyer
                  </Button>
                </div>
              </form>
            )}

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-rem mb-4">
                  Nos coordonnées
                </h2>
                <div className="space-y-4">
                  <p className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    123 Avenue des Champs-Élysées, 75008 Paris
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    01 23 45 67 89
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    contact@m-motors.fr
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 font-rem mb-4">
                  Horaires d&apos;ouverture
                </h2>
                <div className="space-y-2">
                  <p className="flex justify-between text-gray-600">
                    <span>Lundi - Vendredi</span>
                    <span>9h00 - 19h00</span>
                  </p>
                  <p className="flex justify-between text-gray-600">
                    <span>Samedi</span>
                    <span>10h00 - 18h00</span>
                  </p>
                  <p className="flex justify-between text-gray-600">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

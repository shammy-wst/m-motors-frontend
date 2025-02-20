"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Vehicle } from "@/types";
import { vehiclesAPI } from "@/services/api";
import { Button } from "@/components/ui/Form";
import { useAuth } from "@/context/AuthContext";
import CreateDossierModal from "@/components/dossiers/CreateDossierModal";

export default function VehicleDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { isAdmin, isAuthenticated } = useAuth();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showDossierModal, setShowDossierModal] = useState(false);

  const loadVehicle = useCallback(async () => {
    try {
      const response = await vehiclesAPI.get(params.id as string);
      setVehicle(response.data.data);
    } catch (error: unknown) {
      console.error("Error loading vehicle:", error);
      router.push("/vehicles");
    } finally {
      setIsLoading(false);
    }
  }, [params.id, router]);

  useEffect(() => {
    loadVehicle();
  }, [loadVehicle]);

  const handleDelete = async () => {
    if (
      !vehicle ||
      !confirm("Êtes-vous sûr de vouloir supprimer ce véhicule ?")
    ) {
      return;
    }

    try {
      await vehiclesAPI.delete(vehicle.id);
      router.push("/vehicles");
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-64 bg-gray-200 rounded-lg mb-8" />
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!vehicle) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-[400px] md:h-[500px]">
            {vehicle.imageUrls[0] ? (
              <Image
                src={vehicle.imageUrls[0]}
                alt={`${vehicle.brand} ${vehicle.model}`}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400 font-inter">
                  Aucune image disponible
                </p>
              </div>
            )}
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 font-rem mb-2">
                  {vehicle.brand} {vehicle.model}
                </h1>
                <p className="text-2xl font-bold text-black font-inter">
                  {vehicle.price.toLocaleString()} €
                </p>
              </div>
              <div className="flex gap-4">
                {isAdmin && (
                  <>
                    <Button
                      variant="outline"
                      onClick={() =>
                        router.push(`/vehicles/${vehicle.id}/edit`)
                      }
                    >
                      Modifier
                    </Button>
                    <Button variant="outline" onClick={handleDelete}>
                      Supprimer
                    </Button>
                  </>
                )}
                {isAuthenticated && (
                  <Button onClick={() => setShowDossierModal(true)}>
                    Créer un dossier
                  </Button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-rem mb-4">
                  Caractéristiques
                </h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 font-inter">
                      Année
                    </dt>
                    <dd className="text-base text-gray-900 font-inter">
                      {vehicle.year}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 font-inter">
                      Kilométrage
                    </dt>
                    <dd className="text-base text-gray-900 font-inter">
                      {vehicle.mileage.toLocaleString()} km
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 font-inter">
                      Carburant
                    </dt>
                    <dd className="text-base text-gray-900 font-inter">
                      {vehicle.fuel}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 font-inter">
                      Transmission
                    </dt>
                    <dd className="text-base text-gray-900 font-inter">
                      {vehicle.transmission}
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 font-rem mb-4">
                  Description
                </h2>
                <p className="text-base text-gray-700 font-inter whitespace-pre-line">
                  {vehicle.description}
                </p>

                {vehicle.features.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-900 font-rem mb-3">
                      Équipements
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      {vehicle.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-base text-gray-700 font-inter"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {vehicle.imageUrls.length > 1 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900 font-rem mb-4">
                  Galerie photos
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {vehicle.imageUrls.slice(1).map((url, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden"
                    >
                      <Image
                        src={url}
                        alt={`${vehicle.brand} ${vehicle.model} - Image ${
                          index + 2
                        }`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showDossierModal && (
        <CreateDossierModal
          vehicleId={vehicle.id}
          onClose={() => setShowDossierModal(false)}
          onSuccess={() => {
            setShowDossierModal(false);
            router.push("/dossiers/me");
          }}
        />
      )}
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Dossier } from "@/types";
import { dossiersAPI, adminAPI } from "@/services/api";
import { Select, FileInput } from "@/components/ui/Form";
import { useAuth } from "@/context/AuthContext";

export default function DossierDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { isAdmin } = useAuth();
  const [dossier, setDossier] = useState<Dossier | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadDossier = useCallback(async () => {
    try {
      const response = await dossiersAPI.get(params.id as string);
      setDossier(response.data.data);
    } catch (error: unknown) {
      console.error("Error loading dossier:", error);
      router.push("/dossiers");
    } finally {
      setIsLoading(false);
    }
  }, [params.id, router]);

  useEffect(() => {
    loadDossier();
  }, [loadDossier]);

  const handleStatusChange = async (status: Dossier["status"]) => {
    if (!dossier) return;

    try {
      await adminAPI.updateDossierStatus(dossier.id, status);
      loadDossier();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDocumentUpload = async (files: FileList) => {
    if (!dossier) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("documents", file);
    });

    try {
      await dossiersAPI.uploadDocuments(dossier.id, formData);
      loadDossier();
    } catch (error) {
      console.error("Error uploading documents:", error);
    }
  };

  const getStatusColor = (status: Dossier["status"]) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "IN_PROGRESS":
        return "bg-blue-100 text-blue-800";
      case "COMPLETED":
        return "bg-green-100 text-green-800";
      case "CANCELLED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: Dossier["status"]) => {
    switch (status) {
      case "PENDING":
        return "En attente";
      case "IN_PROGRESS":
        return "En cours";
      case "COMPLETED":
        return "Terminé";
      case "CANCELLED":
        return "Annulé";
      default:
        return status;
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

  if (!dossier) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 font-rem mb-2">
                  Dossier #{dossier.id.slice(0, 8)}
                </h1>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      dossier.status
                    )}`}
                  >
                    {getStatusLabel(dossier.status)}
                  </span>
                  <span className="text-sm text-gray-500 font-inter">
                    Créé le {new Date(dossier.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              {isAdmin && (
                <Select
                  value={dossier.status}
                  onChange={(e) =>
                    handleStatusChange(e.target.value as Dossier["status"])
                  }
                  options={[
                    { value: "PENDING", label: "En attente" },
                    { value: "IN_PROGRESS", label: "En cours" },
                    { value: "COMPLETED", label: "Terminé" },
                    { value: "CANCELLED", label: "Annulé" },
                  ]}
                  className="w-48"
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 font-rem mb-4">
                  Véhicule
                </h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    {dossier.vehicle.imageUrls[0] ? (
                      <Image
                        src={dossier.vehicle.imageUrls[0]}
                        alt={`${dossier.vehicle.brand} ${dossier.vehicle.model}`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                        <p className="text-gray-400 font-inter">
                          Aucune image disponible
                        </p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-rem mb-2">
                    {dossier.vehicle.brand} {dossier.vehicle.model}
                  </h3>
                  <p className="text-gray-500 font-inter">
                    {dossier.vehicle.price.toLocaleString()} € |{" "}
                    {dossier.vehicle.mileage.toLocaleString()} km |{" "}
                    {dossier.vehicle.year}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 font-rem mb-4">
                  Informations
                </h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 font-inter">
                      Type de dossier
                    </dt>
                    <dd className="text-base text-gray-900 font-inter">
                      {dossier.type === "PURCHASE"
                        ? "Achat"
                        : dossier.type === "LEASE"
                        ? "Location"
                        : "Essai"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 font-inter">
                      Date souhaitée
                    </dt>
                    <dd className="text-base text-gray-900 font-inter">
                      {new Date(dossier.desiredDate).toLocaleDateString()}
                    </dd>
                  </div>
                  {dossier.message && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500 font-inter">
                        Message
                      </dt>
                      <dd className="text-base text-gray-900 font-inter whitespace-pre-line">
                        {dossier.message}
                      </dd>
                    </div>
                  )}
                </dl>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-gray-900 font-rem mb-4">
                    Documents
                  </h3>
                  {dossier.documentUrls.length > 0 ? (
                    <ul className="space-y-2">
                      {dossier.documentUrls.map((url, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-gray-900 font-inter">
                            Document {index + 1}
                          </span>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-black hover:underline font-inter"
                          >
                            Télécharger
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 font-inter">
                      Aucun document
                    </p>
                  )}

                  <div className="mt-4">
                    <FileInput
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      multiple
                      onChange={(e) => {
                        if (e.target.files) {
                          handleDocumentUpload(e.target.files);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

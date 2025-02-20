"use client";

import { useState } from "react";
import { DossierData } from "@/types";
import { dossiersAPI } from "@/services/api";
import {
  Input,
  TextArea,
  Select,
  FileInput,
  Button,
} from "@/components/ui/Form";

interface CreateDossierModalProps {
  vehicleId: string;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CreateDossierModal({
  vehicleId,
  onClose,
  onSuccess,
}: CreateDossierModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data: DossierData = {
      vehicleId,
      type: formData.get("type") as DossierData["type"],
      desiredDate: formData.get("desiredDate") as string,
      message: formData.get("message") as string,
    };

    const documents = formData.getAll("documents") as File[];
    if (documents.length > 0) {
      data.documents = documents;
    }

    try {
      await dossiersAPI.create(data);
      onSuccess();
    } catch (error: unknown) {
      console.error("Create dossier error:", error);
      setError("Une erreur est survenue lors de la création du dossier");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 font-rem">
              Créer un dossier
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg font-inter text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <Select
              label="Type de dossier"
              name="type"
              required
              options={[
                { value: "PURCHASE", label: "Achat" },
                { value: "LEASE", label: "Location" },
                { value: "TEST_DRIVE", label: "Essai" },
              ]}
            />

            <Input
              label="Date souhaitée"
              name="desiredDate"
              type="date"
              required
              min={new Date().toISOString().split("T")[0]}
            />

            <TextArea
              label="Message"
              name="message"
              placeholder="Informations complémentaires..."
            />

            <FileInput
              label="Documents"
              name="documents"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              multiple
            />

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isLoading}
              >
                Annuler
              </Button>
              <Button type="submit" isLoading={isLoading}>
                Créer le dossier
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

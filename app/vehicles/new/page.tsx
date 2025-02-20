"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { vehiclesAPI } from "@/services/api";
import {
  Input,
  TextArea,
  Select,
  FileInput,
  Button,
} from "@/components/ui/Form";

export default function CreateVehiclePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      brand: formData.get("brand") as string,
      model: formData.get("model") as string,
      year: parseInt(formData.get("year") as string),
      price: parseInt(formData.get("price") as string),
      mileage: parseInt(formData.get("mileage") as string),
      fuel: formData.get("fuel") as
        | "DIESEL"
        | "ESSENCE"
        | "HYBRID"
        | "ELECTRIC",
      transmission: formData.get("transmission") as "MANUAL" | "AUTOMATIC",
      description: formData.get("description") as string,
      features: (formData.get("features") as string)
        .split("\n")
        .filter(Boolean),
    };

    const images = formData.getAll("images") as File[];

    try {
      const response = await vehiclesAPI.create(data);
      if (images.length > 0) {
        const imageFormData = new FormData();
        images.forEach((image) => {
          imageFormData.append("images", image);
        });
        await vehiclesAPI.uploadImages(response.data.data.id, imageFormData);
      }
      router.push(`/vehicles/${response.data.data.id}`);
    } catch (error: unknown) {
      console.error("Create vehicle error:", error);
      setError("Une erreur est survenue lors de la création du véhicule");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 font-rem mb-8">
            Ajouter un véhicule
          </h1>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg font-inter text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Marque"
                name="brand"
                required
                placeholder="Ex: Mitsubishi"
              />
              <Input
                label="Modèle"
                name="model"
                required
                placeholder="Ex: Eclipse Cross"
              />
              <Input
                label="Année"
                name="year"
                type="number"
                required
                min={1900}
                max={new Date().getFullYear() + 1}
              />
              <Input
                label="Prix"
                name="price"
                type="number"
                required
                min={0}
                step={100}
              />
              <Input
                label="Kilométrage"
                name="mileage"
                type="number"
                required
                min={0}
              />
              <Select
                label="Carburant"
                name="fuel"
                required
                options={[
                  { value: "DIESEL", label: "Diesel" },
                  { value: "ESSENCE", label: "Essence" },
                  { value: "HYBRID", label: "Hybride" },
                  { value: "ELECTRIC", label: "Électrique" },
                ]}
              />
              <Select
                label="Transmission"
                name="transmission"
                required
                options={[
                  { value: "MANUAL", label: "Manuelle" },
                  { value: "AUTOMATIC", label: "Automatique" },
                ]}
              />
            </div>

            <TextArea
              label="Description"
              name="description"
              required
              placeholder="Description détaillée du véhicule..."
            />

            <TextArea
              label="Équipements"
              name="features"
              placeholder="Un équipement par ligne..."
              rows={5}
            />

            <FileInput
              label="Images"
              name="images"
              accept="image/*"
              multiple
              required
            />

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                disabled={isLoading}
              >
                Annuler
              </Button>
              <Button type="submit" isLoading={isLoading}>
                Créer le véhicule
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { Vehicle } from "@/types";
import { vehiclesAPI } from "@/services/api";
import {
  Input,
  TextArea,
  Select,
  FileInput,
  Button,
} from "@/components/ui/Form";

export default function EditVehiclePage() {
  const router = useRouter();
  const params = useParams();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSaving(true);

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
      await vehiclesAPI.update(params.id as string, data);
      if (images.length > 0) {
        const imageFormData = new FormData();
        images.forEach((image) => {
          imageFormData.append("images", image);
        });
        await vehiclesAPI.uploadImages(params.id as string, imageFormData);
      }
      router.push(`/vehicles/${params.id}`);
    } catch (error: unknown) {
      console.error("Update vehicle error:", error);
      setError("Une erreur est survenue lors de la mise à jour du véhicule");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8" />
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 rounded" />
              <div className="h-10 bg-gray-200 rounded" />
              <div className="h-10 bg-gray-200 rounded" />
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 font-rem mb-8">
            Modifier le véhicule
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
                defaultValue={vehicle.brand}
              />
              <Input
                label="Modèle"
                name="model"
                required
                defaultValue={vehicle.model}
              />
              <Input
                label="Année"
                name="year"
                type="number"
                required
                min={1900}
                max={new Date().getFullYear() + 1}
                defaultValue={vehicle.year}
              />
              <Input
                label="Prix"
                name="price"
                type="number"
                required
                min={0}
                step={100}
                defaultValue={vehicle.price}
              />
              <Input
                label="Kilométrage"
                name="mileage"
                type="number"
                required
                min={0}
                defaultValue={vehicle.mileage}
              />
              <Select
                label="Carburant"
                name="fuel"
                required
                defaultValue={vehicle.fuel}
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
                defaultValue={vehicle.transmission}
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
              defaultValue={vehicle.description}
            />

            <TextArea
              label="Équipements"
              name="features"
              rows={5}
              defaultValue={vehicle.features.join("\n")}
            />

            <FileInput
              label="Nouvelles images"
              name="images"
              accept="image/*"
              multiple
            />

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                disabled={isSaving}
              >
                Annuler
              </Button>
              <Button type="submit" isLoading={isSaving}>
                Enregistrer
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

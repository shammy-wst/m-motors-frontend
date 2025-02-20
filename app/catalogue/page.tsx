"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Vehicle } from "@/types";
import { vehiclesAPI } from "@/services/api";
import { Table, TableActions, TableSearch } from "@/components/ui/Table";
import { Select } from "@/components/ui/Form";

export default function CataloguePage() {
  const router = useRouter();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<{
    fuel: string;
    transmission: string;
  }>({
    fuel: "",
    transmission: "",
  });

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    try {
      const response = await vehiclesAPI.list();
      setVehicles(response.data.data);
    } catch (error) {
      console.error("Error loading vehicles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.brand.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(search.toLowerCase());

    const matchesFuel = !filter.fuel || vehicle.fuel === filter.fuel;
    const matchesTransmission =
      !filter.transmission || vehicle.transmission === filter.transmission;

    return matchesSearch && matchesFuel && matchesTransmission;
  });

  const columns = [
    {
      header: "Marque",
      accessor: (vehicle: Vehicle) => vehicle.brand,
    },
    {
      header: "Modèle",
      accessor: (vehicle: Vehicle) => vehicle.model,
    },
    {
      header: "Année",
      accessor: (vehicle: Vehicle) => vehicle.year.toString(),
    },
    {
      header: "Prix",
      accessor: (vehicle: Vehicle) => `${vehicle.price.toLocaleString()} €`,
    },
    {
      header: "Kilométrage",
      accessor: (vehicle: Vehicle) => `${vehicle.mileage.toLocaleString()} km`,
    },
    {
      header: "Carburant",
      accessor: (vehicle: Vehicle) => vehicle.fuel,
    },
    {
      header: "Transmission",
      accessor: (vehicle: Vehicle) => vehicle.transmission,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-900 font-rem">
                Catalogue
              </h1>
            </div>

            <TableActions>
              <div className="flex gap-4 w-full">
                <Select
                  value={filter.fuel}
                  onChange={(e) =>
                    setFilter((prev) => ({ ...prev, fuel: e.target.value }))
                  }
                  options={[
                    { value: "", label: "Tous les carburants" },
                    { value: "DIESEL", label: "Diesel" },
                    { value: "ESSENCE", label: "Essence" },
                    { value: "HYBRID", label: "Hybride" },
                    { value: "ELECTRIC", label: "Électrique" },
                  ]}
                  className="w-48"
                />
                <Select
                  value={filter.transmission}
                  onChange={(e) =>
                    setFilter((prev) => ({
                      ...prev,
                      transmission: e.target.value,
                    }))
                  }
                  options={[
                    { value: "", label: "Toutes les transmissions" },
                    { value: "MANUAL", label: "Manuelle" },
                    { value: "AUTOMATIC", label: "Automatique" },
                  ]}
                  className="w-48"
                />
                <TableSearch
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher par marque ou modèle..."
                  className="flex-1"
                />
              </div>
            </TableActions>

            <Table
              columns={columns}
              data={filteredVehicles}
              isLoading={isLoading}
              onRowClick={(vehicle) => router.push(`/vehicles/${vehicle.id}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

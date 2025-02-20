"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Dossier } from "@/types";
import { adminAPI } from "@/services/api";
import { Table, TableActions, TableSearch } from "@/components/ui/Table";
import { Select } from "@/components/ui/Form";

export default function AdminDossiersPage() {
  const router = useRouter();
  const [dossiers, setDossiers] = useState<Dossier[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "pending" | "in-progress">(
    "all"
  );

  const loadDossiers = useCallback(async () => {
    try {
      let response;
      switch (filter) {
        case "pending":
          response = await adminAPI.getPendingDossiers();
          break;
        case "in-progress":
          response = await adminAPI.getInProgressDossiers();
          break;
        default:
          response = await adminAPI.getPendingDossiers();
      }
      setDossiers(response.data.data);
    } catch (error) {
      console.error("Error loading dossiers:", error);
    } finally {
      setIsLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    loadDossiers();
  }, [loadDossiers]);

  const handleStatusChange = async (id: string, status: Dossier["status"]) => {
    try {
      await adminAPI.updateDossierStatus(id, status);
      loadDossiers();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const filteredDossiers = dossiers.filter(
    (dossier) =>
      dossier.vehicle.brand.toLowerCase().includes(search.toLowerCase()) ||
      dossier.vehicle.model.toLowerCase().includes(search.toLowerCase())
  );

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

  const columns = [
    {
      header: "Véhicule",
      accessor: (dossier: Dossier) =>
        `${dossier.vehicle.brand} ${dossier.vehicle.model}`,
    },
    {
      header: "Client",
      accessor: (dossier: Dossier) =>
        `${dossier.user.firstName} ${dossier.user.lastName}`,
    },
    {
      header: "Type",
      accessor: (dossier: Dossier) => {
        switch (dossier.type) {
          case "PURCHASE":
            return "Achat";
          case "LEASE":
            return "Location";
          case "TEST_DRIVE":
            return "Essai";
          default:
            return dossier.type;
        }
      },
    },
    {
      header: "Date souhaitée",
      accessor: (dossier: Dossier) =>
        new Date(dossier.desiredDate).toLocaleDateString(),
    },
    {
      header: "Statut",
      accessor: (dossier: Dossier) => (
        <Select
          value={dossier.status}
          onChange={(e) =>
            handleStatusChange(dossier.id, e.target.value as Dossier["status"])
          }
          options={[
            { value: "PENDING", label: "En attente" },
            { value: "IN_PROGRESS", label: "En cours" },
            { value: "COMPLETED", label: "Terminé" },
            { value: "CANCELLED", label: "Annulé" },
          ]}
          className={`text-xs font-medium ${getStatusColor(dossier.status)}`}
        />
      ),
    },
    {
      header: "Date de création",
      accessor: (dossier: Dossier) =>
        new Date(dossier.createdAt).toLocaleDateString(),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-900 font-rem">
                Administration des dossiers
              </h1>
            </div>

            <TableActions>
              <div className="flex gap-4 w-full">
                <Select
                  value={filter}
                  onChange={(e) =>
                    setFilter(
                      e.target.value as "all" | "pending" | "in-progress"
                    )
                  }
                  options={[
                    { value: "all", label: "Tous les dossiers" },
                    { value: "pending", label: "En attente" },
                    { value: "in-progress", label: "En cours" },
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
              data={filteredDossiers}
              isLoading={isLoading}
              onRowClick={(dossier) => router.push(`/dossiers/${dossier.id}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
